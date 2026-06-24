import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2200);
  };

  return (
    <section style={styles.page} className="container">
      <div style={styles.card} className="glass-panel">
        <div style={styles.header}>
          <p style={styles.label}>Password help</p>
          <h1 style={styles.title}>Forgot your password?</h1>
          <p style={styles.subtitle}>
            Enter your email below and we’ll send you a secure reset link.
          </p>
        </div>

        {submitted ? (
          <div style={styles.messageCard}>
            <h2 style={styles.messageTitle}>Check your inbox</h2>
            <p style={styles.messageText}>
              If {email || "that email"} is registered, you’ll receive a reset
              link shortly.
            </p>
            <Link to="/login" style={styles.backLink}>
              Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.fieldLabel} htmlFor="reset-email">
              Email address
            </label>
            <input
              id="reset-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              style={styles.input}
              className="input-focus-glow"
            />

            <button
              type="submit"
              className="btn-primary"
              style={styles.submitBtn}
            >
              Send reset link
            </button>

            <div style={styles.footerNote}>
              Remembered your password?{" "}
              <Link to="/login" style={styles.footerLink}>
                Return to login
              </Link>
            </div>
          </form>
        )}
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
    gap: "20px",
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
  submitBtn: {
    width: "100%",
    padding: "16px 0",
    borderRadius: "18px",
    fontSize: "1rem",
  },
  footerNote: {
    textAlign: "center",
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
  },
  footerLink: {
    color: "var(--accent-secondary)",
    fontWeight: 700,
  },
  messageCard: {
    padding: "32px",
    borderRadius: "18px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "rgba(248, 250, 252, 0.95)",
    display: "grid",
    gap: "16px",
  },
  messageTitle: {
    fontSize: "1.75rem",
    color: "var(--accent-primary)",
  },
  messageText: {
    color: "var(--text-secondary)",
    lineHeight: 1.6,
  },
  backLink: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "14px",
    color: "var(--accent-secondary)",
    border: "1px solid rgba(29, 75, 124, 0.16)",
    textDecoration: "none",
    fontWeight: 600,
  },
};
