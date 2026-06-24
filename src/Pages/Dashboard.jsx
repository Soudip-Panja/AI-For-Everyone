import React, { useEffect, useState } from "react";
import auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await auth.fetchWithAuth("/api/auth/dashboard");
        if (!res.ok) {
          if (res.status === 401) {
            throw new Error("Unauthorized");
          }
          const txt = await res.text();
          throw new Error(txt || "Failed to fetch");
        }
        const data = await res.json();
        if (mounted) setUser(data.user || data);
      } catch (err) {
        setError(err.message || "Failed to load dashboard");
        // If unauthorized, redirect to login
        if (err.message && err.message.toLowerCase().includes("unauthorized")) {
          auth.logout();
          navigate("/login");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [navigate]);

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;

  return (
    <div style={{ padding: "80px 24px" }} className="container">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "var(--accent-primary)" }}>Dashboard</h1>
          <button className="btn-secondary" onClick={handleLogout}>
            Log out
          </button>
        </div>

        {error && (
          <div style={{ color: "#b91c1c", marginTop: 12 }}>{error}</div>
        )}

        {user ? (
          <div style={{ marginTop: 20 }}>
            <h3>Welcome, {user.name || user.email || "User"}</h3>
            <pre
              style={{ background: "#f7fafc", padding: 12, borderRadius: 8 }}
            >
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>No user data returned.</div>
        )}
      </div>
    </div>
  );
}
