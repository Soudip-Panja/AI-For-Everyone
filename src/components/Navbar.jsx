import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onOpenEnquiry, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Learn', to: '/learn' },
    { label: 'Build', to: '/build' },
    { label: 'Hire', to: '/hire' },
    { label: 'Invest', to: '/invest' },
    { label: 'Adopt', to: '/adopt' },
  ];

  return (
    <nav style={{
      ...styles.navbar,
      backgroundColor: scrolled ? 'var(--bg-glass)' : 'rgba(255, 255, 255, 0.95)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
    }} className="navbar-transition">
      <div style={styles.container}>
        {/* Left Side: Brand Logo & Tagline */}
        <Link to="/" style={styles.brandContainer}>
          <div style={styles.logoBadge}>AI</div>
          <div style={styles.logoTextContainer}>
            <span style={styles.logoText}>AI for everyone</span>
            <span style={styles.logoTagline}>LEARN. BUILD. HIRE. INVEST.</span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div style={styles.navLinksContainer} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink 
              key={link.label} 
              to={link.to} 
              style={({ isActive }) => ({
                ...styles.navLink,
                color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                fontWeight: isActive ? '700' : '500',
              })}
              className="navbar-link-el"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side: CTAs & Actions */}
        <div style={styles.actionsContainer} className="desktop-nav">
          <button style={styles.loginBtn} onClick={() => onOpenAuth('login')} className="navbar-login-btn">
            Log In
          </button>
          <button style={styles.signupBtn} onClick={() => onOpenAuth('signup')} className="navbar-signup-btn">
            Sign Up
          </button>
          <div style={styles.divider} />
          <button className="navbar-enquire-btn" style={styles.enquiryBtn} onClick={onOpenEnquiry}>
            Enquire
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button 
          style={styles.hamburger} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-hamburger"
        >
          <div style={{...styles.bar, backgroundColor: 'var(--text-primary)', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}} />
          <div style={{...styles.bar, backgroundColor: 'var(--text-primary)', opacity: mobileMenuOpen ? 0 : 1}} />
          <div style={{...styles.bar, backgroundColor: 'var(--text-primary)', transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'}} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu} className="animate-fade-in">
          <div style={styles.mobileLinks}>
            {navLinks.map((link) => (
              <NavLink 
                key={link.label} 
                to={link.to} 
                style={({ isActive }) => ({
                  ...styles.mobileLink,
                  color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                })}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div style={styles.mobileActions}>
              <button 
                style={styles.mobileLoginBtn} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="navbar-login-btn"
              >
                Log In
              </button>
              <button 
                style={styles.mobileSignupBtn} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="navbar-signup-btn"
              >
                Sign Up
              </button>
              <div style={styles.mobileDivider} />
              <button 
                className="navbar-enquire-btn" 
                style={styles.mobileEnquiryBtn} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive stylesheet */}
      <style dangerouslySetInnerHTML={{__html: `
        .navbar-transition {
          transition: background-color 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        .navbar-link-el:hover {
          color: var(--accent-secondary) !important;
        }
        .navbar-login-btn {
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
          border-radius: 9999px;
        }
        .navbar-login-btn:hover {
          color: var(--accent-secondary) !important;
          transform: translateY(-2px);
          background-color: rgba(29, 75, 124, 0.05) !important;
          box-shadow: 0 4px 15px rgba(29, 75, 124, 0.15) !important;
          border-color: rgba(29, 75, 124, 0.35) !important;
          text-shadow: 0 0 6px rgba(29, 75, 124, 0.15);
        }
        .navbar-login-btn:active {
          transform: translateY(0);
        }
        .navbar-signup-btn {
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        }
        .navbar-signup-btn:hover {
          background-color: rgba(170, 124, 17, 0.07) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(170, 124, 17, 0.15) !important;
        }
        .navbar-signup-btn:active {
          transform: translateY(0);
        }
        .navbar-enquire-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: #ffffff !important;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(8, 17, 44, 0.1);
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        }
        .navbar-enquire-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(8, 17, 44, 0.22) !important;
          filter: brightness(1.08);
        }
        .navbar-enquire-btn:active {
          transform: translateY(0);
        }
        .navbar-enquire-btn::after {
          content: none !important;
        }
      `}} />
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '0.95rem',
    boxShadow: '0 4px 12px rgba(8, 17, 44, 0.1)',
  },
  logoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    fontFamily: '"PP Writer", var(--font-serif)',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
    letterSpacing: '-0.01em',
  },
  logoTagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    letterSpacing: '0.12em',
    marginTop: '-2px',
  },
  navLinksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navLink: {
    fontSize: '0.925rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  loginBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '0.925rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '8px 14px',
    transition: 'color 0.2s',
  },
  signupBtn: {
    background: 'transparent',
    border: '1px solid var(--accent-gold)',
    borderRadius: '9999px',
    color: 'var(--accent-gold)',
    fontSize: '0.925rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '8px 18px',
    transition: 'all 0.2s',
  },
  enquiryBtn: {
    padding: '8px 20px',
    fontSize: '0.925rem',
    borderRadius: '9999px',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 101,
  },
  bar: {
    width: '100%',
    height: '2px',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'var(--bg-primary)',
    zIndex: 99,
    padding: '40px 24px',
    overflowY: 'auto',
  },
  mobileLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  mobileLink: {
    fontSize: '1.25rem',
    fontWeight: '600',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '12px',
    textDecoration: 'none',
  },
  mobileActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '20px',
  },
  mobileLoginBtn: {
    background: 'none',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    padding: '14px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  mobileSignupBtn: {
    background: 'transparent',
    border: '1px solid var(--accent-gold)',
    borderRadius: '12px',
    color: 'var(--accent-gold)',
    padding: '14px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  mobileEnquiryBtn: {
    padding: '14px',
    fontSize: '1rem',
    borderRadius: '12px',
  },
  divider: {
    width: '1px',
    height: '22px',
    backgroundColor: 'rgba(15, 23, 42, 0.22)',
    alignSelf: 'center',
  },
  mobileDivider: {
    height: '1px',
    width: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.22)',
    margin: '4px 0',
  }
};
