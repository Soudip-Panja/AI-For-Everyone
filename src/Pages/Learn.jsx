import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Learn() {
  const { handleOpenEnquiry } = useOutletContext();
  const [activeCertTab, setActiveCertTab] = useState('All');
  const [activeMethodTab, setActiveMethodTab] = useState(1);

  const certificationsData = [
    {
      id: 'AIE-NAT-001',
      title: 'AI Essentials',
      types: ['AI NATIVE'],
      desc: "Everyone's first step into AI — students, parents, professionals.",
      duration: '8 HRS • P01 – AI Foundations',
      quote: '"Use ChatGPT, Claude, and Gemini effectively. Write structured prompts. Build a personal Custom GPT."',
      ship: '1 deployed Custom GPT project + your personal prompting toolkit.',
      tags: ['School', 'College', 'Corporate', 'Individual']
    },
    {
      id: 'AIE-NAT-002',
      title: 'AI for Everyone',
      types: ['AI NATIVE'],
      desc: 'AI literacy for working professionals across any role.',
      duration: '8 HRS • P01 – AI Foundations',
      quote: '"Apply AI to daily work tasks. Identify role-specific AI workflows. Speak AI fluently with colleagues."',
      ship: "1 'AI in My Job' workflow map + 3 implemented use cases.",
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-BLD-003',
      title: 'AI Vibe Coder',
      types: ['AI BUILDER'],
      desc: 'Build real apps and websites without being a coder.',
      duration: '40 HRS +10 • P02 – AI Builders',
      quote: '"Build a deployed web app with AI assistance. Use vibe coding tools. Deploy to production."',
      ship: '3 deployed live web apps with GitHub repos and public URLs.',
      tags: ['College', 'Individual']
    },
    {
      id: 'AIE-LDR-004',
      title: 'Chief AI Officer',
      types: ['AI LEADER'],
      desc: 'Senior leaders, CXOs, transformation heads. Become the AI leader your company needs.',
      duration: '110 HRS +20 • P05 – AI Leadership',
      quote: '"Architect enterprise AI strategy. Govern AI risk and ethics. Lead AI transformation. Present to boards."',
      ship: 'Full AI transformation blueprint for your organization + governance framework + boardroom-ready strategy memo.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-FIN-005',
      title: 'AI for Finance',
      types: ['AI BUILDER', 'AI LEADER'],
      desc: 'For CAs, CMAs, CFOs, finance teams, and finance professionals.',
      duration: '40 / 110 HRS • P03 – AI at Work',
      quote: '"Automate financial workflows. Build AI-driven analysis dashboards. Lead AI transformation in finance."',
      ship: 'Deployed finance automation system + AI-powered analysis dashboard + transformation blueprint.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-MED-006',
      title: 'AI for Doctors',
      types: ['AI BUILDER', 'AI LEADER'],
      desc: 'Physicians, surgeons, residents, hospital administrators.',
      duration: '40 / 110 HRS • P04 – AI for Industry',
      quote: '"Use AI for clinical research, documentation, imaging, triage, and decision support — with safety frameworks."',
      ship: 'Clinical AI workflow suite + patient communication automation + governance and safety framework.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-LAW-007',
      title: 'AI for Lawyers',
      types: ['AI BUILDER', 'AI LEADER'],
      desc: 'Lawyers, legal teams, GCs, paralegals, law firm partners.',
      duration: '40 / 110 HRS • P03 – AI at Work',
      quote: '"Draft contracts and briefs with AI. Run case research. Build due diligence automation. Govern ethics."',
      ship: 'Practice automation suite (drafting, research, review) + ethics and confidentiality framework.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-SAL-008',
      title: 'AI for Sales',
      types: ['AI BUILDER'],
      desc: 'Sales reps, SDRs, AEs, sales managers. Close more, faster.',
      duration: '40 HRS • P03 – AI at Work',
      quote: '"Build AI prospecting workflows. Run AI-powered discovery calls. Build sales playbooks with AI."',
      ship: 'Personalized AI outreach engine + 90-day sales automation playbook.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-MKT-009',
      title: 'AI for Marketing',
      types: ['AI BUILDER'],
      desc: 'Brand, content, and growth marketers. From ideation to campaigns.',
      duration: '40 HRS • P03 – AI at Work',
      quote: '"Build content engines (text, image, video). Run AI-augmented campaigns. Build a marketing OS."',
      ship: 'Brand content engine + 30-day campaign + measurement dashboard.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-PRF-010',
      title: 'AI for Performance & Digital Marketing',
      types: ['AI BUILDER'],
      desc: 'Performance marketers, growth leads, paid media specialists, agency teams.',
      duration: '40 HRS • P03 – AI at Work',
      quote: '"Run AI-optimized paid campaigns. Build creative production engines. Automate reporting and attribution."',
      ship: 'Live AI-driven campaign with attribution dashboard + creative production engine.',
      tags: ['Corporate', 'Individual']
    },
    {
      id: 'AIE-HR-011',
      title: 'AI for HR',
      types: ['AI BUILDER'],
      desc: 'HR business partners, talent acquisition, L&D, people ops.',
      duration: '40 HRS • P03 – AI at Work',
      quote: '"Build AI screening workflows. Design AI-driven L&D paths. Govern AI in HR ethically."',
      ship: 'End-to-end recruitment automation + L&D personalization engine.',
      tags: ['Corporate', 'Individual']
    }
  ];

  const filteredCerts = certificationsData.filter(cert => {
    if (activeCertTab === 'All') return true;
    const singularTag = activeCertTab.replace(/s$/, ''); // Map tab label to singular (Colleges -> College)
    return cert.tags.includes(singularTag);
  });

  const handleDownloadBrochure = (certTitle) => {
    alert(`Your brochure download for "${certTitle}" has been scheduled. Thank you for your interest!`);
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Header Area */}
      <section style={styles.headerSection}>
        <div className="container">
          <div style={styles.headerContent}>
            <span style={styles.preTitle}>01 • THE TRAINING PROGRAMMES</span>
            <h1 style={styles.mainTitle}>Expand your potential with <br /><span className="gradient-text">AI Certifications</span></h1>
            <p style={styles.subTitle}>
              We train active AI practitioners. Every certification requires building and shipping real products, guided by standard frameworks and reviewed by industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Hook Block - LMS PORTAL */}
      <section style={styles.lmsHookSection}>
        <div className="container">
          <div style={styles.lmsHookCard} className="glass-panel">
            <div style={styles.lmsHookLeft}>
              <div style={styles.lmsTag}>LEARNER LMS PORTAL</div>
              <h2 style={styles.lmsTitle}>Ready to start your coursework?</h2>
              <p style={styles.lmsDesc}>
                If you are already enrolled in any of our 11 certifications, click below to log in to the learning portal, access course slides, and submit your shippable Capstone projects.
              </p>
            </div>
            <div style={styles.lmsHookRight}>
              <a 
                href="https://lms.aiforeveryone.ai/auth/login?from=%2F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={styles.lmsBtn}
              >
                Access LMS Dashboard →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Filtering Grid */}
      <section id="certifications" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.filterBar}>
            <h2 style={styles.sectionTitle}>Explore Certifications</h2>
            <div style={styles.filterPills}>
              {['All', 'Schools', 'Colleges', 'Corporates', 'Individuals'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCertTab(tab)}
                  style={{
                    ...styles.filterPill,
                    backgroundColor: activeCertTab === tab ? 'var(--accent-primary)' : '#f3f4f6',
                    color: activeCertTab === tab ? '#ffffff' : 'var(--text-secondary)',
                    borderColor: activeCertTab === tab ? 'var(--accent-primary)' : 'rgba(0,0,0,0.05)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.certsGrid} className="grid-responsive-3">
            {filteredCerts.map((cert) => (
              <div key={cert.id} style={styles.certCard} className="glass-panel">
                <div style={styles.cardHeader}>
                  <span style={styles.certCode}>{cert.id}</span>
                  <div style={styles.badgeContainer}>
                    {cert.types.map((type, tIdx) => (
                      <span 
                        key={tIdx} 
                        style={{
                          ...styles.certBadge,
                          backgroundColor: type === 'AI NATIVE' ? 'rgba(15, 118, 110, 0.1)' : type === 'AI BUILDER' ? 'rgba(43, 108, 176, 0.1)' : 'rgba(183, 121, 31, 0.1)',
                          color: type === 'AI NATIVE' ? 'var(--accent-teal)' : type === 'AI BUILDER' ? 'var(--accent-secondary)' : 'var(--accent-gold)',
                        }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 style={styles.certCardTitle}>{cert.title}</h3>
                <p style={styles.certDesc}>{cert.desc}</p>
                <div style={styles.certDetailsRow}>🕒 {cert.duration}</div>
                <p style={styles.certQuote}>{cert.quote}</p>
                
                <div style={styles.certShipContainer}>
                  <div style={styles.certShipTitle}>YOU'LL SHIP</div>
                  <p style={styles.certShipText}>{cert.ship}</p>
                </div>

                <div style={styles.cardFooter}>
                  <button 
                    onClick={() => handleDownloadBrochure(cert.title)} 
                    style={styles.downloadBtn}
                  >
                    ⬇ Brochure
                  </button>
                  <button onClick={() => handleOpenEnquiry('individual', `I want to enquire about ${cert.title}`)} className="btn-primary" style={styles.enquireBtn}>
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Method Section */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={styles.centeredHeader}>
            <span style={styles.preTitle}>02 • THE METHODOLOGY</span>
            <h2 style={styles.sectionTitle}>The Practitioner Method™</h2>
            <p style={styles.centeredDesc}>
              A proprietary three-tier capability pathway built across six pillars. No boring multiple-choice tests; you build live code, deploy to production, and demonstrate working products.
            </p>
          </div>

          {/* Timeline Node Selector */}
          <div style={styles.stepperContainer} className="stepper-container">
            {[
              { step: 1, name: 'AI Native', duration: '8 HOURS', quote: '"Know AI"', target: 'Anyone' },
              { step: 2, name: 'AI Builder', duration: '40 HOURS (+18)', quote: '"Build with AI"', target: 'Function pros, students' },
              { step: 3, name: 'AI Leader', duration: '110 HOURS (+20)', quote: '"Lead with AI"', target: 'Executives, specialists' }
            ].map((item) => (
              <div 
                key={item.step} 
                onClick={() => setActiveMethodTab(item.step)}
                style={{
                  ...styles.stepNode,
                  borderColor: activeMethodTab === item.step ? 'var(--accent-secondary)' : 'var(--border-color)',
                  backgroundColor: activeMethodTab === item.step ? 'rgba(43, 108, 176, 0.05)' : '#ffffff'
                }}
              >
                <div style={styles.stepName}>{item.name}</div>
                <div style={styles.stepDuration}>{item.duration}</div>
                <div style={styles.stepQuote}>{item.quote}</div>
                <div style={styles.stepTarget}>For: {item.target}</div>
              </div>
            ))}
          </div>

          {/* 6 Pillars Grid */}
          <div style={styles.pillarsGrid} className="grid-responsive-3">
            {[
              { id: 'P01', title: 'AI Foundations', desc: 'Literacy, prompting, and personal AI productivity.' },
              { id: 'P02', title: 'AI Builders', desc: 'Build apps, agents, and AI-powered products.' },
              { id: 'P03', title: 'AI at Work (Functions)', desc: 'Sales, marketing, HR, finance, legal — applied AI.' },
              { id: 'P04', title: 'AI for Industry', desc: 'Healthcare, manufacturing, government — vertical depth.' },
              { id: 'P05', title: 'AI Leadership', desc: 'Strategy, governance, ethics, and transformation.' },
              { id: 'P06', title: 'AI Specializations', desc: 'Deep tracks for specialists and certified experts.' }
            ].map((pillar) => (
              <div key={pillar.id} style={styles.pillarCard}>
                <div style={styles.pillarId}>{pillar.id}</div>
                <h4 style={styles.pillarCardTitle}>{pillar.title}</h4>
                <p style={styles.pillarDesc}>{pillar.desc}</p>
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
  lmsHookSection: {
    padding: '20px 0',
  },
  lmsHookCard: {
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
  lmsHookLeft: {
    flex: '1 1 500px',
  },
  lmsTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  lmsTitle: {
    fontSize: '1.75rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  lmsDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  lmsHookRight: {
    display: 'flex',
    alignItems: 'center',
  },
  lmsBtn: {
    fontSize: '1rem',
    padding: '14px 28px',
    textDecoration: 'none',
  },
  sectionPadding: {
    padding: '80px 0',
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: 'var(--accent-primary)',
  },
  filterPills: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  filterPill: {
    border: '1px solid transparent',
    borderRadius: '9999px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  certsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  certCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.05)',
    }
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  certCode: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-muted)',
  },
  badgeContainer: {
    display: 'flex',
    gap: '6px',
  },
  certBadge: {
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  certCardTitle: {
    fontSize: '1.4rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  certDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginBottom: '16px',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  certDetailsRow: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--accent-secondary)',
    marginBottom: '14px',
  },
  certQuote: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: 'var(--text-primary)',
    borderLeft: '2px solid var(--accent-secondary)',
    paddingLeft: '12px',
    marginBottom: '16px',
    lineHeight: '1.5',
  },
  certShipContainer: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '24px',
    borderLeft: '4px solid var(--accent-teal)',
  },
  certShipTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  certShipText: {
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    margin: 0,
    lineHeight: '1.4',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '20px',
  },
  downloadBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.85rem',
    '&:hover': {
      color: 'var(--accent-secondary)',
    }
  },
  enquireBtn: {
    padding: '8px 16px',
    fontSize: '0.85rem',
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
  stepperContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '50px',
  },
  stepNode: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
  },
  stepName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
    marginBottom: '4px',
  },
  stepDuration: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-muted)',
    marginBottom: '12px',
  },
  stepQuote: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
    marginBottom: '8px',
  },
  stepTarget: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  pillarCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '24px',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
    }
  },
  pillarId: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
    marginBottom: '8px',
  },
  pillarCardTitle: {
    fontSize: '1.15rem',
    color: 'var(--accent-primary)',
    marginBottom: '8px',
  },
  pillarDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  }
};
