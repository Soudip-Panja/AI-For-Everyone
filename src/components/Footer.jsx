import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Grid */}
        <div className="footer-main-grid" style={styles.grid}>

          {/* Col 1 — Brand */}
          <div style={styles.brandCol}>
            <div style={styles.logoRow}>
              <div style={styles.logoIconBox}>
                <span style={styles.logoIconText}>AI</span>
              </div>
              <span style={styles.logoName}>AI for everyone</span>
            </div>

            <p style={styles.tagline}>LEARN. BUILD. HIRE. INVEST.</p>

            <p style={styles.quote}>
              <em>From your first prompt to your first product to your first round.</em>
            </p>

            <div style={styles.socialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialBtn}
                aria-label="Instagram"
                className="footer-social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialBtn}
                aria-label="YouTube"
                className="footer-social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.2C4.6 3 3.3 3 2.2 4.2 1.3 5 1 7 1 7S.7 9.3.7 11.5v2.1c0 2.2.3 4.4.3 4.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22.1 12 22.1 12 22.1s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5v-2.1C23.3 9.3 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/aiforeveryone"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialBtn}
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div style={styles.navCol}>
            <div style={styles.colLabel}>NAVIGATE</div>
            <ul style={styles.navList}>
              {[
                { label: 'Learn (Certifications)', to: '/learn' },
                { label: 'Build (Innovation Arena)', to: '/build' },
                { label: 'Hire (AI Jobs Portal)', to: '/hire' },
                { label: 'Invest (Pitch Hub)', to: '/invest' },
                { label: 'Adopt (Adoption Services)', to: '/adopt' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} style={styles.navLink} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div style={styles.contactCol}>
            <div style={styles.colLabel}>CONTACT</div>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <div style={styles.contactItemLabel}>EMAIL</div>
                <a href="mailto:ai@intimeinc.co.in" style={styles.contactItemValue} className="footer-nav-link">
                  ai@intimeinc.co.in
                </a>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactItemLabel}>CALL US</div>
                <a href="tel:+919051615690" style={styles.contactItemValue} className="footer-nav-link">
                  +91 90516 15690
                </a>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactItemLabel}>WHATSAPP</div>
                <a
                  href="https://wa.me/919051615690"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactItemValue}
                  className="footer-nav-link"
                >
                  Message us →
                </a>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactItemLabel}>OFFICE</div>
                <span style={styles.contactItemValue}>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Col 4 — Legal & Support / Languages */}
          <div style={styles.legalCol}>
            <div style={styles.colLabel}>LEGAL & SUPPORT</div>
            <ul style={styles.navList}>
              <li>
                <Link to="/privacy-policy" style={styles.navLink} className="footer-nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" style={styles.navLink} className="footer-nav-link">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div style={{ ...styles.colLabel, marginTop: '30px' }}>LANGUAGES</div>
            <div style={styles.languagesRow}>
              <a href="#" style={styles.langLink} className="footer-nav-link">English</a>
              <span style={styles.langDot}>&middot;</span>
              <a href="#" style={styles.langLink} className="footer-nav-link">العربية</a>
              <span style={styles.langDot}>&middot;</span>
              <a href="#" style={styles.langLink} className="footer-nav-link">বাংলা</a>
              <span style={styles.langDot}>&middot;</span>
              <a href="#" style={styles.langLink} className="footer-nav-link">हिंदी</a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBarOuter}>
        <div style={styles.bottomBarContainer}>
          <p style={styles.copyright}>
            © 2026 AI For Everyone. Powered by InTime IT Services Pvt. Ltd.
          </p>
          <p style={styles.trademark}>
            The Practitioner Method™ and the AI+ certification family are proprietary marks of InTime IT Services Pvt. Ltd.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,255,255,0.2) !important;
          color: #ffffff !important;
        }
        .footer-nav-link:hover {
          color: #ffffff !important;
        }
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}} />
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0a132c', /* Slightly lighter solid dark navy */
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '72px 0 0 0',
  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: '60px',
    paddingBottom: '60px',
  },

  /* Brand Col */
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, var(--accent-secondary) 0%, #3182ce 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(43,108,176,0.35)',
    flexShrink: 0,
  },
  logoIconText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: '0.9rem',
    letterSpacing: '-0.02em',
  },
  logoName: {
    fontFamily: '"PP Writer", var(--font-serif)',
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '-0.01em',
  },
  tagline: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.12em',
    color: 'rgba(255,255,255,0.35)',
    margin: 0,
  },
  quote: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: '1.6',
    margin: 0,
    maxWidth: '300px',
  },
  socialRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '4px',
  },
  socialBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.5)',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },

  /* Navigate Col */
  navCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  colLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.35)',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  navLink: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },

  /* Contact Col */
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  contactItemLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.62rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    color: 'rgba(245,158,11,0.7)',
  },
  contactItemValue: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  legalCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  languagesRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px 8px',
  },
  langLink: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  langDot: {
    color: 'rgba(255,255,255,0.35)',
    userSelect: 'none',
  },

  /* Bottom Bar */
  bottomBarOuter: {
    backgroundColor: '#050a18', /* Slightly darker than main footer background */
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  bottomBarContainer: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '24px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px',
    flexWrap: 'wrap',
  },
  copyright: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    color: 'rgba(255, 255, 255, 0.45)',
    lineHeight: '1.55',
    margin: 0,
    maxWidth: '300px',
  },
  trademark: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    color: 'rgba(255, 255, 255, 0.45)',
    lineHeight: '1.55',
    margin: 0,
    maxWidth: '500px',
    textAlign: 'right',
  },
};
