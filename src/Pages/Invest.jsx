import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Invest() {
  const { handleOpenEnquiry } = useOutletContext();

  const offerings = [
    {
      title: 'Capital Backing',
      desc: 'We provide pre-seed and seed investments starting at ₹10L up to ₹50L for select cohort graduates who build outstanding products in the Innovation Arena.',
      icon: '💵'
    },
    {
      title: 'Go-To-Market Support',
      desc: 'Our partners at InTime IT Services Pvt. Ltd. open up enterprise channels, helping your startup secure pilot customers and scale client pipelines rapidly.',
      icon: '🚀'
    },
    {
      title: 'Venture Mentorship',
      desc: 'Get direct coaching from seasoned enterprise system architects, risk and compliance directors, and successful software founders.',
      icon: '🧠'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <section style={styles.headerSection}>
        <div className="container">
          <div style={styles.headerContent}>
            <span style={styles.preTitle}>04 • THE CAPITAL HUB</span>
            <h1 style={styles.mainTitle}>We back the builders <br /><span className="gradient-text">Who launch startups</span></h1>
            <p style={styles.subTitle}>
              We do not stop at training developers. We identify high-potential builders, incubate their prototypes, and provide capital resources to help launch enterprise-ready startups.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Hook - PITCH HUB */}
      <section style={styles.pitchHookSection}>
        <div className="container">
          <div style={styles.pitchHookCard} className="glass-panel gold-border-glow">
            <div style={styles.pitchHookLeft}>
              <div style={{ ...styles.pitchTag, color: 'var(--accent-gold)' }}>THE AI PITCH HUB</div>
              <h2 style={styles.pitchTitle}>Are you a founder ready to raise or an investor seeking deals?</h2>
              <p style={styles.pitchDesc}>
                Startups can submit a 3-minute video pitch and project deck to gain visibility. Accredited angel investors and venture funds can browse pre-vetted AI companies in our exclusive portfolio database.
              </p>
            </div>
            <div style={styles.pitchHookRight}>
              <a 
                href="https://pitchub.aiforeveryone.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ 
                  ...styles.pitchBtn, 
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, #d4af37 100%)',
                  boxShadow: '0 4px 12px rgba(184, 134, 11, 0.2)'
                }}
              >
                Enter Pitch Hub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '50px' }}>What We Offer Founders</h2>
          
          <div style={styles.offeringsGrid} className="grid-responsive-3">
            {offerings.map((item, idx) => (
              <div 
                key={idx} 
                style={styles.offeringCard} 
                className={`glass-panel ${item.title === 'Capital Backing' ? 'gold-border-glow' : ''}`}
              >
                <div style={styles.offeringIcon}>{item.icon}</div>
                <h3 style={styles.offeringTitle}>{item.title}</h3>
                <p style={styles.offeringDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section style={styles.ctaSection}>
        <div className="container">
          <div style={styles.ctaCard} className="glass-panel gold-border-glow">
            <h2 style={styles.ctaTitle}>Let's talk capital allocation</h2>
            <p style={styles.ctaDesc}>
              Whether you are an institutional investor wishing to collaborate on cohort deal-flow, or a founder from outside our ecosystem looking for advisory, get in touch.
            </p>
            <button 
              onClick={() => handleOpenEnquiry('individual', 'I want to discuss investment opportunities.')}
              className="btn-primary" 
              style={{
                ...styles.ctaBtn,
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, #d4af37 100%)',
                boxShadow: '0 4px 12px rgba(184, 134, 11, 0.2)'
              }}
            >
              Get in Touch with Investment Committee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh',
  },
  headerSection: {
    padding: '80px 0 40px 0',
    backgroundColor: '#ffffff',
  },
  headerContent: {
    maxWidth: '800px',
  },
  preTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    letterSpacing: '0.15em',
    display: 'block',
    marginBottom: '12px',
  },
  mainTitle: {
    fontSize: '3rem',
    color: 'var(--accent-primary)',
    marginBottom: '20px',
    lineHeight: '1.15',
  },
  subTitle: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  pitchHookSection: {
    padding: '20px 0',
  },
  pitchHookCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    flexWrap: 'wrap',
    gap: '24px',
  },
  pitchHookLeft: {
    flex: '1 1 500px',
  },
  pitchTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  pitchTitle: {
    fontSize: '1.75rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  pitchDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  pitchHookRight: {
    display: 'flex',
    alignItems: 'center',
  },
  pitchBtn: {
    fontSize: '1rem',
    padding: '14px 28px',
    textDecoration: 'none',
  },
  sectionPadding: {
    padding: '80px 0',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    color: 'var(--accent-primary)',
  },
  offeringsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  offeringCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '36px',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
    }
  },
  offeringIcon: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  offeringTitle: {
    fontSize: '1.4rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  offeringDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: 0,
  },
  ctaSection: {
    padding: '40px 0 80px 0',
  },
  ctaCard: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    padding: '50px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  ctaDesc: {
    color: 'var(--text-secondary)',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  ctaBtn: {
    padding: '14px 28px',
    fontSize: '1rem',
  }
};
