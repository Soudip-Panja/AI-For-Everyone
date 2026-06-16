import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
  const { handleOpenEnquiry } = useOutletContext();
  const [floatingEmojis, setFloatingEmojis] = React.useState([]);

  const addFloatingEmoji = (emoji) => {
    const id = Date.now() + Math.random();
    const randomLeft = Math.floor(Math.random() * 40) + 10;
    setFloatingEmojis(prev => [...prev, { id, emoji, left: randomLeft }]);
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(item => item.id !== id));
    }, 1200);
  };

  const ecosystemPillars = [
    {
      num: '01',
      title: 'LEARN',
      desc: 'Train AI capability across 11 launch certifications and 3 tiers. Built on The Practitioner Method™.',
      link: '/learn',
      btnText: 'Explore Certifications',
      color: 'var(--accent-secondary)',
      rgb: '29, 75, 124'
    },
    {
      num: '02',
      title: 'BUILD',
      desc: 'Mentor builders through hands-on capstone projects and the global AI Innovation Arena cohort championships.',
      link: '/build',
      btnText: 'Explore the Arena',
      color: 'var(--accent-teal)',
      rgb: '15, 118, 110'
    },
    {
      num: '03',
      title: 'HIRE',
      desc: 'Connect verified, certified AI practitioners with companies and talent acquisition recruiters.',
      link: '/hire',
      btnText: 'View Recruitment Options',
      color: '#c53030',
      rgb: '197, 48, 48'
    },
    {
      num: '04',
      title: 'INVEST',
      desc: 'Back high-potential builders with seed capital, enterprise go-to-market channels, and mentorship.',
      link: '/invest',
      btnText: 'Learn About Seed Backing',
      color: 'var(--accent-gold)',
      rgb: '170, 124, 17'
    }
  ];

  const portals = [
    {
      name: 'LMS PORTAL',
      desc: 'The study and coursework platform for practitioners. Complete modules, download brochures, and submit shippable projects.',
      url: 'https://lms.aiforeveryone.ai/auth/login?from=%2F',
      actionText: 'Access LMS Portal',
      image: '/LMS.avif',
      accentClass: 'portal-accent-lms'
    },
    {
      name: 'JOBS PORTAL',
      desc: 'The dynamic job board. Recruit pre-vetted developers or apply for jobs matching your Practitioner certification tier.',
      url: 'https://jobs.aiforeveryone.ai/',
      actionText: 'Open Jobs Board',
      image: '/Job.avif',
      accentClass: 'portal-accent-jobs'
    },
    {
      name: 'PITCH HUB',
      desc: 'The founder-investor pipeline. Submit startup video pitches or browse vetted deals emerging from the Innovation Arena.',
      url: 'https://pitchub.aiforeveryone.ai/',
      actionText: 'Go to Pitch Hub',
      image: '/Pitch.avif',
      accentClass: 'portal-accent-pitch'
    },
    {
      name: 'MARKETPLACE',
      desc: 'The commercial exchange. Browse, buy, sell, or license deployed AI solutions and automation tools built by graduates.',
      url: 'https://a4e.marketplace.in/',
      actionText: 'Explore Marketplace',
      image: '/Market.avif',
      accentClass: 'portal-accent-market'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero viewport container to fill exactly 100vh on load */}
      <div className="hero-viewport-wrapper">
        {/* Hero Section */}
        <section className="hero-section-class">
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
          <div className="container hero-grid-class" style={{ position: 'relative', zIndex: 3 }}>
            <div style={styles.heroLeft}>
              <div style={styles.heroTagline}>THE COMPLETE AI JOURNEY • ONE ECOSYSTEM</div>
              <h1 className="hero-heading-class">
                <span className="anim-shine-text anim-line-1-text">From your first</span> <span style={styles.serifItalic} className="anim-gold-text anim-line-1-gold">prompt</span><br />
                <span className="anim-shine-text anim-line-2-text">to your first</span> <span style={styles.serifItalic} className="anim-gold-text anim-line-2-gold">product</span><br />
                <span className="anim-shine-text anim-line-3-text">to your first</span> <span style={styles.serifItalic} className="anim-gold-text anim-line-3-gold">round.</span>
              </h1>
              <p className="hero-desc-class">
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
                <div className="glass-panel hero-card-class">
                  <h3 style={styles.heroCardTitle}>Central Platform Hub</h3>
                  <p className="hero-card-desc-class">
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
        <section className="trust-section-class">
          <div className="trust-shine-sweep" />
          <div className="container" style={styles.trustFlex}>
            <div className="trust-label">
              <span className="trust-label-pulse"></span>
              SUPPORTED BY LEADING SYSTEMS
            </div>
            <div className="trust-logos-wrapper">
              <div className="trust-logo-cell">
                <span className="trust-logo-text">INTIME IT SERVICES</span>
              </div>
              <div className="trust-logo-cell">
                <span className="trust-logo-text">ICMAI STRATEGIC PARTNER</span>
              </div>
              <div className="trust-logo-cell">
                <span className="trust-logo-text">NASSCOM-JUDGED ARENA</span>
              </div>
              <div className="trust-logo-cell">
                <span className="trust-logo-text">HALDIA CO-FUNDED</span>
              </div>
            </div>
          </div>
        </section>
      </div>

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
              <div 
                key={pillar.num} 
                className="ecosystem-card glass-panel"
                style={{
                  '--accent-color': pillar.color,
                  '--accent-rgb': pillar.rgb
                }}
              >
                <div>
                  <div className="ecosystem-num" style={{ color: pillar.color }}>{pillar.num}</div>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
                <Link to={pillar.link} className="ecosystem-btn">
                  {pillar.btnText} <span className="btn-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Arena Video Showcase Section */}
      <section className="arena-video-section">
        <div className="container">
          <div className="arena-video-header">
            <h2 className="arena-video-title">Experience the AI Innovation Arena</h2>
            <p className="arena-video-desc">
              Watch our cohorts collaborate, iterate, and pitch their AI products to industry experts. From zero capability to shipping production-ready software in weeks.
            </p>
          </div>

          <div className="arena-video-card">
            <div className="arena-video-frame">
              <div className="arena-video-container">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="arena-video-element"
                >
                  <source src="/Innovation Arena.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating Live Indicator */}
              <div className="arena-live-badge">
                <span className="arena-live-dot"></span>
                LIVE
              </div>

              {/* Current Viewers Info */}
              <div className="arena-viewers-badge">
                <span>👤</span>
                700+ active builders
              </div>

              {/* Reaction Buttons */}
              <button 
                className="arena-reaction-heart" 
                onClick={() => addFloatingEmoji('❤️')}
                title="Love"
              >
                ❤️
              </button>
              <button 
                className="arena-reaction-thumbsup" 
                onClick={() => addFloatingEmoji('👍')}
                title="Like"
              >
                👍
              </button>

              {/* Floating Emoji Particles */}
              {floatingEmojis.map(item => (
                <span 
                  key={item.id} 
                  className="floating-emoji"
                  style={{
                    bottom: '120px',
                    right: `${item.left}px`
                  }}
                >
                  {item.emoji}
                </span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a 
              href="#enterprise-developments" 
              className="btn-gold-shining" 
              style={{ 
                textDecoration: 'none', 
                padding: '14px 32px'
              }}
            >
              Bring Arena to your Campus →
            </a>
          </div>
        </div>
      </section>

      {/* Platforms Hook Section (The Central point of contact description) */}
      <section className="portals-section-custom">
        <div className="container">
          <div style={styles.centeredHeader}>
            <span style={styles.sectionTag}>CENTRAL PLATFORM HUB</span>
            <h2 style={styles.sectionTitle}>One Ecosystem. Four Platforms.</h2>
            <p style={styles.sectionDesc}>
              AI For Everyone is the central point of contact that ties together these specialized portals. Read the content, explore the solutions, and jump directly into the platform you need.
            </p>
          </div>

          <div className="portals-grid-layout">
            {portals.map((portal) => (
              <div 
                key={portal.name} 
                className={`portal-card-custom ${portal.accentClass}`}
              >
                {/* Image Container */}
                <div className="portal-card-image-wrapper">
                  <img src={portal.image} alt={portal.name} className="portal-card-image" />
                </div>

                {/* Content */}
                <div className="portal-card-content">
                  <div>
                    <div className="portal-card-tag">{portal.name}</div>
                    <h3 className="portal-card-main-title">
                      {portal.name === 'LMS PORTAL' ? 'Coursework & Slides' : 
                       portal.name === 'JOBS PORTAL' ? 'Match & Recruit' : 
                       portal.name === 'PITCH HUB' ? 'Funding & Startups' : 'Buy & Sell Code'}
                    </h3>
                    <p className="portal-card-desc-paragraph">{portal.desc}</p>
                  </div>
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portal-card-action-btn"
                  >
                    {portal.actionText} <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="manifesto-section-dark">
        <div className="container manifesto-container">
          <div className="manifesto-left-block">
            <span className="manifesto-tag-custom">THE MANIFESTO</span>
            <h2 className="manifesto-heading-custom">
              We don't believe in the AI gap. <br />
              <span style={{ color: 'var(--accent-gold)' }} className="serif-italic">We close it.</span>
            </h2>
            <span className="manifesto-meta-custom">MAY 2026 • KOLKATA • WORLDWIDE</span>
          </div>
          <div className="manifesto-right-block">
            <p className="manifesto-paragraph">
              The internet shift took ten years. The mobile shift took five. <strong>The AI shift is taking eighteen months.</strong>
            </p>
            <p className="manifesto-paragraph">
              We don't teach AI as theory — we train practitioners who ship. We don't end with a certificate — we end with a product. We mentor cohorts through the Innovation Arena, place them through the AI Jobs marketplace, and back the strongest into companies of their own.
            </p>
            <p className="manifesto-quote">
              "Built in India. Made for the world. Open to anyone willing to ship."
            </p>
            <span className="manifesto-author-custom">— SOUMOJIT DAS • FOUNDER, AI FOR EVERYONE</span>
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
              <div key={idx} className="stat-card-custom">
                <span style={styles.statNumBig} className="gradient-gold-text">{stat.num}</span>
                <h4 style={styles.statCardTitle}>{stat.title}</h4>
                <p style={styles.statCardDesc}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Scoping CTA Section */}
      <section id="enterprise-developments" className="adopt-cta-section-bg" style={{ ...styles.sectionPadding, borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="adopt-cta-card">
            <div className="adopt-cta-content">
              <span className="adopt-cta-tag">ENTERPRISE DEPLOYMENTS</span>
              <h2 className="adopt-cta-title">Submit a custom scoping proposal</h2>
              <p className="adopt-cta-desc">
                Bring AI capability to your business or college campus. Submit details of your organization structure, current software integrations, and training requirements to get a custom roadmap in 48 hours.
              </p>
            </div>
            <Link to="/adopt#enquiry-form" className="btn-primary adopt-cta-btn">
              Create Scoping Proposal →
            </Link>
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
  serifItalic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontWeight: '500',
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
  heroCardTitle: {
    fontSize: '1.6rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
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