import React, { useState } from 'react';

export default function AuthModals({ isOpen, mode, onClose, onSwitchMode }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    agreeToTerms: false
  });
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const isLogin = mode === 'login';

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} className="glass-panel animate-slide-up">
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {!success ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.header}>
              <h2 style={styles.title}>
                {isLogin ? (
                  <>Welcome <span style={{ color: 'var(--accent-primary)' }}>Back</span></>
                ) : (
                  <>Create your <span style={{ color: 'var(--accent-primary)' }}>Account</span></>
                )}
              </h2>
              <p style={styles.subtitle}>
                {isLogin 
                  ? 'Access your certifications, pods, and job matching history.' 
                  : 'Start your journey from prompt to product to round today.'
                }
              </p>
            </div>

            {/* Social Buttons */}
            <div style={styles.socialGrid}>
              <button type="button" style={styles.socialBtn}>
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.746-.08-1.32-.176-1.888H12.24z"/>
                </svg>
                Google
              </button>
              <button type="button" style={styles.socialBtn}>
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </button>
            </div>

            <div style={styles.divider}>
              <span style={styles.dividerText}>or continue with email</span>
            </div>

            {!isLogin && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  style={styles.input}
                  className="input-focus-glow"
                />
              </div>
            )}

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={styles.input}
                className="input-focus-glow"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={styles.input}
                className="input-focus-glow"
              />
            </div>

            {isLogin ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--accent-primary)' }} /> Keep me logged in
                </label>
                <a href="#forgot" style={{ color: 'var(--accent-secondary)' }}>Forgot Password?</a>
              </div>
            ) : (
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  name="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  style={{ marginTop: '3px', accentColor: 'var(--accent-primary)' }} 
                />
                <span style={{ color: 'var(--text-secondary)' }}>
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>
            )}

            <button type="submit" className="btn-primary" style={styles.submitBtn}>
              {isLogin ? 'Log In to Dashboard' : 'Create Account'}
            </button>

            <div style={styles.footerText}>
              {isLogin ? (
                <>
                  New to AI For Everyone?{' '}
                  <span style={styles.toggleModeLink} onClick={() => onSwitchMode('signup')}>
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span style={styles.toggleModeLink} onClick={() => onSwitchMode('login')}>
                    Log In
                  </span>
                </>
              )}
            </div>
          </form>
        ) : (
          <div style={styles.successContainer}>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.successTitle}>
              {isLogin ? 'Welcome Back!' : 'Account Created!'}
            </h2>
            <p style={styles.successText}>
              Authentication successful. Redirecting you to the AI platform dashboard...
            </p>
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
    maxWidth: '460px',
    backgroundColor: '#0f111a',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '40px 32px',
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
    textAlign: 'center',
    marginBottom: '8px',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '800',
    marginBottom: '8px',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '8px',
  },
  socialBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    padding: '10px 16px',
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  socialIcon: {
    width: '18px',
    height: '18px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '8px 0',
  },
  dividerText: {
    width: '100%',
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    '&::before': {
      content: '""',
      flex: 1,
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&::after': {
      content: '""',
      flex: 1,
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    }
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
  submitBtn: {
    marginTop: '8px',
    padding: '14px 28px',
    fontSize: '1rem',
    borderRadius: '10px',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginTop: '12px',
  },
  toggleModeLink: {
    color: 'var(--accent-primary)',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '4px',
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 10px',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    border: '2px solid var(--accent-primary)',
    color: 'var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)',
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
  }
};
// Add custom line/border style to divider manually
styles.dividerText = {
  ...styles.dividerText,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};
