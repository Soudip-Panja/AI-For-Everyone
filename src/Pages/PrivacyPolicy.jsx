import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("information-we-collect");

  const sections = [
    {
      id: "information-we-collect",
      number: "01",
      title: "Information We Collect",
      shortTitle: "1. Information We Collect",
      content: [
        "We may collect personal information such as your name, email address, login credentials, account role, learning activity, payment status, and support messages.",
        "Technical information such as browser type, device details, IP address, cookies, and usage logs may also be collected to operate and secure the platform."
      ]
    },
    {
      id: "how-we-use-information",
      number: "02",
      title: "How We Use Information",
      shortTitle: "2. How We Use Information",
      content: [
        "We use collected information to provide platform services, manage accounts, process enrollments, deliver learning content, support customer service, and improve the product experience.",
        "Information may also be used for security monitoring, fraud prevention, compliance requirements, internal analytics, and service communications related to your account or purchases."
      ]
    },
    {
      id: "sharing-of-information",
      number: "03",
      title: "Sharing of Information",
      shortTitle: "3. Sharing of Information",
      content: [
        "We do not sell personal information. Data may be shared with trusted service providers that help us operate the platform, process payments, host infrastructure, or provide communication tools.",
        "Information may also be disclosed when required by law, to enforce platform policies, or to protect users, the organization, or the public from fraud or abuse."
      ]
    },
    {
      id: "data-retention-security",
      number: "04",
      title: "Data Retention and Security",
      shortTitle: "4. Data Retention & Security",
      content: [
        "We retain information for as long as needed to provide services, comply with legal and accounting obligations, resolve disputes, and enforce agreements.",
        "Reasonable administrative, technical, and organizational safeguards are used to protect data against unauthorized access, loss, misuse, or disclosure."
      ]
    },
    {
      id: "choices-rights",
      number: "05",
      title: "Your Choices and Rights",
      shortTitle: "5. Choices and Rights",
      content: [
        "You may request correction of inaccurate profile details and may contact the organization regarding account access, data deletion requests, or privacy concerns, subject to applicable law and legitimate business needs.",
        "You can also manage certain browser-level settings such as cookie preferences, cached data, and saved credentials on your own devices."
      ]
    },
    {
      id: "policy-changes",
      number: "06",
      title: "Policy Changes",
      shortTitle: "6. Policy Changes",
      content: [
        "This policy may be updated from time to time to reflect platform, legal, or operational changes.",
        "When updates are material, the revised version will be posted on this page with an updated effective date."
      ]
    },
    {
      id: "contact",
      number: "",
      title: "Contact",
      shortTitle: "Contact",
      content: [
        "Questions about this page can be directed to the platform administrator or support contact configured for your organization."
      ]
    }
  ];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: "-140px 0px -75% 0px", // Trigger when top of section enters scroll zone below navbar
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 130; // Sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Background radial glow */}
      <div style={styles.radialGlow} />

      <div className="container">
        {/* Header Block */}
        <div style={styles.headerBlock}>
          <Link to="/" style={styles.backLink} className="privacy-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
          
          <h1 style={styles.mainTitle} className="privacy-title">
            <span className="gradient-gold-text">Privacy Policy</span>
          </h1>
          
          <p style={styles.subTitle}>
            This policy explains what information we collect, how it is used, and how we protect personal data when you use the platform.
          </p>

          <div style={styles.metaRow}>
            <div style={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.metaIcon}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Effective date: <strong>May 5, 2026</strong></span>
            </div>
            <span style={styles.metaSeparator}>|</span>
            <div style={styles.metaItem}>
              <span>Platform: <strong>AI for Everyone</strong></span>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <hr style={styles.divider} />

        {/* Layout Grid */}
        <div className="privacy-container">
          {/* Sidebar Navigation */}
          <aside className="privacy-sidebar">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleScrollTo(sec.id)}
                className={`sidebar-link ${activeSection === sec.id ? 'active' : ''}`}
              >
                {sec.shortTitle}
              </button>
            ))}
          </aside>

          {/* Cards List */}
          <main className="privacy-content">
            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="glass-panel policy-card"
              >
                <h2 style={styles.cardTitle}>
                  {sec.number && (
                    <span style={styles.cardTitleNumber}>
                      {sec.number} <span style={styles.slash}>/</span>{" "}
                    </span>
                  )}
                  {sec.title}
                </h2>
                {sec.content.map((paragraph, pIdx) => (
                  <p 
                    key={pIdx} 
                    style={{
                      ...styles.paragraph,
                      marginBottom: pIdx === sec.content.length - 1 ? '0' : '20px'
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .privacy-container {
          display: flex;
          gap: 48px;
          align-items: flex-start;
          padding-bottom: 80px;
        }
        .privacy-sidebar {
          width: 280px;
          position: sticky;
          top: 130px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .privacy-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .sidebar-link {
          display: block;
          padding: 12px 16px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
          cursor: pointer;
          text-align: left;
          font-weight: 500;
          background: transparent;
          border-top: none;
          border-right: none;
          border-bottom: none;
          outline: none;
          font-family: var(--font-body);
        }
        .sidebar-link:hover {
          color: var(--text-primary);
          background: rgba(0, 0, 0, 0.02);
        }
        .sidebar-link.active {
          color: var(--accent-gold);
          border-left-color: var(--accent-gold);
          font-weight: 600;
          background: rgba(170, 124, 17, 0.04);
        }
        .policy-card {
          scroll-margin-top: 130px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          padding: 40px !important;
        }
        .policy-card:hover {
          transform: translateY(-4px) scale(1.005);
          border-color: rgba(212, 175, 55, 0.4) !important;
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.08) !important;
        }
        .privacy-back-link {
          display: inline-flex;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 24px;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .privacy-back-link:hover {
          transform: translateX(-4px);
          color: var(--accent-gold);
        }
        
        @media (max-width: 1024px) {
          .privacy-container {
            flex-direction: column;
            gap: 32px;
          }
          .privacy-sidebar {
            width: 100%;
            position: sticky;
            top: 80px;
            z-index: 10;
            background: var(--bg-primary);
            padding: 12px 0;
            border-bottom: 1px solid var(--border-color);
            flex-direction: row !important;
            gap: 8px;
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: none; /* Firefox */
          }
          .privacy-sidebar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
          .sidebar-link {
            border-left: none;
            border-bottom: 3px solid transparent;
            padding: 8px 16px;
            white-space: nowrap;
          }
          .sidebar-link.active {
            border-left-color: transparent;
            border-bottom-color: var(--accent-gold);
            background: transparent;
          }
        }
      ` }} />
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh',
    position: 'relative',
  },
  radialGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle at top right, rgba(170, 124, 17, 0.04) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  headerBlock: {
    paddingTop: '60px',
    paddingBottom: '30px',
    position: 'relative',
    zIndex: 1,
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: 'var(--accent-primary)',
    marginBottom: '20px',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--font-headline)',
  },
  subTitle: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    maxWidth: '850px',
    marginBottom: '24px',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    flexWrap: 'wrap',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  metaIcon: {
    color: 'var(--accent-gold)',
  },
  metaSeparator: {
    color: 'var(--border-color)',
  },
  divider: {
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    marginBottom: '48px',
    marginTop: '0',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    marginBottom: '20px',
    fontFamily: 'var(--font-headline)',
  },
  cardTitleNumber: {
    color: 'var(--accent-gold)',
    marginRight: '8px',
  },
  slash: {
    color: 'rgba(170, 124, 17, 0.4)',
    fontWeight: '300',
  },
  paragraph: {
    fontSize: '0.975rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    marginBottom: '16px',
  }
};
