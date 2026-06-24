import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setError("");
    try {
      await auth.login(formData.email, formData.password);
      // navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitted(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section style={styles.page} className="container">
      <div style={styles.card} className="glass-panel">
        <div style={styles.header}>
          <p style={styles.label}>Secure access for AI practitioners</p>
          <h1 style={styles.title}>Welcome back to AI For Everyone</h1>
          <p style={styles.subtitle}>
            Sign in to access your learning dashboard, job marketplace, and
            innovation hub.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <div style={{ color: "#b91c1c", fontWeight: 600 }}>{error}</div>
          )}
          <label style={styles.fieldLabel} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={styles.input}
            className="input-focus-glow"
          />

          <label style={styles.fieldLabel} htmlFor="password">
            Password
          </label>
          <div style={styles.passwordRow}>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{ ...styles.input, paddingRight: 48 }}
              className="input-focus-glow"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((s) => !s)}
              style={styles.showBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div style={styles.helpRow}>
            <label style={styles.rememberLabel}>
              <input type="checkbox" style={styles.checkbox} /> Remember me
            </label>
            <Link to="/forgot-password" style={styles.forgotLink}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={styles.submitBtn}
            disabled={submitted}
          >
            {submitted ? "Logging you in..." : "Log In"}
          </button>

          <div style={styles.footerNote}>
            New here?{" "}
            <span style={styles.footerLink}>
              Reach out to the team to get started.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: "100px",
    paddingBottom: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: "520px",
    padding: "40px",
    borderRadius: "28px",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    boxShadow: "0 32px 60px rgba(15, 23, 42, 0.08)",
    background: "rgba(255, 255, 255, 0.92)",
  },
  header: {
    marginBottom: "32px",
  },
  label: {
    display: "inline-block",
    marginBottom: "12px",
    color: "var(--accent-secondary)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.75rem",
  },
  title: {
    fontSize: "2rem",
    lineHeight: 1.1,
    marginBottom: "14px",
    color: "var(--accent-primary)",
  },
  subtitle: {
    color: "var(--text-secondary)",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  form: {
    display: "grid",
    gap: "18px",
  },
  passwordRow: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  showBtn: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    color: "var(--text-secondary)",
    fontWeight: 700,
    cursor: "pointer",
    padding: "6px 8px",
  },
  fieldLabel: {
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "8px",
    fontSize: "0.95rem",
  },
  input: {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "18px",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    color: "var(--text-primary)",
    fontSize: "1rem",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },
  helpRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
  },
  rememberLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    accentColor: "var(--accent-primary)",
  },
  forgotLink: {
    color: "var(--accent-secondary)",
    fontWeight: 600,
  },
  submitBtn: {
    width: "100%",
    padding: "16px 0",
    borderRadius: "18px",
    fontSize: "1rem",
  },
  footerNote: {
    textAlign: "center",
    color: "var(--text-secondary)",
    marginTop: "8px",
    fontSize: "0.95rem",
  },
  footerLink: {
    color: "var(--accent-secondary)",
    fontWeight: 700,
  },
};
