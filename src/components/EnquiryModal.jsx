import React, { useState, useEffect } from 'react';

export default function EnquiryModal({ isOpen, onClose, defaultAudience = 'individual', defaultMessage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    audience: defaultAudience,
    message: defaultMessage
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        org: '',
        audience: defaultAudience,
        message: defaultMessage
      });
      setSubmitted(false);
    }
  }, [isOpen, defaultAudience, defaultMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      // Keep thank you screen open or close after delay
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} className="glass-panel animate-slide-up">
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.header}>
              <h2 style={styles.title}>Enquire for <span style={{ color: 'var(--accent-teal)' }}>Your Context</span></h2>
              <p style={styles.subtitle}>Let us know who you are representing, and we will get back to you with a custom proposal within 48 hours.</p>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                style={styles.input}
                className="input-focus-glow"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Work Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@organization.com"
                style={styles.input}
                className="input-focus-glow"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Organization / Institution</label>
              <input
                type="text"
                name="org"
                required
                value={formData.org}
                onChange={handleChange}
                placeholder="e.g. Acme Corp or Stanford University"
                style={styles.input}
                className="input-focus-glow"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>I am looking to explore</label>
              <select
                name="audience"
                value={formData.audience}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="individual">For Individuals (Self-paced + Cohorts)</option>
                <option value="corporate">For Corporates (Workforce AI Capability)</option>
                <option value="college">For Colleges (Institutional Flagships)</option>
                <option value="school">For Schools (Early-stage AI Literacy)</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Context / Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your goals, cohort size, or specific timeline..."
                rows="4"
                style={styles.textarea}
                className="input-focus-glow"
              />
            </div>

            <button type="submit" className="btn-primary" style={styles.submitBtn}>
              Submit Proposal Request
            </button>
          </form>
        ) : (
          <div style={styles.successContainer}>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.successTitle}>Request Submitted!</h2>
            <p style={styles.successText}>
              Thank you, <strong>{formData.name}</strong>. We've received your request for <strong>{formData.org}</strong>.
            </p>
            <p style={styles.successMuted}>
              Our team is drafting your custom proposal. Check your inbox at <strong>{formData.email}</strong> soon.
            </p>
            <button className="btn-secondary" style={{ marginTop: '24px' }} onClick={onClose}>
              Back to Website
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .input-focus-glow:focus {
          outline: none;
          border-color: var(--accent-primary) !important;
          box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);
        }
      `}} />
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(5, 6, 8, 0.85)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    position: 'relative',
    width: '100%',
    maxWidth: '550px',
    backgroundColor: '#0f111a',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '40px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '24px',
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  header: {
    marginBottom: '8px',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '800',
    marginBottom: '8px',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    letterSpacing: '0.01em',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    transition: 'all 0.2s',
  },
  select: {
    backgroundColor: '#161925',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    outline: 'none',
  },
  textarea: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    resize: 'vertical',
    transition: 'all 0.2s',
  },
  submitBtn: {
    marginTop: '10px',
    padding: '14px 28px',
    fontSize: '1rem',
    borderRadius: '10px',
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px 10px',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
    border: '2px solid var(--accent-teal)',
    color: 'var(--accent-teal)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)',
  },
  successTitle: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '12px',
  },
  successText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '8px',
  },
  successMuted: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  }
};
