import React, { useState, useEffect } from 'react';

export default function Adopt() {
  const [inqName, setInqName] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqPhone, setInqPhone] = useState('');
  const [inqCountry, setInqCountry] = useState('');
  const [inqOrg, setInqOrg] = useState('');
  const [inqAs, setInqAs] = useState('');
  const [inqInterests, setInqInterests] = useState([]);
  const [inqContext, setInqContext] = useState('');
  const [inqSubmitted, setInqSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#enquiry-form') {
      const element = document.getElementById('enquiry-form');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const toggleInqInterest = (val) => {
    setInqInterests(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInqSubmitted(true);
  };

  const adoptionServices = [
    {
      title: 'AI Readiness Audit',
      duration: 'ENGAGEMENT: 2-4 WEEKS',
      desc: 'We audit your workflow processes, identify automations, map AI opportunities, check governance risk, and compile a boardroom-ready strategy blueprint.',
      outcome: 'A clear opportunities map and a 90-day execution roadmap.'
    },
    {
      title: 'AI Automation Build',
      duration: 'ENGAGEMENT: 8-16 WEEKS',
      desc: 'We code custom AI agents, deploy workflow integrations (n8n, Make, Zapier, APIs), set up vector databases (RAG), and ship production software systems.',
      outcome: 'Fully functional, custom-built AI engines deployed to your workspace.'
    },
    {
      title: 'Transformation Partnership',
      duration: 'ENGAGEMENT: 6-12 MONTHS',
      desc: 'Comprehensive partnership combining audit and builds, workforce training workshops, champion governance frameworks, change management, and board briefings.',
      outcome: 'Your organization is transformed into an AI-first operation.'
    }
  ];

  const targetAudiences = [
    {
      title: 'For Colleges',
      tag: 'COLLEGE MoU',
      desc: 'Bring the full Practitioner Method flagship to your campus. Cohort pods build projects and compete in on-campus Innovation Arena tournaments judged by industry leaders.'
    },
    {
      title: 'For Corporates',
      tag: 'L&D CHAMPIONS',
      desc: 'Upgrade workforce capability with function-specific training (Sales, Marketing, HR, Finance, Legal) and high-level leadership CAIO briefings.'
    },
    {
      title: 'For Schools',
      tag: 'EARLY LITERACY',
      desc: 'Early-stage AI essentials programs, safe prompting guidelines, teacher-training certifications, and annual showcase orientations for students and parents.'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Header */}
      <section style={styles.headerSection}>
        <div className="container">
          <div style={styles.headerContent}>
            <span style={styles.preTitle}>05 • ENTERPRISE DEPLOYMENTS</span>
            <h1 style={styles.mainTitle}>Drive operational speed <br /><span className="gradient-text">With AI Adoption</span></h1>
            <p style={styles.subTitle}>
              We do not just hand over strategy PDFs. We write code, build custom database models, and train your staff, so the capability stays internal long after handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Adoption Services Grid */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '50px' }}>Our Services</h2>
          
          <div style={styles.servicesGrid} className="grid-responsive-3">
            {adoptionServices.map((service, idx) => (
              <div key={idx} style={styles.serviceCard} className="glass-panel">
                <span style={styles.serviceDur}>{service.duration}</span>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.desc}</p>
                <div style={styles.outcomeBox}>
                  <strong>OUTCOME:</strong> {service.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences Scoping */}
      <section style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '50px' }}>Custom Institutional Scoping</h2>
          
          <div style={styles.audienceGrid} className="grid-responsive-3">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} style={styles.audienceCard} className="glass-panel">
                <span style={styles.audTag}>{aud.tag}</span>
                <h3 style={styles.audTitle}>{aud.title}</h3>
                <p style={styles.audDesc}>{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Enquiry Form */}
      <section id="enquiry-form" style={styles.sectionPadding}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={styles.formCard} className="glass-panel">
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>Submit a Scoping Proposal</h2>
              <p style={styles.formSub}>
                Give us details about your corporate structure or university campus. We will respond with a custom program proposal in 48 hours.
              </p>
            </div>

            {inqSubmitted ? (
              <div style={styles.successBlock}>
                <h3>🎉 Proposal Request Received!</h3>
                <p>Thank you for submitting, {inqName}. Our enterprise committee will review your context and reach out to your organization email within 48 hours.</p>
                <button onClick={() => setInqSubmitted(false)} className="btn-secondary" style={{ marginTop: '20px' }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGrid}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={inqName} 
                      onChange={(e) => setInqName(e.target.value)} 
                      style={styles.input} 
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Organization Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={inqEmail} 
                      onChange={(e) => setInqEmail(e.target.value)} 
                      style={styles.input} 
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input 
                      type="tel" 
                      value={inqPhone} 
                      onChange={(e) => setInqPhone(e.target.value)} 
                      style={styles.input} 
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Country</label>
                    <input 
                      type="text" 
                      value={inqCountry} 
                      onChange={(e) => setInqCountry(e.target.value)} 
                      style={styles.input} 
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Company / University Name</label>
                    <input 
                      type="text" 
                      value={inqOrg} 
                      onChange={(e) => setInqOrg(e.target.value)} 
                      style={styles.input} 
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>You represent *</label>
                    <select 
                      required 
                      value={inqAs} 
                      onChange={(e) => setInqAs(e.target.value)} 
                      style={styles.select}
                    >
                      <option value="">Select Audience</option>
                      <option value="corporate">Corporate Business</option>
                      <option value="college">College / University</option>
                      <option value="school">School (K-12)</option>
                      <option value="individual">Self-employed / Individual</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <label style={styles.label}>AI Interests (Select all that apply)</label>
                  <div style={styles.checkboxes}>
                    {[
                      'AI Essentials / Native Prompting',
                      'Vibe Coding / Deployed Web Apps',
                      'Function Automation (Sales, HR, Marketing)',
                      'CAIO Strategy & Boardroom Governance',
                      'Innovation Arena Hackathon MoU',
                      'AI Talent / Recruiting Services'
                    ].map((interest) => (
                      <label key={interest} style={styles.checkboxLabel}>
                        <input 
                          type="checkbox" 
                          checked={inqInterests.includes(interest)} 
                          onChange={() => toggleInqInterest(interest)}
                          style={{ marginRight: '8px' }} 
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <label style={styles.label}>Organizational Context (Audiences, current AI usage, budget, goals) *</label>
                  <textarea 
                    required 
                    rows="4" 
                    value={inqContext} 
                    onChange={(e) => setInqContext(e.target.value)} 
                    style={styles.textarea} 
                    placeholder="We have 40 marketing employees and want to automate email campaigns using Claude..."
                  />
                </div>

                <button type="submit" className="btn-primary" style={styles.submitBtn}>
                  Submit Scoping Proposal Request →
                </button>
              </form>
            )}
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
  sectionPadding: {
    padding: '80px 0',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    color: 'var(--accent-primary)',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  serviceDur: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-secondary)',
    fontWeight: '700',
    display: 'block',
    marginBottom: '14px',
  },
  serviceTitle: {
    fontSize: '1.4rem',
    color: 'var(--accent-primary)',
    marginBottom: '12px',
  },
  serviceDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '20px',
    flexGrow: 1,
  },
  outcomeBox: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    borderLeft: '4px solid var(--accent-teal)',
    lineHeight: '1.4',
  },
  audienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  audienceCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '30px',
  },
  audTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '8px',
  },
  audTitle: {
    fontSize: '1.3rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  audDesc: {
    fontSize: '0.925rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    margin: 0,
  },
  formCard: {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '50px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.03)',
  },
  formHeader: {
    marginBottom: '36px',
  },
  formTitle: {
    fontSize: '2rem',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
  },
  formSub: {
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    fontSize: '0.95rem',
  },
  successBlock: {
    textAlign: 'center',
    padding: '40px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    backgroundColor: '#f8fafc',
    color: 'var(--text-primary)',
    outline: 'none',
    '&:focus': {
      borderColor: 'var(--accent-secondary)',
    }
  },
  select: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    backgroundColor: '#f8fafc',
    color: 'var(--text-primary)',
    outline: 'none',
  },
  checkboxes: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '10px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    backgroundColor: '#f8fafc',
    color: 'var(--text-primary)',
    outline: 'none',
    resize: 'vertical',
  },
  submitBtn: {
    marginTop: '30px',
    padding: '14px 28px',
    fontSize: '1rem',
    alignSelf: 'flex-start',
  }
};
