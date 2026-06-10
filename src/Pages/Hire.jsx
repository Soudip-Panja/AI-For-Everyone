import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Hire() {
  const { handleOpenEnquiry } = useOutletContext();

  const engagementModels = [
    {
      id: '01',
      title: 'Arena Sponsorship',
      forWho: 'Companies wanting first-access hiring rights to top AI builders.',
      features: [
        'Recruiter access to Arena cohorts',
        'Sponsor visibility at regional editions',
        'Judging panel seats at the Global Finale'
      ],
      ctaText: 'Sponsor an Edition',
      enquirySubject: 'I want to sponsor an Innovation Arena edition.'
    },
    {
      id: '02',
      title: 'Direct Hiring',
      forWho: 'Companies hiring certified AI talent now.',
      features: [
        'Post roles directly to our pool of certified AI practitioners',
        'Dynamic talent matching based on skill matrix and tiers',
        'Custom corporate employer branding panels'
      ],
      ctaText: 'Post a Role',
      enquirySubject: 'I want to hire practitioners directly from the talent pool.'
    },
    {
      id: '03',
      title: 'Custom Talent Building',
      forWho: 'Companies wanting AI talent trained for their specific stack.',
      features: [
        'Custom training cohorts scoped to your technical stack',
        'Pre-placement evaluation projects and assessments',
        'Exclusive hire-from-cohort rights with recruitment guarantees'
      ],
      ctaText: 'Build a Cohort',
      enquirySubject: 'I want to build a custom talent cohort.'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <section style={styles.headerSection}>
        <div className="container">
          <div style={styles.headerContent}>
            <span style={styles.preTitle}>03 • THE RECRUITMENT GATEWAY</span>
            <h1 style={styles.mainTitle}>Access the top <br /><span className="gradient-text">AI Talent Pipeline</span></h1>
            <p style={styles.subTitle}>
              Finding pre-vetted AI developers, prompts builders, and CAIO leaders is difficult. We solve it from the source by training and sponsoring practitioners through live cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Hook - JOBS PORTAL */}
      <section style={styles.jobsHookSection}>
        <div className="container">
          <div style={styles.jobsHookCard} className="glass-panel">
            <div style={styles.jobsHookLeft}>
              <div style={styles.jobsTag}>AI JOBS & RECRUITING PORTAL</div>
              <h2 style={styles.jobsTitle}>Looking for active jobs or ready to post open positions?</h2>
              <p style={styles.jobsDesc}>
                Whether you are a certified practitioner ready to match with hiring companies, or an employer looking to post active roles, browse our specialized, interactive Jobs Portal.
              </p>
            </div>
            <div style={styles.jobsHookRight}>
              <a 
                href="https://jobs.aiforeveryone.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={styles.jobsBtn}
              >
                Access Jobs Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TA Models Grid */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '50px' }}>Engagement Models</h2>
          
          <div style={styles.engagementGrid} className="grid-responsive-3">
            {engagementModels.map((model) => (
              <div key={model.id} style={styles.engagementCard} className="glass-panel">
                <div style={styles.cardTop}>
                  <div style={styles.cardHeader}>
                    <span style={styles.modelId}>MODEL {model.id}</span>
                    <span style={styles.modelTag}>Verified</span>
                  </div>
                  <h3 style={styles.cardTitle}>{model.title}</h3>
                  <p style={styles.forWhoText}><strong>For:</strong> {model.forWho}</p>
                  
                  <div style={styles.featuresList}>
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} style={styles.featureItem}>
                        <span style={styles.checkIcon}>✓</span>
                        <span style={styles.featureText}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenEnquiry('corporate', model.enquirySubject)}
                  className="btn-secondary" 
                  style={styles.ctaBtn}
                >
                  {model.ctaText} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section style={styles.quoteSection}>
        <div className="container">
          <div style={styles.quoteBox}>
            <p style={styles.quoteText}>
              "We don't search the external open market for candidate resumes. We build the practitioners, teach them to ship, and place them directly into enterprise roles."
            </p>
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
  jobsHookSection: {
    padding: '20px 0',
  },
  jobsHookCard: {
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
  jobsHookLeft: {
    flex: '1 1 500px',
  },
  jobsTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  jobsTitle: {
    fontSize: '1.75rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  jobsDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  jobsHookRight: {
    display: 'flex',
    alignItems: 'center',
  },
  jobsBtn: {
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
  engagementGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  engagementCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
    }
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  modelId: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-muted)',
  },
  modelTag: {
    backgroundColor: 'rgba(15, 118, 110, 0.1)',
    color: 'var(--accent-teal)',
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  forWhoText: {
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '30px',
  },
  featureItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  checkIcon: {
    color: 'var(--accent-teal)',
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  ctaBtn: {
    width: '100%',
    textAlign: 'center',
    padding: '12px',
  },
  quoteSection: {
    padding: '40px 0 80px 0',
  },
  quoteBox: {
    borderLeft: '4px solid var(--accent-secondary)',
    paddingLeft: '24px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  quoteText: {
    fontSize: '1.25rem',
    fontStyle: 'italic',
    lineHeight: '1.6',
    color: 'var(--text-primary)',
  }
};
