import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
  const { handleOpenEnquiry } = useOutletContext();

  const ecosystemPillars = [
    {
      num: '01',
      title: 'LEARN',
      desc: 'Train AI capability across 11 launch certifications and 3 tiers. Built on The Practitioner Method™.',
      link: '/learn',
      btnText: 'Explore Certifications',
      color: 'var(--accent-secondary)'
    },
    {
      num: '02',
      title: 'BUILD',
      desc: 'Mentor builders through hands-on capstone projects and the global AI Innovation Arena cohort championships.',
      link: '/build',
      btnText: 'Explore the Arena',
      color: 'var(--accent-teal)'
    },
    {
      num: '03',
      title: 'HIRE',
      desc: 'Connect verified, certified AI practitioners with companies and talent acquisition recruiters.',
      link: '/hire',
      btnText: 'View Recruitment Options',
      color: '#c53030'
    },
    {
      num: '04',
      title: 'INVEST',
      desc: 'Back high-potential builders with seed capital, enterprise go-to-market channels, and mentorship.',
      link: '/invest',
      btnText: 'Learn About Seed Backing',
      color: 'var(--accent-gold)'
    }
  ];

  const portals = [
    {
      name: 'LMS PORTAL',
      desc: 'The study and coursework platform for practitioners. Complete modules, download brochures, and submit shippable projects.',
      url: 'https://lms.aiforeveryone.ai/auth/login?from=%2F',
      actionText: 'Access LMS Portal',
      bg: '#f8fafc',
      borderColor: 'var(--border-color)'
    },
    {
      name: 'JOBS PORTAL',
      desc: 'The dynamic job board. Recruit pre-vetted developers or apply for jobs matching your Practitioner certification tier.',
      url: 'https://jobs.aiforeveryone.ai/',
      actionText: 'Open Jobs Board',
      bg: '#f0fdf4',
      borderColor: '#bbf7d0'
    },
    {
      name: 'PITCH HUB',
      desc: 'The founder-investor pipeline. Submit startup video pitches or browse vetted deals emerging from the Innovation Arena.',
      url: 'https://pitchub.aiforeveryone.ai/',
      actionText: 'Go to Pitch Hub',
      bg: '#fffbeb',
      borderColor: '#fef08a'
    },
    {
      name: 'MARKETPLACE',
      desc: 'The commercial exchange. Browse, buy, sell, or license deployed AI solutions and automation tools built by graduates.',
      url: 'https://a4e.marketplace.in/',
      actionText: 'Explore Marketplace',
      bg: '#fdf2f8',
      borderColor: '#fbcfe8'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4" type="video/mp4" />
        </video>
        {/* Horizontal Gradient Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />
        <div className="container" style={{ ...styles.heroGrid, position: 'relative', zIndex: 3 }}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTagline}>THE COMPLETE AI JOURNEY • ONE ECOSYSTEM</div>
            <h1 style={styles.heroHeading}>
              From your first <span style={styles.serifItalic}>prompt</span><br />
              to your first <span style={styles.serifItalic}>product</span><br />
              to your first <span className="serifItalic gradient-gold-text">round</span>.
            </h1>
            <p style={styles.heroDesc}>
              We don't just teach AI. We train active AI practitioners, mentor them through live builds, connect them to AI roles, and back the ones who launch companies. Scoped for schools, colleges, corporate teams, and individuals.
            </p>
            <div style={styles.heroCTAs}>
              <Link to="/learn" className="btn-primary" style={styles.heroBtn}>
                Explore Programs <span className="btn-arrow">→</span>
              </Link>
              <button 
                onClick={() => handleOpenEnquiry('individual', 'I would like to speak with someone about AI for Everyone.')}
                className="btn-gold-shining" 
                style={styles.heroBtn}
              >
                Request Consultation
              </button>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
              <div style={styles.heroCard} className="glass-panel">
                <h3 style={styles.heroCardTitle}>Central Platform Hub</h3>
                <p style={styles.heroCardDesc}>
                  AI For Everyone connects four dedicated platforms. Learn, build, recruit, and fund AI companies in one compounding loop.
                </p>
                <div style={styles.heroStatGrid}>
                  <div style={styles.heroStatItem}>
                    <span style={{ ...styles.heroStatNum, color: 'var(--accent-gold)' }}>1,000+</span>
                    <span style={styles.heroStatLabel}>Certified Practitioners</span>
                  </div>
                  <div style={styles.heroStatItem}>
                    <span style={{ ...styles.heroStatNum, color: 'var(--accent-gold)' }}>70</span>
                    <span style={styles.heroStatLabel}>Arena Cohort Teams</span>
                  </div>
                  <div style={styles.heroStatItem}>
                    <span style={{ ...styles.heroStatNum, color: 'var(--accent-gold)' }}>11</span>
                    <span style={styles.heroStatLabel}>Active Certifications</span>
                  </div>
                  <div style={styles.heroStatItem}>
                    <span style={{ ...styles.heroStatNum, color: 'var(--accent-gold)' }}>15</span>
                    <span style={styles.heroStatLabel}>Startups Backed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logo Bar */}
      <section style={styles.trustSection}>
        <div className="container" style={styles.trustFlex}>
          <span style={styles.trustTitle}>SUPPORTED BY LEADING SYSTEMS</span>
          <div style={styles.trustGrid}>
            <span style={styles.trustLogo}>INTIME IT SERVICES</span>
            <span style={styles.trustLogo}>ICMAI STRATEGIC PARTNER</span>
            <span style={styles.trustLogo}>NASSCOM-JUDGED ARENA</span>
            <span style={styles.trustLogo}>HALDIA CO-FUNDED</span>
          </div>
        </div>
      </section>

      {/* Platforms Hook Section (The Central point of contact description) */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <span style={styles.sectionTag}>CENTRAL PLATFORM HUB</span>
            <h2 style={styles.sectionTitle}>One Ecosystem. Four Platforms.</h2>
            <p style={styles.sectionDesc}>
              AI For Everyone is the central point of contact that ties together these specialized portals. Read the content, explore the solutions, and jump directly into the platform you need.
            </p>
          </div>

          <div style={styles.portalsGrid} className="grid-responsive-2">
            {portals.map((portal) => (
              <div 
                key={portal.name} 
                className={portal.name === 'PITCH HUB' ? 'gold-border-glow' : ''}
                style={{ 
                  ...styles.portalCard, 
                  backgroundColor: portal.bg, 
                  borderColor: portal.name === 'PITCH HUB' ? undefined : portal.borderColor 
                }}
              >
                <div>
                  <div style={{ ...styles.portalTag, color: portal.name === 'PITCH HUB' ? 'var(--accent-gold)' : 'var(--accent-primary)' }}>{portal.name}</div>
                  <h3 style={styles.portalCardTitle}>{portal.name === 'LMS PORTAL' ? 'Coursework & Slides' : portal.name === 'JOBS PORTAL' ? 'Match & Recruit' : portal.name === 'PITCH HUB' ? 'Funding & Startups' : 'Buy & Sell Code'}</h3>
                  <p style={styles.portalDesc}>{portal.desc}</p>
                </div>
                <a 
                  href={portal.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={portal.name === 'PITCH HUB' ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    ...styles.portalBtn,
                    backgroundColor: portal.name === 'PITCH HUB' ? 'var(--accent-gold)' : '#ffffff',
                    borderColor: portal.name === 'PITCH HUB' ? 'var(--accent-gold)' : '#cbd5e1',
                    color: portal.name === 'PITCH HUB' ? '#ffffff' : 'var(--text-primary)',
                    boxShadow: portal.name === 'PITCH HUB' ? '0 4px 12px rgba(184, 134, 11, 0.2)' : 'none'
                  }}
                >
                  {portal.actionText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars Section */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <span style={styles.sectionTag}>Ecosystem Layers</span>
            <h2 style={styles.sectionTitle}>Our End-to-End Pathway</h2>
            <p style={styles.sectionDesc}>
              Most educational institutions stop at coursework. We do not. We train, mentor live building, place graduates in roles, and invest in founders.
            </p>
          </div>

          <div style={styles.pillarsGrid} className="grid-responsive-4">
            {ecosystemPillars.map((pillar) => (
              <div key={pillar.num} style={styles.pillarCard} className="glass-panel">
                <div>
                  <div style={{ ...styles.pillarNum, color: pillar.color }}>{pillar.num}</div>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
                <Link to={pillar.link} className="btn-secondary" style={styles.pillarBtn}>
                  {pillar.btnText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section style={styles.sectionPadding}>
        <div className="container" style={styles.manifestoFlex}>
          <div style={styles.manifestoLeft}>
            <span style={styles.sectionTag}>THE MANIFESTO</span>
            <h2 style={styles.manifestoHeading}>
              We don't believe in the AI gap. <br />
              <span style={{ color: 'var(--accent-secondary)' }} className="serif-italic">We close it.</span>
            </h2>
            <span style={styles.manifestoMeta}>MAY 2026 • KOLKATA • WORLDWIDE</span>
          </div>
          <div style={styles.manifestoRight}>
            <p style={styles.manifestoText}>
              The internet shift took ten years. The mobile shift took five. <strong>The AI shift is taking eighteen months.</strong>
            </p>
            <p style={styles.manifestoText}>
              We don't teach AI as theory — we train practitioners who ship. We don't end with a certificate — we end with a product. We mentor cohorts through the Innovation Arena, place them through the AI Jobs marketplace, and back the strongest into companies of their own.
            </p>
            <p style={{ ...styles.manifestoText, fontStyle: 'italic', fontWeight: '600' }}>
              "Built in India. Made for the world. Open to anyone willing to ship."
            </p>
            <span style={styles.manifestoAuthor}>— SOUMOJIT DAS • FOUNDER, AI FOR EVERYONE</span>
          </div>
        </div>
      </section>

      {/* Stats By the Numbers */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <span style={styles.sectionTag}>METRICS</span>
            <h2 style={styles.sectionTitle}>Ecosystem Performance</h2>
          </div>

          <div style={styles.statsGrid}>
            {[
              { num: '1,000+', title: 'Certified Practitioners', desc: 'Working across South Asia, GCC, and Southeast Asia.' },
              { num: '11', title: 'Launch Certifications', desc: 'Three tiers scoped by role, industry, and leadership capability.' },
              { num: '70', title: 'Arena Pods', desc: 'Teams that built and shipped live AI products in cohorts.' },
              { num: '15', title: 'Founders Backed', desc: 'Incubated teams receiving capital and pilot clients.' },
              { num: '4.9/5', title: 'Learner Rating', desc: 'Average feedback score across students and professionals.' },
              { num: '48 Hours', title: 'Proposal Turnaround', desc: 'Guaranteed delivery of custom training plans for enquiries.' }
            ].map((stat, idx) => (
              <div key={idx} style={styles.statCard}>
                <span style={styles.statNumBig} className="gradient-gold-text">{stat.num}</span>
                <h4 style={styles.statCardTitle}>{stat.title}</h4>
                <p style={styles.statCardDesc}>{stat.desc}</p>
              </div>
            ))}
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
  heroSection: {
    position: 'relative',
    padding: '80px 0 60px 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroTagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    letterSpacing: '0.15em',
    marginBottom: '16px',
  },
  heroHeading: {
    fontSize: '3.5rem',
    color: 'var(--accent-primary)',
    lineHeight: '1.1',
    marginBottom: '24px',
  },
  serifItalic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  heroCTAs: {
    display: 'flex',
    gap: '16px',
  },
  heroBtn: {
    padding: '14px 28px',
    fontSize: '1rem',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
  },
  heroCardTitle: {
    fontSize: '1.6rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  heroCardDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '30px',
    fontSize: '0.95rem',
  },
  heroStatGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  heroStatItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroStatNum: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
  },
  heroStatLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginTop: '2px',
  },
  trustSection: {
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '30px 0',
    backgroundColor: '#ffffff',
  },
  trustFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  trustTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
  },
  trustGrid: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  },
  trustLogo: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
  },
  sectionPadding: {
    padding: '80px 0',
  },
  centeredHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 60px auto',
  },
  sectionTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: 'var(--accent-primary)',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginTop: '12px',
    lineHeight: '1.6',
  },
  portalsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  portalCard: {
    borderRadius: '16px',
    border: '1px solid',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
    }
  },
  portalTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
    letterSpacing: '0.1em',
    marginBottom: '12px',
    textTransform: 'uppercase',
  },
  portalCardTitle: {
    fontSize: '1.5rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  portalDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '24px',
  },
  portalBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '10px 20px',
    fontSize: '0.9rem',
    textDecoration: 'none',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
  },
  pillarCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
    }
  },
  pillarNum: {
    fontSize: '1.5rem',
    fontWeight: '800',
    marginBottom: '14px',
  },
  pillarTitle: {
    fontSize: '1.3rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  pillarDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '24px',
  },
  pillarBtn: {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontSize: '0.85rem',
  },
  manifestoFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '60px',
    alignItems: 'start',
    flexWrap: 'wrap',
  },
  manifestoLeft: {
    flex: '1 1 300px',
  },
  manifestoHeading: {
    fontSize: '2.5rem',
    color: 'var(--accent-primary)',
    lineHeight: '1.15',
    margin: '12px 0',
  },
  manifestoMeta: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    display: 'block',
  },
  manifestoRight: {
    flex: '1.5 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  manifestoText: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    margin: 0,
  },
  manifestoAuthor: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
    marginTop: '8px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  statCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '30px',
  },
  statNumBig: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: 'var(--accent-secondary)',
    display: 'block',
    marginBottom: '8px',
  },
  statCardTitle: {
    fontSize: '1.15rem',
    color: 'var(--accent-primary)',
    marginBottom: '6px',
  },
  statCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: 0,
    lineHeight: '1.4',
  }
};