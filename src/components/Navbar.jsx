import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenEnquiry, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return 'dark'; // Default theme
    }
    return 'dark';
  });

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

  // Update theme document attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'Learn', href: '#learn' },
    { label: 'Build', href: '#build' },
    { label: 'Hire', href: '#hire' },
    { label: 'Invest', href: '#invest' },
    { label: 'Adopt', href: '#adopt' },
    { label: 'Method', href: '#method' },
    { label: 'Industries', href: '#industries' },
  ];

  return (
    <nav style={{
      ...styles.navbar,
      backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.15)' : 'none',
    }} className="navbar-transition">
      <div style={styles.container}>
        {/* Left Side: Brand Logo & Tagline */}
        <a href="/" style={styles.brandContainer}>
          <div style={styles.logoBadge}>AI</div>
          <div style={styles.logoTextContainer}>
            <span style={styles.logoText}>AI for everyone</span>
            <span style={styles.logoTagline}>LEARN. BUILD. HIRE. INVEST.</span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <div style={styles.navLinksContainer} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: CTAs & Actions */}
        <div style={styles.actionsContainer} className="desktop-nav">
          {/* Theme Switcher Button */}
          <button 
            onClick={toggleTheme} 
            style={styles.themeToggleBtn} 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <button style={styles.loginBtn} onClick={() => onOpenAuth('login')}>
            Log In
          </button>
          <button style={styles.signupBtn} onClick={() => onOpenAuth('signup')}>
            Sign Up
          </button>
          <button className="btn-primary" style={styles.enquiryBtn} onClick={onOpenEnquiry}>
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
          <div style={{...styles.bar, transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}} />
          <div style={{...styles.bar, opacity: mobileMenuOpen ? 0 : 1}} />
          <div style={{...styles.bar, transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'}} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu} className="animate-fade-in">
          <div style={styles.mobileLinks}>
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                style={styles.mobileLink} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div style={styles.mobileActions}>
              <button style={styles.mobileThemeToggleBtn} onClick={toggleTheme}>
                Theme: {theme === 'dark' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
              </button>
              <button 
                style={styles.mobileLoginBtn} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
              >
                Log In
              </button>
              <button 
                style={styles.mobileSignupBtn} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
              >
                Sign Up
              </button>
              <button 
                className="btn-primary" 
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
    boxShadow: '0 0 15px rgba(124, 58, 237, 0.4)',
  },
  logoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
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
    fontWeight: '500',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
    '&:hover': {
      color: 'var(--text-primary)',
    }
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  themeToggleBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
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
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '9999px',
    color: 'var(--text-primary)',
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
    backgroundColor: 'var(--text-primary)',
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
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '12px',
  },
  mobileActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '20px',
  },
  mobileThemeToggleBtn: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    padding: '14px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
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
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    padding: '14px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  mobileEnquiryBtn: {
    padding: '14px',
    fontSize: '1rem',
    borderRadius: '12px',
  }
};
