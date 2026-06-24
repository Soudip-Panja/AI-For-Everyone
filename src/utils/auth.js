const API_BASE = window.__API_BASE__ || "";

async function handleJSONResponse(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function login(email, password) {
  const res = await fetch(API_BASE + "/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const payload = await handleJSONResponse(res);
    throw new Error(payload?.message || payload || "Login failed");
  }
  // Try to parse JSON body
  const data = await handleJSONResponse(res);

  // Accept tokens from body under multiple possible keys
  const possibleAccess =
    data?.accessToken ||
    data?.token ||
    data?.access_token ||
    data?.authorization;
  const possibleRefresh = data?.refreshToken || data?.refresh_token;
  const possibleExpiry = data?.expiresIn || data?.expires_in;

  // Also accept Authorization header (Bearer ...)
  const authHeader =
    res.headers.get("authorization") || res.headers.get("Authorization");
  let headerToken = null;
  if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
    headerToken = authHeader.slice(7).trim();
  }

  const accessToken = possibleAccess || headerToken;
  if (accessToken) localStorage.setItem("accessToken", accessToken);
  if (possibleRefresh) localStorage.setItem("refreshToken", possibleRefresh);
  if (possibleExpiry)
    localStorage.setItem(
      "accessTokenExpiry",
      String(Date.now() + Number(possibleExpiry) * 1000),
    );

  // Debugging helper - leave a lightweight console log to aid troubleshooting in dev
  try {
    console.debug("[auth] login response", {
      data,
      authHeader,
      accessStored: !!accessToken,
    });
  } catch (e) {}

  return data;
}

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token");
  const res = await fetch(API_BASE + "/api/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
  if (!res.ok) {
    logout();
    const payload = await handleJSONResponse(res);
    throw new Error(payload?.message || "Refresh failed");
  }
  const data = await res.json();
  if (data.accessToken) localStorage.setItem("accessToken", data.accessToken);
  if (data.refreshToken)
    localStorage.setItem("refreshToken", data.refreshToken);
  if (data.expiresIn)
    localStorage.setItem(
      "accessTokenExpiry",
      String(Date.now() + data.expiresIn * 1000),
    );
  return data;
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessTokenExpiry");
}

export async function fetchWithAuth(input, init = {}) {
  let accessToken = localStorage.getItem("accessToken");

  const doFetch = async () => {
    const headers = new Headers(init.headers || {});
    if (accessToken) headers.set("Authorization", "Bearer " + accessToken);
    const resp = await fetch(input, { ...init, headers });
    return resp;
  };

  let res = await doFetch();
  if (res.status === 401) {
    try {
      const refreshed = await refreshToken();
      accessToken =
        refreshed.accessToken || localStorage.getItem("accessToken");
      res = await doFetch();
    } catch (err) {
      throw err;
    }
  }
  return res;
}

export function isLoggedIn() {
  const token = localStorage.getItem("accessToken");
  return Boolean(token);
}

export default { login, refreshToken, logout, fetchWithAuth, isLoggedIn };
