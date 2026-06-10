import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Build() {
  const { handleOpenEnquiry } = useOutletContext();
  const [activeArenaFaq, setActiveArenaFaq] = useState(null);

  const roadmapData = [
    { date: 'APR 2026', status: 'SHIPPED', title: 'Methodology Codified', desc: 'The Practitioner Method™ formalized across 3 tiers, 6 pillars, 4 audiences.', color: 'var(--accent-teal)' },
    { date: 'MAY 2026', status: 'SHIPPED', title: 'Inaugural Arena · HIT', desc: '1,000+ attended. 70 pods built real AI products. 15 builders being backed.', color: 'var(--accent-teal)' },
    { date: 'Q3 2026', status: 'NEXT', title: 'Main Platform Debuts', desc: 'Certifications, AI Jobs marketplace, Pitch Hub, community — unified.', color: 'var(--accent-secondary)' },
    { date: 'Q4 2026', status: 'NEXT', title: 'Global December Finale', desc: 'Regional Arena winners compete on one stage. One champion cohort. Real backing.', color: 'var(--accent-secondary)' },
    { date: '2027', status: 'ON THE HORIZON', title: '50+ Arena Editions Worldwide', desc: 'South Asia, GCC, Southeast Asia, Africa. Built in India. Made for the world.', color: 'var(--text-muted)' },
  ];

  const galleryImages = [
    { src: "/Images/1 grand-finale.jpg", caption: "THE GRAND FINALE · HALDIA INSTITUTE OF TECHNOLOGY · MAY 16, 2026", size: "span-2" },
    { src: "/Images/2 audience-qa.jpg", caption: "AUDIENCE Q&A · LIVE SESSION", size: "span-1" },
    { src: "/Images/3 founder-address.jpg", caption: "FOUNDER ADDRESS · 700+ STUDENTS TRAINED · 17 JUDGES", size: "span-1" },
    { src: "/Images/4  MENTOR RECOGNITION.jpg", caption: "MENTOR RECOGNITION", size: "span-1" },
    { src: "/Images/5  MENTOR HANDOVER · FACULTY HONOURS.jpg", caption: "MENTOR HANDOVER · FACULTY HONOURS", size: "span-1" },
    { src: "/Images/6  MENTOR HANDOVER · STAGE RECEIPT 06 · MENTOR HANDOVER · STAGE RECEIPT.jpg", caption: "MENTOR HANDOVER · STAGE RECEIPT", size: "span-1" },
    { src: "/Images/7 HIT EDITION · COMMEMORATIVE BOX.jpg", caption: "HIT EDITION · COMMEMORATIVE BOX", size: "span-1" },
    { src: "/Images/8 PREPGENIUS · POD 44 · ₹5K PRIZE COHORT.jpg", caption: "PREPGENIUS · POD 44 · ₹5K PRIZE COHORT", size: "span-1" },
    { src: "/Images/9 POD KIT · BRAND DETAIL.jpg", caption: "POD KIT · BRAND DETAIL", size: "span-1" },
    { src: "/Images/10 WINNERS' MOMENT · ₹50K · ₹30K · ₹10K 10 · WINNERS' MOMENT · ₹50K · ₹30K · ₹10K.jpg", caption: "WINNERS' MOMENT · ₹50K · ₹30K · ₹10K", size: "span-2" },
  ];

  const faqData = [
    {
      q: 'What is the AI Innovation Arena?',
      a: 'The AI Innovation Arena is the global championship for AI builders. Spring regional editions run across schools, colleges, and corporates, and one global December finale crowns a champion cohort. Winners receive capital, mentorship, and GTM backing from AI For Everyone.',
    },
    {
      q: 'How do colleges bring AI For Everyone to their campus?',
      a: 'Colleges partner with AI For Everyone to host an Innovation Arena edition on campus, deploy the 17-module flagship programme, and route their top pods into our incubation pathway. Engineering, commerce, and arts undergraduates are all eligible.',
    },
    {
      q: 'Who can apply as a builder?',
      a: 'Students, professionals, and working teams from schools, colleges, and corporates in any region can apply. Pods are evaluated through a four-phase format: ideation, prototype, build, and pitch.',
    },
    {
      q: 'What did the inaugural edition look like?',
      a: 'The inaugural edition ran at Haldia Institute of Technology on May 8 & 16, 2026. 700+ students trained, 70 pods built real AI products, and the top 10 finalists pitched to industry CIOs. 15 winning builders are now being backed.',
    },
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Header */}
      <section style={styles.headerSection}>
        <div className="container">
          <div style={styles.headerContent}>
            <span style={styles.preTitle}>02 • THE BUILDER PLATFORM</span>
            <h1 style={styles.mainTitle}>Where learners become <br /><span className="gradient-text">AI Builders</span></h1>
            <p style={styles.subTitle}>
              We don't believe in simple slide decks or certificates. In the AI Innovation Arena, cohorts design, program, and launch real-world AI software applications.
            </p>
          </div>
        </div>
      </section>

      {/* Two Conversion Hooks: Marketplace & Pitch Hub */}
      <section style={styles.hooksSection}>
        <div className="container">
          <div style={styles.hooksGrid} className="grid-responsive-2">
            
            {/* Hook 1: Marketplace */}
            <div style={styles.hookCard} className="glass-panel">
              <div style={styles.hookHeader}>
                <span style={styles.hookTag}>SOLUTIONS CENTER</span>
                <h3 style={styles.hookCardTitle}>AI Marketplace</h3>
              </div>
              <p style={styles.hookDesc}>
                Browse, test, buy, and license working AI micro-services, agents, and custom GPT models created by the certified graduates of our Innovation Arena.
              </p>
              <a 
                href="https://a4e.marketplace.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={styles.hookBtn}
              >
                Browse AI Solutions →
              </a>
            </div>

            {/* Hook 2: Pitch Hub */}
            <div style={styles.hookCard} className="glass-panel">
              <div style={styles.hookHeader}>
                <span style={styles.hookTag} style={{ color: 'var(--accent-gold)' }}>FUNDING PIPELINE</span>
                <h3 style={styles.hookCardTitle}>Pitch Hub</h3>
              </div>
              <p style={styles.hookDesc}>
                Are you an investor looking for high-quality, pre-vetted AI startups? Or a founder ready to present your Arena prototype? Connect and raise.
              </p>
              <a 
                href="https://pitchub.aiforeveryone.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ ...styles.hookBtn, border: '1px solid var(--accent-gold)' }}
              >
                Access Pitch Hub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Innovation Arena Section */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.arenaLayout}>
            <div style={styles.arenaLeft}>
              <h2 style={styles.sectionTitle}>The AI Innovation Arena</h2>
              <p style={styles.arenaText}>
                The Innovation Arena is the flagship cohort competition where groups of builders turn initial ideas into fully functional, deployed web apps under industry-level mentorship and timelines.
              </p>
              
              <div style={styles.cadenceBlock}>
                <div style={styles.cadenceTitle}>THE CADENCE</div>
                <div style={styles.cadenceRows}>
                  <div style={styles.cadenceRow}>
                    <strong>SPRING:</strong> Regional tournaments across partnering schools, universities, and corporate workspaces.
                  </div>
                  <div style={styles.cadenceRow}>
                    <strong>DECEMBER:</strong> The Global Finale. Top regional cohorts present their live builds to standard venture capitalists.
                  </div>
                </div>
              </div>

              <div style={styles.arenaCTAs}>
                <button onClick={() => handleOpenEnquiry('college', 'I want to bring the Arena to my campus.')} className="btn-primary" style={styles.arenaBtn}>
                  Bring Arena to Campus
                </button>
                <button onClick={() => handleOpenEnquiry('corporate', 'I want to sponsor a cohort or edition.')} className="btn-secondary" style={styles.arenaBtn}>
                  Sponsor a Cohort
                </button>
              </div>
            </div>

            {/* Haldia Stats Card */}
            <div style={styles.arenaRight}>
              <div style={styles.statsCard} className="glass-panel">
                <span style={styles.cardTag}>INAUGURAL cohort stats</span>
                <h3 style={styles.statsCardTitle}>Haldia Institute of Technology</h3>
                <span style={styles.statsCardDate}>MAY 2026 • KOLKATA</span>
                
                <div style={styles.statList}>
                  <div style={styles.statItem}>
                    <span style={styles.statVal}>700+</span>
                    <span style={styles.statLabel}>Students Trained</span>
                  </div>
                  <div style={styles.statItem}>
                    <span style={styles.statVal}>70</span>
                    <span style={styles.statLabel}>Working AI Products Shipped</span>
                  </div>
                  <div style={styles.statItem}>
                    <span style={styles.statVal}>₹90,000+</span>
                    <span style={styles.statLabel}>Cash Prizes Handed Out</span>
                  </div>
                  <div style={styles.statItem}>
                    <span style={styles.statVal}>15</span>
                    <span style={styles.statLabel}>Builders Backed with Capital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <h2 style={styles.sectionTitle}>Arena Gallery</h2>
            <p style={styles.centeredDesc}>
              Real cohorts, real builders, and real checks on stage. Photos from the HIT Inaugural Edition, May 2026.
            </p>
          </div>

          <div style={styles.galleryGrid}>
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                style={{ 
                  ...styles.galleryItem,
                  gridColumn: img.size === 'span-2' ? 'span 2' : 'span 1'
                }}
              >
                <img src={img.src} alt={img.caption} style={styles.galleryImg} />
                <div style={styles.galleryCaption}>{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <h2 style={styles.sectionTitle}>Momentum Roadmap</h2>
            <p style={styles.centeredDesc}>
              The AI shift is happening at lightning speed, and so are we. Tracking our progress and upcoming horizons.
            </p>
          </div>

          <div style={styles.roadmapTimeline}>
            {roadmapData.map((node, idx) => (
              <div key={idx} style={styles.timelineNode}>
                <div style={styles.timelineLeft}>
                  <span style={styles.timelineDate}>{node.date}</span>
                  <span style={{ ...styles.timelineStatus, color: node.color }}>{node.status}</span>
                </div>
                <div style={styles.timelineRight}>
                  <h4 style={styles.timelineTitle}>{node.title}</h4>
                  <p style={styles.timelineDesc}>{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
          <div style={styles.faqList}>
            {faqData.map((item, idx) => (
              <div key={idx} style={styles.faqItem}>
                <button
                  onClick={() => setActiveArenaFaq(activeArenaFaq === idx ? null : idx)}
                  style={styles.faqQuestionBtn}
                >
                  <span>{item.q}</span>
                  <span>{activeArenaFaq === idx ? '▲' : '▼'}</span>
                </button>
                {activeArenaFaq === idx && (
                  <div style={styles.faqAnswer}>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>{item.a}</p>
                  </div>
                )}
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
  hooksSection: {
    padding: '20px 0',
  },
  hooksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  hookCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hookHeader: {
    marginBottom: '16px',
  },
  hookTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '8px',
  },
  hookCardTitle: {
    fontSize: '1.6rem',
    color: 'var(--accent-primary)',
    margin: 0,
  },
  hookDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '24px',
    fontSize: '0.95rem',
    flexGrow: 1,
  },
  hookBtn: {
    alignSelf: 'flex-start',
    padding: '12px 24px',
    fontSize: '0.95rem',
    textDecoration: 'none',
  },
  sectionPadding: {
    padding: '80px 0',
  },
  arenaLayout: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '60px',
    alignItems: 'start',
  },
  arenaLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  arenaText: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  cadenceBlock: {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '24px',
    borderLeft: '4px solid var(--accent-secondary)',
  },
  cadenceTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    marginBottom: '12px',
    letterSpacing: '0.1em',
  },
  cadenceRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cadenceRow: {
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    lineHeight: '1.5',
  },
  arenaCTAs: {
    display: 'flex',
    gap: '16px',
    marginTop: '10px',
  },
  arenaBtn: {
    padding: '12px 24px',
    fontSize: '0.95rem',
  },
  arenaRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  statsCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
  },
  cardTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  statsCardTitle: {
    fontSize: '1.75rem',
    color: 'var(--accent-primary)',
    marginBottom: '4px',
  },
  statsCardDate: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: '24px',
  },
  statList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '12px',
  },
  statVal: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
  },
  statLabel: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    textAlign: 'right',
  },
  centeredHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 50px auto',
  },
  centeredDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginTop: '12px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  galleryItem: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    padding: '16px',
    overflow: 'hidden',
  },
  galleryImg: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '12px',
    backgroundColor: '#e2e8f0',
  },
  galleryCaption: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    textAlign: 'center',
  },
  roadmapTimeline: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  timelineNode: {
    display: 'flex',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '24px',
    gap: '24px',
  },
  timelineLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '180px',
    flexShrink: 0,
  },
  timelineDate: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
  },
  timelineStatus: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    marginTop: '4px',
  },
  timelineRight: {
    flexGrow: 1,
  },
  timelineTitle: {
    fontSize: '1.15rem',
    color: 'var(--accent-primary)',
    marginBottom: '6px',
  },
  timelineDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    margin: 0,
    lineHeight: '1.5',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  faqItem: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  faqQuestionBtn: {
    width: '100%',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--accent-primary)',
    textAlign: 'left',
  },
  faqAnswer: {
    padding: '0 24px 20px 24px',
    color: 'var(--text-secondary)',
    borderTop: '1px solid #f1f5f9',
    paddingTop: '20px',
  }
};
