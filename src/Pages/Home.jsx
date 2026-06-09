import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import EnquiryModal from '../components/EnquiryModal';
import AuthModals from '../components/AuthModals';
import Footer from '../components/Footer';

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [activeMethodTab, setActiveMethodTab] = useState(1); // 1 = Native, 2 = Builder, 3 = Leader
  const [activeCertTab, setActiveCertTab] = useState('All'); // filter tabs for Section 09
  const [activeFaq, setActiveFaq] = useState(null); // Accordion state (top FAQ)
  const [activeFaq2, setActiveFaq2] = useState(null); // Accordion state (bottom FAQ)
  const [activeArenaFaq, setActiveArenaFaq] = useState(null); // Accordion state (Arena FAQ)
  const [activeMasterFaq, setActiveMasterFaq] = useState(null); // Accordion state (Master FAQ)
  const [enquiryAudience, setEnquiryAudience] = useState('individual');
  const [enquiryMessage, setEnquiryMessage] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  // Section 14 — Inline Enquiry Form state
  const [inqName, setInqName] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqPhone, setInqPhone] = useState('');
  const [inqCountry, setInqCountry] = useState('');
  const [inqOrg, setInqOrg] = useState('');
  const [inqAs, setInqAs] = useState('');
  const [inqInterests, setInqInterests] = useState([]);
  const [inqContext, setInqContext] = useState('');
  const [inqSubmitted, setInqSubmitted] = useState(false);

  const toggleInqInterest = (val) => {
    setInqInterests(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );
  };

  // Video fade loop
  const videoRef = useRef(null);

  const logos = [
    { letter: 'V', name: 'Vortex' },
    { letter: 'N', name: 'Nimbus' },
    { letter: 'P', name: 'Prysma' },
    { letter: 'C', name: 'Cirrus' },
    { letter: 'K', name: 'Kynder' },
    { letter: 'H', name: 'Halcyn' }
  ];

  const ChevronDown = () => (
    <svg 
      width="10" 
      height="10" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle', opacity: 0.8 }}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animId;
    const FADE_DUR = 0.5;

    const tick = () => {
      if (video) {
        const t = video.currentTime;
        const dur = video.duration;
        let opacity = 0;

        if (dur && !isNaN(dur)) {
          if (t < FADE_DUR) {
            opacity = t / FADE_DUR;
          } else if (t > dur - FADE_DUR) {
            opacity = Math.max(0, (dur - t) / FADE_DUR);
          } else {
            opacity = 1;
          }
        }
        video.style.opacity = opacity;
      }
      animId = requestAnimationFrame(tick);
    };

    const onPlay = () => {
      animId = requestAnimationFrame(tick);
    };

    const onPause = () => {
      cancelAnimationFrame(animId);
    };

    const onEnded = () => {
      cancelAnimationFrame(animId);
      if (video) {
        video.style.opacity = 0;
        setTimeout(() => {
          if (video) {
            video.currentTime = 0;
            video.play().catch(err => console.log('Video play error on ended loop:', err));
          }
        }, 100);
      }
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);

    if (!video.paused) {
      onPlay();
    }

    return () => {
      cancelAnimationFrame(animId);
      if (video) {
        video.removeEventListener('play', onPlay);
        video.removeEventListener('pause', onPause);
        video.removeEventListener('ended', onEnded);
      }
    };
  }, []);

  const handleOpenEnquiry = (audience = 'individual', customMessage = '') => {
    setEnquiryAudience(audience);
    setEnquiryMessage(customMessage);
    setEnquiryOpen(true);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setWaitlistSubmitted(true);
  };

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleDownloadBrochure = (certTitle) => {
    alert(`Your brochure download for "${certTitle}" has been scheduled. Thank you for your interest!`);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  // Section 09: 11 Launch Certifications Dataset
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

  // Filtering Logic
  const filteredCerts = certificationsData.filter(cert => {
    if (activeCertTab === 'All') return true;
    const singularTag = activeCertTab.replace(/s$/, ''); // Map tab label to singular (Colleges -> College)
    return cert.tags.includes(singularTag);
  });

  // FAQ Dataset
  const faqData = [
    {
      q: 'How does the partner program work?',
      a: 'Authorized Partners license the AI For Everyone IP and deliver our certifications in their cities, countries, and continents under a co-branded model. We provide curriculum, trainer certification, marketing support, and continuous updates. Partners run delivery and share revenue.'
    },
    {
      q: 'What is The Practitioner Method?',
      a: 'The Practitioner Method™ is our proprietary three-tier journey (AI Native → AI Builder → AI Leader) built across six pillars and four audiences. Every certification ends in a shippable artifact, not a quiz score.'
    },
    {
      q: 'How does AI For Everyone differ from Coursera or upGrad?',
      a: 'AI For Everyone is a four-layer ecosystem — Learn, Build, Hire, Invest — not just a course catalogue. We train practitioners, run the Innovation Arena to mentor builders, connect talent to AI roles, and back the founders who emerge. Every layer feeds the next.'
    },
    {
      q: 'What certifications does AI For Everyone offer?',
      a: 'We’ve launched 11 certifications across foundations, builder tracks, function-specific applications (Sales, Marketing, HR, Finance, Legal), and leadership (Chief AI Officer). More verticals — healthcare, government, manufacturing — launch in Phase 2 from Q3 2026.'
    },
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Glow Backdrops */}
      <div className="glow-blur-1" style={{ top: '5%', left: '5%' }}></div>
      <div className="glow-blur-2" style={{ top: '25%', right: '5%' }}></div>
      <div className="glow-blur-1" style={{ top: '45%', left: '10%' }}></div>
      <div className="glow-blur-2" style={{ top: '65%', right: '8%' }}></div>
      <div className="glow-blur-1" style={{ top: '85%', left: '5%' }}></div>
      {/* Hero Section & Page Wrapper */}
      <section style={styles.originalHeroSection}>
        {/* Content Container (z-10, flex-1 flex flex-col) */}
        <div style={styles.heroContentWrapper}>
          
          {/* Navbar */}
          <div style={styles.originalNavbarWrapper}>
            <nav style={styles.originalNavbar}>
              {/* Left Logo & Brand */}
              <a href="/" style={styles.originalBrandContainer}>
                <img 
                  src="/src/assets/logo.png" 
                  alt="Logo" 
                  style={{ height: '28px', display: 'block' }} 
                />
                <span style={styles.originalBrandText}>AI for everyone</span>
                <span style={styles.originalBrandTagline} className="original-brand-tagline">LEARN. BUILD. HIRE. INVEST.</span>
              </a>

              {/* Center Links */}
              <div style={styles.originalNavLinks} className="hero-nav-links">
                <a href="#learn" style={styles.originalNavLink} className="original-nav-link">Learn</a>
                <a href="#build" style={styles.originalNavLink} className="original-nav-link">Build</a>
                <a href="#hire" style={styles.originalNavLink} className="original-nav-link">Hire</a>
                <a href="#invest" style={styles.originalNavLink} className="original-nav-link">Invest</a>
                <a href="#adopt" style={styles.originalNavLink} className="original-nav-link">Adopt</a>
                <a href="#method" style={styles.originalNavLink} className="original-nav-link">Method</a>
                <a href="#industries" style={styles.originalNavLink} className="original-nav-link">Industries</a>
              </div>

              {/* Right CTA */}
              <div className="hero-nav-right">
                <button 
                  className="btn-primary" 
                  style={styles.originalEnquireBtn}
                  onClick={() => setEnquiryOpen(true)}
                >
                  Enquire
                </button>
              </div>
            </nav>
          </div>

          {/* Hero Main Content */}
          <div style={styles.originalHeroContainer} className="layout-hero">
            {/* Left Column */}
            <div style={styles.originalHeroLeft}>
              <div style={styles.originalHeroTagline}>
                THE FULL AI JOURNEY • ONE ECOSYSTEM
              </div>
              <h1 style={styles.originalHeroHeading}>
                From your first <span style={styles.accentTextItalic}>prompt</span> <br />
                to your first <span style={styles.accentTextItalic}>product</span> <br />
                to your first <span style={styles.goldTextItalic}>round</span>.
              </h1>
              <p style={styles.originalHeroDesc}>
                We don't just teach AI. We train AI practitioners, mentor them as they build, connect them to AI jobs, and back the ones who launch companies. For schools, colleges, corporates, and you.
              </p>
              
              <div style={styles.originalHeroBtns}>
                <button 
                  className="btn-primary" 
                  style={styles.originalHeroCtaBtn}
                  onClick={() => setEnquiryOpen(true)}
                >
                  Enquire for Your Context
                </button>
                <a href="#ecosystem" style={styles.originalHeroLinkBtn}>
                  Explore the Ecosystem ↓
                </a>
              </div>

              {/* Shipped Stats Grid */}
              <div style={styles.originalHeroStatsRow}>
                <div style={styles.originalHeroStatsTitle}>SHIPPED IN 18 MONTHS</div>
                <div style={styles.originalHeroStatsGrid}>
                  <div style={styles.originalHeroStatItem}>
                    <span style={styles.originalHeroStatNumber}>1,000+</span>
                    <span style={styles.originalHeroStatLabel}>practitioners certified</span>
                  </div>
                  <div style={styles.originalHeroStatItem}>
                    <span style={styles.originalHeroStatNumber}>11</span>
                    <span style={styles.originalHeroStatLabel}>launch certifications</span>
                  </div>
                  <div style={styles.originalHeroStatItem}>
                    <span style={styles.originalHeroStatNumber}>70</span>
                    <span style={styles.originalHeroStatLabel}>pods in the inaugural Arena</span>
                  </div>
                  <div style={styles.originalHeroStatItem}>
                    <span style={styles.originalHeroStatNumber}>15</span>
                    <span style={styles.originalHeroStatLabel}>builders being backed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={styles.originalHeroRight}>
              <div style={styles.originalVideoCard} className="glass-panel original-video-card">
                {/* Background image */}
                <img 
                  src="/arena_footage.png" 
                  alt="AI Innovation Arena" 
                  style={styles.originalVideoThumbnail} 
                />
                
                {/* Overlay header pills */}
                <div style={styles.originalVideoOverlay}>
                  <div style={styles.originalVideoTags}>
                    <span style={styles.originalLiveTag}>
                      <span className="live-pulse" style={styles.originalLiveDot}></span>
                      LIVE FOOTAGE
                    </span>
                    <span style={styles.originalVideoDivider}>•</span>
                    <span style={styles.originalDateTag}>16 MAY 2026</span>
                  </div>

                  {/* Center play button */}
                  <div style={styles.originalPlayBtn} className="original-play-btn" onClick={() => setEnquiryOpen(true)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                      <path d="M8 5V19L19 12L8 5Z" fill="#000000" />
                    </svg>
                  </div>

                  {/* Bottom title details */}
                  <div style={styles.originalVideoFooter}>
                    <h3 style={styles.originalVideoTitle}>
                      The AI Innovation Arena. <br />
                      <span style={styles.originalVideoTitleItalic}>Watch how we ship cohorts, not slides.</span>
                    </h3>
                    <div style={styles.originalVideoStats}>
                      2 MIN RECAP • 700+ TRAINED • 70 PODS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Style helper for responsive navbar items inside Hero */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes livePulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
          }
          .live-pulse {
            animation: livePulse 2s infinite;
            background-color: #ef4444;
          }
          @media (max-width: 1024px) {
            .hero-nav-links {
              display: none !important;
            }
            .hero-nav-right {
              margin-left: auto;
            }
          }
          @media (max-width: 768px) {
            .original-brand-tagline {
              display: none !important;
            }
          }
          .original-video-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.16);
          }
          .original-play-btn:hover {
            transform: scale(1.1);
            background-color: #e5e7eb;
          }
          .original-nav-link:hover {
            color: var(--text-primary) !important;
          }
          @media (max-width: 1024px) {
            .numbers-grid-responsive {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .numbers-grid-responsive {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 400px) {
            .numbers-grid-responsive {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </section>

      {/* Ticker Bar */}
      <div style={styles.originalTickerSection}>
        <div style={styles.originalTickerContainer}>
          <div className="marquee-content-loop" style={{ gap: '64px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <React.Fragment key={i}>
                <span style={styles.originalTickerText}>BACKED BY 18+ YEARS OF ENTERPRISE SYSTEMS</span>
                <span style={styles.originalTickerAccentText}>INTIME IT SERVICES PVT. LTD.</span>
                <span style={styles.originalTickerAccentText}>ICMAI STRATEGIC PARTNER</span>
                <span style={styles.originalTickerAccentText}>NASSCOM-JUDGED INAUGURAL EDITION</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* By the Numbers Stats Section */}
      <section id="numbers" style={styles.originalNumbersSection}>
        <div className="container">
          <div style={styles.originalNumbersHeader}>
            BY THE NUMBERS • MAY 2026
          </div>

          <div style={styles.originalNumbersGrid} className="numbers-grid-responsive">
            {[
              { num: '1,000+', title: 'Practitioners certified', desc: 'Across India, GCC, and SEA' },
              { num: '11', title: 'Launch certifications', desc: '3 tiers - 6 pillars - 4 channels' },
              { num: '70', title: 'Pods built real AI products', desc: 'Inaugural Innovation Arena' },
              { num: '15', title: 'Builders being backed', desc: 'Capital + mentorship + GTM' },
              { num: '4.9', title: 'Average learner rating', desc: 'Out of 5' },
              { num: '48 hrs', title: 'Custom proposal turnaround', desc: 'For every enquiry' }
            ].map((stat, idx) => (
              <div key={idx} style={styles.originalNumberCol}>
                <div style={styles.originalNumberVal}>{stat.num}</div>
                <h4 style={styles.originalNumberTitle}>{stat.title}</h4>
                <p style={styles.originalNumberDesc}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" style={styles.manifestoSection}>
        <div className="container layout-manifesto" style={styles.manifestoContainer}>
          <div style={styles.manifestoLeft}>
            <div style={{ ...styles.sectionSub, color: 'var(--accent-gold)' }}>THE MANIFESTO</div>
            <h2 style={styles.manifestoHeading} className="manifesto-heading">
              We don't believe in the AI gap. <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>We close it.</span>
            </h2>
            <div style={styles.manifestoLocation}>
              MAY 2026 • KOLKATA • WORLDWIDE
            </div>
          </div>
          <div style={styles.manifestoRight}>
            <p style={styles.manifestoText}>
              The internet shift took ten years. The mobile shift took five. <strong style={{ color: 'var(--text-primary)' }}>The AI shift is taking eighteen months.</strong>
            </p>
            <p style={styles.manifestoText}>
              We don't teach AI as theory — we train practitioners who ship. We don't end with a certificate — we end with a product. We mentor cohorts through the Innovation Arena, place them through the AI Jobs marketplace, and back the strongest into companies of their own.
            </p>
            <p style={{ ...styles.manifestoText, fontStyle: 'italic', color: 'var(--text-primary)' }}>
              "Built in India. Made for the world. Open to anyone willing to ship."
            </p>
            <div style={styles.manifestoAuthor}>
              — SOUMOJIT DAS <span style={{ color: 'var(--text-muted)' }}>• FOUNDER, AI FOR EVERYONE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>01 — THE ECOSYSTEM</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">Most AI platforms stop at courses. <span style={{ color: 'var(--accent-primary)' }}>We don't.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              Four layers, one compounding loop. Each layer feeds the next. Learners become builders. Builders become founders. Founders need talent. Talent comes back as learners. This is the AI For Everyone ecosystem.
            </p>
          </div>

          <div style={styles.ecosystemGrid} className="grid-responsive-4">
            {[
              {
                num: '01',
                title: 'LEARN',
                desc: 'Train AI capability across 11 launch certifications, 3 tiers (Native → Builder → Leader), and 4 channels (Schools, Colleges, Corporates, Individuals). Built on The Practitioner Method™.',
                color: 'var(--accent-teal)'
              },
              {
                num: '02',
                title: 'BUILD',
                desc: 'Mentor builders through pod-based hackathons, capstone projects, and the AI Innovation Arena. Every certification ends in a shippable artifact, not a quiz score.',
                color: 'var(--accent-primary)'
              },
              {
                num: '03',
                title: 'HIRE',
                desc: 'Connect AI talent to AI roles. AI-powered resume builder, smart job matching, interview prep for job seekers. AI talent matching and candidate search for employers.',
                color: '#ec4899'
              },
              {
                num: '04',
                title: 'INVEST',
                desc: 'Back the founders who emerge. Capital, mentorship, GTM support, and network access — for the builders we\'ve trained and the founders ready to scale.',
                color: 'var(--accent-gold)'
              }
            ].map((card, idx) => (
              <div key={idx} style={styles.ecosystemCard} className="glass-panel eco-card-hover">
                <div style={{ ...styles.ecoCardNum, color: card.color }}>{card.num}</div>
                <h3 style={styles.ecoCardTitle}>{card.title}</h3>
                <p style={styles.ecoCardDesc}>{card.desc}</p>
                <a href="#enquire" onClick={() => setEnquiryOpen(true)} style={{ ...styles.ecoCardLink, color: card.color }} className="eco-link-hover">
                  Learn more <span style={{ transition: 'transform 0.2s', display: 'inline-block' }} className="arrow-hover">→</span>
                </a>
              </div>
            ))}
          </div>

          <div style={styles.ecosystemQuote} className="serif-italic">
            "Train → Mentor → Hire → Invest. The full stack."
          </div>
        </div>
      </section>

      {/* Practitioner Method Section */}
      <section id="method" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>02 — THE METHOD</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">The <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>Practitioner Method™</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              A proprietary three-tier journey that turns AI curiosity into AI leadership. Built across six pillars. Designed for four audiences. Every certification ends in a shippable artifact.
            </p>
          </div>

          {/* Stepper Timeline */}
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
                  borderColor: activeMethodTab === item.step ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: activeMethodTab === item.step ? 'rgba(124, 58, 237, 0.05)' : 'rgba(255,255,255,0.01)'
                }}
                className="step-node-hover"
              >
                <div style={{
                  ...styles.stepIndicator,
                  backgroundColor: activeMethodTab === item.step ? 'var(--accent-primary)' : 'var(--border-color)',
                  boxShadow: activeMethodTab === item.step ? '0 0 15px var(--accent-primary)' : 'none'
                }}></div>
                <div style={styles.stepName}>{item.name}</div>
                <div style={styles.stepDuration}>{item.duration}</div>
                <div style={styles.stepQuote}>{item.quote}</div>
                <div style={styles.stepTarget}>{item.target}</div>
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
              <div key={pillar.id} style={styles.pillarCard} className="glass-panel pillar-hover">
                <div style={styles.pillarId}>{pillar.id}</div>
                <h4 style={styles.pillarTitle}>{pillar.title}</h4>
                <p style={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences Section */}
      <section id="adopt" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>03 — WHO IT'S FOR</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">Four audiences. <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>One ecosystem.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              The same Practitioner Method, scoped four ways. Each audience gets a tailored programme — and every learner shares one global community, one Innovation Arena, one founder pipeline.
            </p>
          </div>

          <div style={styles.audiencesGrid} className="grid-responsive-4">
            {/* Colleges */}
            <div style={styles.audienceCard} className="glass-panel audience-card-hover">
              <div style={styles.audHeader}>
                <span style={styles.audTag}>COL • INSTITUTIONAL FLAGSHIP</span>
                <h3 style={styles.audTitle}>For Colleges</h3>
                <p style={styles.audSubtitle}>Engineering, commerce, arts undergraduates. Institutions as buyers.</p>
              </div>
              <ul style={styles.audList}>
                <li><span style={styles.bulletCheck}>✓</span> The full 17-module flagship</li>
                <li><span style={styles.bulletCheck}>✓</span> Pod structure with peer cohorts</li>
                <li><span style={styles.bulletCheck}>✓</span> Innovation Arena edition on campus</li>
                <li><span style={styles.bulletCheck}>✓</span> Industry judges & incubator pipeline</li>
                <li><span style={styles.bulletCheck}>✓</span> MoU support and certificate co-signing</li>
              </ul>
              <button className="btn-secondary" style={styles.audBtn} onClick={() => setEnquiryOpen(true)}>
                Bring AI to campus →
              </button>
            </div>

            {/* Corporates */}
            <div style={styles.audienceCard} className="glass-panel audience-card-hover">
              <div style={styles.audHeader}>
                <span style={styles.audTag}>COR • WORKFORCE CAPABILITY</span>
                <h3 style={styles.audTitle}>For Corporates</h3>
                <p style={styles.audSubtitle}>L&D teams, function leaders, executives. Companies as buyers.</p>
              </div>
              <ul style={styles.audList}>
                <li><span style={styles.bulletCheck}>✓</span> Function tracks: Sales, Marketing, HR...</li>
                <li><span style={styles.bulletCheck}>✓</span> Leadership tracks (Chief AI Officer)</li>
                <li><span style={styles.bulletCheck}>✓</span> Custom case studies on your data</li>
                <li><span style={styles.bulletCheck}>✓</span> Executive briefings</li>
                <li><span style={styles.bulletCheck}>✓</span> Train-the-trainer programs</li>
              </ul>
              <button className="btn-secondary" style={styles.audBtn} onClick={() => setEnquiryOpen(true)}>
                Build workforce AI capability →
              </button>
            </div>

            {/* Individuals */}
            <div style={styles.audienceCard} className="glass-panel audience-card-hover">
              <div style={styles.audHeader}>
                <span style={styles.audTag}>IND • SELF-PACED + COHORT</span>
                <h3 style={styles.audTitle}>For Individuals</h3>
                <p style={styles.audSubtitle}>Self-paced learners, professionals, career-pivoters.</p>
              </div>
              <ul style={styles.audList}>
                <li><span style={styles.bulletCheck}>✓</span> 11 launch certifications</li>
                <li><span style={styles.bulletCheck}>✓</span> 3 tiers (Native, Builder, Leader)</li>
                <li><span style={styles.bulletCheck}>✓</span> Portfolio-ready capstone products</li>
                <li><span style={styles.bulletCheck}>✓</span> Community & mentor access</li>
                <li><span style={styles.bulletCheck}>✓</span> Job and pitch opportunities</li>
              </ul>
              <button className="btn-secondary" style={styles.audBtn} onClick={() => setEnquiryOpen(true)}>
                Find your starting point →
              </button>
            </div>

            {/* Schools */}
            <div style={styles.audienceCard} className="glass-panel audience-card-hover">
              <div style={styles.audHeader}>
                <span style={styles.audTag}>SCH • EARLY-STAGE AI LITERACY</span>
                <h3 style={styles.audTitle}>For Schools</h3>
                <p style={styles.audSubtitle}>Class 6 to Class 12 students. Parents and schools as buyers.</p>
              </div>
              <ul style={styles.audList}>
                <li><span style={styles.bulletCheck}>✓</span> AI Essentials for all students</li>
                <li><span style={styles.bulletCheck}>✓</span> Teacher training certification</li>
                <li><span style={styles.bulletCheck}>✓</span> Parent orientation sessions</li>
                <li><span style={styles.bulletCheck}>✓</span> Annual AI Day showcase</li>
                <li><span style={styles.bulletCheck}>✓</span> Branded co-deployment</li>
              </ul>
              <button className="btn-secondary" style={styles.audBtn} onClick={() => setEnquiryOpen(true)}>
                Bring AI to school →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Industries Section */}
      <section id="industries" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>04 — INDUSTRIES</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">AI capability, built for <span className="serif-italic" style={{ color: 'var(--accent-teal)' }}>your industry.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              Every industry has its own AI maturity curve. We meet you where you are — with certifications, deployments, and Innovation Arena editions designed for your sector.
            </p>
          </div>

          <div style={styles.industriesGrid} className="grid-responsive-8">
            {[
              { id: '01', title: 'Education', desc: 'HIT inaugural edition — 700+ students trained, 70 pods, 1,000+ at Grand Finale.' },
              { id: '02', title: 'Healthcare', desc: 'AI+ Doctor Practitioner™, AI+ Nurse™, AI+ Pharma™ — clinical workflow automation.' },
              { id: '03', title: 'Finance & Accounting', desc: 'ICMAI partnership — AI for Finance Builder + Leader tracks.' },
              { id: '04', title: 'Legal', desc: 'AI+ Lawyer Practitioner™ — drafting, research, due diligence.' },
              { id: '05', title: 'Sales & Marketing', desc: 'AI for Sales, Marketing, Performance — function-specific builders.' },
              { id: '06', title: 'Human Resources', desc: 'AI for HR — recruitment automation, L&D personalization.' },
              { id: '07', title: 'Engineering & Tech', desc: 'AI Vibe Coder, AI+ Developer™ — ship web apps with AI.' },
              { id: '08', title: 'Leadership', desc: 'Chief AI Officer Practitioner™ — board-ready AI strategy.' }
            ].map((ind) => (
              <div key={ind.id} style={styles.industryCard} className="glass-panel industry-hover-card">
                <div style={styles.industryId}>{ind.id}</div>
                <h4 style={styles.industryTitle}>{ind.title}</h4>
                <p style={styles.industryDesc}>{ind.desc}</p>
                <span onClick={() => setEnquiryOpen(true)} style={styles.industryLink} className="industry-link-trigger">
                  Explore <span style={{ transition: 'transform 0.2s', display: 'inline-block' }} className="ind-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - Beyond Courses Section */}
      <section id="beyond" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>05 — BEYOND COURSES</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">What happens after <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>you learn.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              A certificate is the beginning, not the end. Here is what AI For Everyone offers every practitioner who joins the ecosystem.
            </p>
          </div>

          <div style={styles.beyondListContainer}>
            {/* Marketplace Row */}
            <div style={styles.beyondRow} className="beyond-row-border layout-beyond-row">
              <div style={styles.beyondRowLeft}>
                <span style={styles.beyondRowIndex}>01</span>
                <h3 style={styles.beyondRowTitle}>AI Jobs — The Talent Marketplace</h3>
              </div>
              <div style={styles.beyondRowRight}>
                <p style={styles.beyondRowDesc}>
                  <strong>For job seekers:</strong> AI-powered resume building, smart matching to AI roles, interview prep, skill analysis, and direct visibility to employers actively hiring AI talent. Every certified practitioner enters the marketplace by default.
                </p>
                <p style={styles.beyondRowDesc}>
                  <strong>For employers and talent acquisition teams:</strong> post AI roles, search a verified pool of certified AI practitioners, build branded talent pools, and recruit directly from Innovation Arena cohorts before candidates enter the open market.
                </p>
                <div style={styles.beyondQuote} className="serif-italic">"One platform. Two sides. Pre-vetted AI talent on demand."</div>
              </div>
            </div>

            {/* Pitch Hub Row */}
            <div style={styles.beyondRow} className="beyond-row-border layout-beyond-row">
              <div style={styles.beyondRowLeft}>
                <span style={styles.beyondRowIndex}>02</span>
                <h3 style={styles.beyondRowTitle}>Pitch Hub</h3>
              </div>
              <div style={styles.beyondRowRight}>
                <p style={styles.beyondRowDesc}>
                  For founders building AI products. Upload a 3-minute pitch. Get discovered by investors. Close rounds faster. For investors: discover AI deals from a curated pool of practitioner-founders.
                </p>
              </div>
            </div>

            {/* Community Row */}
            <div style={styles.beyondRow} className="beyond-row-border layout-beyond-row">
              <div style={styles.beyondRowLeft}>
                <span style={styles.beyondRowIndex}>03</span>
                <h3 style={styles.beyondRowTitle}>Community</h3>
              </div>
              <div style={styles.beyondRowRight}>
                <p style={styles.beyondRowDesc}>
                  Discussion forums, office hours with mentors, monthly events. Connect with practitioners building across industries and geographies.
                </p>
              </div>
            </div>

            {/* Partner Ecosystem Row */}
            <div style={styles.beyondRow} className="beyond-row-border layout-beyond-row">
              <div style={styles.beyondRowLeft}>
                <span style={styles.beyondRowIndex}>04</span>
                <h3 style={styles.beyondRowTitle}>Partner Ecosystem</h3>
              </div>
              <div style={styles.beyondRowRight}>
                <p style={styles.beyondRowDesc}>
                  Authorized Partners deliver AI For Everyone certifications in their region. Certified Trainers facilitate. This is how the ecosystem scales — globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - For Talent Acquisition Section */}
      <section id="hire" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>06 — FOR TALENT ACQUISITION</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">Hiring AI talent? <span className="serif-italic" style={{ color: 'var(--accent-secondary)' }}>We are the pipeline.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              The AI talent shortage is real. We solve it from the source — by certifying practitioners through The Practitioner Method™, putting them through real builds in the AI Innovation Arena, and connecting them to companies hiring AI talent. Three ways to engage with us as a talent buyer.
            </p>
          </div>

          <div style={styles.talentGrid} className="talent-grid">
            {/* Arena Sponsorship */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>CARD 01 • ARENA SPONSORSHIP</span>
                  <h3 style={styles.talentCardTitle}>Arena Sponsorship</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Companies wanting first-access hiring rights to top AI builders.</p>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> Recruiter access to Arena cohorts</li>
                  <li><span style={styles.bulletCheck}>✓</span> Sponsor visibility at regional editions</li>
                  <li><span style={styles.bulletCheck}>✓</span> Judging panel seats at the Global Finale</li>
                </ul>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Sponsor an edition →
              </button>
            </div>

            {/* Direct Hiring */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>CARD 02 • DIRECT HIRING</span>
                  <h3 style={styles.talentCardTitle}>Direct Hiring</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Companies hiring AI talent now.</p>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> Post roles to a pool of certified AI practitioners</li>
                  <li><span style={styles.bulletCheck}>✓</span> Smart talent matching by skill and tier</li>
                  <li><span style={styles.bulletCheck}>✓</span> Branded talent pool builder</li>
                </ul>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Post a role →
              </button>
            </div>

            {/* Custom Talent Building */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>CARD 03 • CUSTOM TALENT BUILDING</span>
                  <h3 style={styles.talentCardTitle}>Custom Talent Building</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Companies wanting AI talent trained for their stack.</p>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> Custom training cohort scoped to stack</li>
                  <li><span style={styles.bulletCheck}>✓</span> Pre-placement assessments and projects</li>
                  <li><span style={styles.bulletCheck}>✓</span> Hire-from-cohort rights with guarantees</li>
                </ul>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Build a custom cohort →
              </button>
            </div>
          </div>

          <div style={styles.ecosystemQuote} className="serif-italic">
            "We don't recruit from the market. We build the market."
          </div>
        </div>
      </section>

      {/* 07 - AI Adoption Services Section */}
      <section id="adopt-services" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>07 — AI ADOPTION SERVICES</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">Some companies need to learn AI. Some need it built. <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>We do both.</span></h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              For organizations ready to deploy AI today — not in 6 months — AI For Everyone offers AI Adoption Services. Audit your business. Build your automations. Train your teams alongside the build, so capability stays internal long after we hand over the keys.
            </p>
          </div>

          <div style={styles.talentGrid} className="talent-grid">
            {/* AI Readiness Audit */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>SERVICE 01 • AI READINESS AUDIT</span>
                  <h3 style={styles.talentCardTitle}>AI Readiness Audit</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Organizations exploring AI but unsure where to start.</p>
                  <div style={styles.audDetailsTag}>ENGAGEMENT: 2-4 WEEKS</div>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> Workflow audit across functions</li>
                  <li><span style={styles.bulletCheck}>✓</span> AI opportunity map</li>
                  <li><span style={styles.bulletCheck}>✓</span> Risk and governance review</li>
                  <li><span style={styles.bulletCheck}>✓</span> Prioritized 90-day roadmap</li>
                  <li><span style={styles.bulletCheck}>✓</span> ROI projections per use case</li>
                </ul>
                <div style={styles.outcomeContainer}>
                  <strong>OUTCOME:</strong> A board-ready AI strategy document and a 90-day execution plan.
                </div>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Request an audit →
              </button>
            </div>

            {/* AI Automation Build */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>SERVICE 02 • AUTOMATION BUILD</span>
                  <h3 style={styles.talentCardTitle}>AI Automation Build</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Organizations with identified use cases ready to deploy.</p>
                  <div style={styles.audDetailsTag}>ENGAGEMENT: 8-16 WEEKS PER BUILD</div>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> AI agent development</li>
                  <li><span style={styles.bulletCheck}>✓</span> Workflow automation (n8n, Make, Zapier)</li>
                  <li><span style={styles.bulletCheck}>✓</span> Custom GPT and chatbot deployment</li>
                  <li><span style={styles.bulletCheck}>✓</span> Integration with existing systems</li>
                  <li><span style={styles.bulletCheck}>✓</span> Knowledge base and RAG systems</li>
                  <li><span style={styles.bulletCheck}>✓</span> Production deployment & handover</li>
                </ul>
                <div style={styles.outcomeContainer}>
                  <strong>OUTCOME:</strong> Working AI systems in production, with internal team capability to maintain.
                </div>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Scope a build →
              </button>
            </div>

            {/* AI Transformation Partnership */}
            <div style={styles.talentCard} className="glass-panel talent-card-hover-el">
              <div>
                <div style={styles.talentCardHeader}>
                  <span style={styles.talentCardTag}>SERVICE 03 • TRANSFORMATION PARTNERSHIP</span>
                  <h3 style={styles.talentCardTitle}>AI Transformation Partnership</h3>
                  <p style={styles.talentCardSub}><strong>For:</strong> Organizations going all-in on AI across functions.</p>
                  <div style={styles.audDetailsTag}>ENGAGEMENT: 6-12 MONTHS</div>
                </div>
                <div style={styles.talentListTitle}>YOU GET</div>
                <ul style={styles.talentList}>
                  <li><span style={styles.bulletCheck}>✓</span> Everything in Audit + Build</li>
                  <li><span style={styles.bulletCheck}>✓</span> Workforce training across all teams</li>
                  <li><span style={styles.bulletCheck}>✓</span> AI governance and ethics framework</li>
                  <li><span style={styles.bulletCheck}>✓</span> Change management & champion program</li>
                  <li><span style={styles.bulletCheck}>✓</span> Monthly executive briefings</li>
                  <li><span style={styles.bulletCheck}>✓</span> Quarterly board updates</li>
                </ul>
                <div style={styles.outcomeContainer}>
                  <strong>OUTCOME:</strong> End-to-end AI capability internalized. Your organization becomes AI-first.
                </div>
              </div>
              <button className="btn-secondary" style={styles.talentBtn} onClick={() => setEnquiryOpen(true)}>
                Explore a partnership →
              </button>
            </div>
          </div>

          <div style={styles.ecosystemQuote} className="serif-italic">
            "We don't leave you with PDFs. We leave you with working AI — and a team that can run it."
          </div>
          
          <div style={styles.adoptionEnterpriseFooter}>
            BUILT ON THE PRACTITIONER METHOD™ • DELIVERED BY TRAINERS WHO ARE BUILDERS • POWERED BY INTIME IT SERVICES PVT. LTD. • 18+ YEARS OF ENTERPRISE SYSTEMS
          </div>
        </div>
      </section>

      {/* 08 - How We Engage Section */}
      <section id="how-we-engage" style={styles.sectionPadding}>
        <div className="container">
          {/* Split header */}
          <div style={styles.engageHeaderSplit} className="section-header-split">
            <div style={styles.engageHeaderLeft}>
              <div style={styles.sectionSub}>08 — HOW WE ENGAGE</div>
              <h2 style={styles.engageTitleBlock}>
                <span style={styles.engageTitleBold}>Five stages.</span>
                <br />
                <span className="serif-italic" style={styles.engageTitleItalic}>
                  From discovery to compounding capability.
                </span>
              </h2>
            </div>
            <div style={styles.engageHeaderRight}>
              <p style={styles.engageHeaderDesc}>
                Every engagement — whether you're a school, college, corporate, or individual — follows the same five stages. Custom-scoped to your context. Built to deliver capability that outlasts the engagement.
              </p>
            </div>
          </div>

          {/* Five Stages List */}
          <div style={styles.engageStageList}>
            {[
              {
                num: '01',
                title: 'Discovery Call',
                desc: 'We understand your context — audience, scale, AI maturity, business goals, timeline. A 30-minute conversation, no commitment.',
              },
              {
                num: '02',
                title: 'Proposal in 48 Hours',
                desc: 'A custom-scoped programme matched to your context. Tier (Native / Builder / Leader), channel, delivery mode, capstone, pricing.',
              },
              {
                num: '03',
                title: 'Programme Delivery',
                desc: 'Hybrid — physical and online. Pod-based for institutions. Cohort plus roleplay for corporates. Self-paced plus community for individuals.',
              },
              {
                num: '04',
                title: 'Innovation Arena or Capstone',
                desc: 'Every programme ends in a shippable artifact, not a quiz. Institutions get an on-campus Innovation Arena edition. Corporates get function-specific deployment projects.',
              },
              {
                num: '05',
                title: 'Post-Programme Compounding',
                desc: 'Top performers enter the AI For Everyone ecosystem: mentorship, AI job marketplace, pitch hub for founders, backing for the strongest.',
              },
            ].map((stage, idx, arr) => (
              <div
                key={stage.num}
                style={{
                  ...styles.engageStageRow,
                  borderBottom: idx < arr.length - 1 ? '1px solid var(--border-color)' : 'none',
                  borderTop: idx === arr.length - 1 ? '1px dashed var(--border-color)' : undefined,
                }}
              >
                <div style={styles.engageStageLeft}>
                  <span style={styles.engageStageNum}>STAGE {stage.num}</span>
                </div>
                <div style={styles.engageStageMid}>
                  <h3 style={styles.engageStageTitle}>{stage.title}</h3>
                </div>
                <div style={styles.engageStageRight}>
                  <p style={styles.engageStageDesc}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 - The Certifications Section */}
      <section id="learn" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>09 — THE CERTIFICATIONS</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">11 Launch Certifications. <br /><span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>Built for who you are. Scoped to where you're going.</span></h2>
            </div>
            
            {/* Filter Pill Selector Bar */}
            <div style={styles.filterPillsContainer}>
              {['All', 'Schools', 'Colleges', 'Corporates', 'Individuals'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCertTab(tab)}
                  style={{
                    ...styles.filterPill,
                    backgroundColor: activeCertTab === tab ? 'var(--text-primary)' : 'var(--bg-secondary)',
                    color: activeCertTab === tab ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    borderColor: activeCertTab === tab ? 'var(--text-primary)' : 'var(--border-color)',
                  }}
                  className="filter-pill-hover"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div style={styles.certsGrid} className="grid-responsive-3">
            {filteredCerts.map((cert) => (
              <div key={cert.id} style={styles.certCard} className="glass-panel cert-hover-card">
                <div>
                  <div style={styles.certHeader}>
                    <span style={styles.certCode}>{cert.id}</span>
                    <div style={styles.certBadgeContainer}>
                      {cert.types.map((type, tIdx) => (
                        <span 
                          key={tIdx} 
                          style={{
                            ...styles.certBadge,
                            backgroundColor: type === 'AI NATIVE' ? 'rgba(20, 184, 166, 0.1)' : type === 'AI BUILDER' ? 'rgba(124, 58, 237, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: type === 'AI NATIVE' ? 'var(--accent-teal)' : type === 'AI BUILDER' ? 'var(--accent-primary)' : 'var(--accent-gold)',
                            border: `1px solid ${type === 'AI NATIVE' ? 'rgba(20, 184, 166, 0.2)' : type === 'AI BUILDER' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`
                          }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 style={styles.certTitle}>{cert.title}</h3>
                  <p style={styles.certDesc}>{cert.desc}</p>
                  
                  <div style={styles.certDetailsRow}>{cert.duration}</div>
                  
                  <p style={styles.certQuote}>{cert.quote}</p>
                  
                  <div style={styles.certShipContainer}>
                    <div style={styles.certShipTitle}>YOU'LL SHIP</div>
                    <p style={styles.certShipText}>{cert.ship}</p>
                  </div>
                </div>

                <div>
                  {/* Tags list */}
                  <div style={styles.certTagsRow}>
                    {cert.tags.map((tag, idx) => (
                      <span key={idx} style={styles.certTagPill}>{tag}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={styles.certActionsRow}>
                    <button 
                      onClick={() => handleDownloadBrochure(cert.title)} 
                      style={styles.downloadBrochureBtn}
                      className="download-hover"
                    >
                      <span style={{ fontSize: '0.95rem' }}>⬇</span> Download Brochure
                    </button>
                    <span onClick={() => setEnquiryOpen(true)} style={styles.certEnquireBtn} className="cert-enquire-trigger">
                      Enquire <span style={{ transition: 'transform 0.2s', display: 'inline-block' }} className="cert-arrow">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.certBottomText}>
            "More certifications launching across healthcare, government, manufacturing, and specialized AI builder tracks. Demand-driven. Phase 2 begins Q3 2026."
          </div>
        </div>
      </section>

      {/* 10 - The Innovation Arena Section */}
      <section id="arena" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>10 — THE INNOVATION ARENA</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">The AI Innovation Arena. <br />The <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>global</span> championship for AI builders.</h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              Most innovation programs end with an event. Ours ends with a company. Across spring regional editions and one global December finale, the best AI builders from schools, colleges, and corporates compete on one stage — and the winners get backed.
            </p>
          </div>

          <div style={styles.arenaGrid} className="layout-arena">
            {/* Left Column: Cadence */}
            <div style={styles.arenaLeft}>
              <div style={styles.cadenceTitle}>THE CADENCE</div>
              <div style={styles.cadenceGrid} className="cadence-grid">
                <div style={styles.cadenceCol}>
                  <div style={styles.cadenceSeason}>SPRING</div>
                  <h4 style={styles.cadenceHeadline}>Regional Editions</h4>
                  <ul style={styles.cadenceList}>
                    <li>• March – April</li>
                    <li>• Schools · Colleges · Corporates</li>
                    <li>• Pod-based · 4-phase format</li>
                  </ul>
                </div>
                <div style={styles.cadenceCol}>
                  <div style={styles.cadenceSeason}>DECEMBER</div>
                  <h4 style={styles.cadenceHeadline}>The Global Finale</h4>
                  <ul style={styles.cadenceList}>
                    <li>• National + international winners</li>
                    <li>• One stage. One champion cohort.</li>
                    <li>• Real backing. Real capital.</li>
                  </ul>
                </div>
              </div>
              <div style={styles.arenaFootnote}>
                Year 1 inaugural edition began at Haldia Institute of Technology, India – May 16, 2026. Editions opening across South Asia, GCC, Southeast Asia, and Africa through 2026–27.
              </div>
            </div>

            {/* Right Column: Haldia Stats Card */}
            <div style={styles.arenaRight}>
              <div style={styles.haldiaCard} className="glass-panel">
                <div style={styles.haldiaHeader}>
                  <span style={styles.haldiaTag}>INAUGURAL EDITION</span>
                  <h3 style={styles.haldiaTitle}>Haldia Institute of Technology</h3>
                  <span style={styles.haldiaDate}>MAY 8 & 16, 2026</span>
                </div>
                
                <div style={styles.haldiaStatsList}>
                  <div style={styles.haldiaStatRow}>
                    <span style={styles.haldiaStatNum}>1,000+</span>
                    <span style={styles.haldiaStatLabel}>attending the Grand Finale</span>
                  </div>
                  <div style={styles.haldiaStatRow}>
                    <span style={styles.haldiaStatNum}>700+</span>
                    <span style={styles.haldiaStatLabel}>students trained</span>
                  </div>
                  <div style={styles.haldiaStatRow}>
                    <span style={styles.haldiaStatNum}>70</span>
                    <span style={styles.haldiaStatLabel}>pods built real AI products</span>
                  </div>
                  <div style={styles.haldiaStatRow}>
                    <span style={styles.haldiaStatNum}>Top 10</span>
                    <span style={styles.haldiaStatLabel}>finalists pitched to CIOs</span>
                  </div>
                  <div style={styles.haldiaStatRow}>
                    <span style={styles.haldiaStatNum}>NASSCOM</span>
                    <span style={styles.haldiaStatLabel}>+ industry leaders judging</span>
                  </div>
                </div>

                <div style={styles.haldiaFooter}>
                  15 winning builders now being backed. <br />
                  <span style={styles.haldiaFooterMuted}>CO-FUNDED BY HIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Industry pipeline banner */}
          <div style={styles.pipelineBanner} className="glass-panel">
            <div style={styles.pipelineTag}>FOR INDUSTRY – THE TALENT PIPELINE</div>
            <p style={styles.pipelineText}>
              Every Arena edition produces a cohort of AI practitioners who have already built real products under industry-grade pressure. Companies hiring AI talent get first access to the top builders — through judging panels, sponsorship slots, recruiter access, and exclusive hiring windows before Arena winners enter the open marketplace.
            </p>
            <div style={styles.pipelineQuote} className="serif-italic">
              "Hire from the championship. Sponsor a regional edition. Judge the finale. Or do all three."
            </div>
          </div>

          {/* Actions Row */}
          <div style={styles.arenaActionsRow} className="layout-arena-actions">
            <div style={styles.arenaActionBox} className="glass-panel action-box-hover" onClick={() => setEnquiryOpen(true)}>
              <span>Bring the Arena to your campus</span>
              <span style={styles.actionArrow}>→</span>
            </div>
            <div style={styles.arenaActionBox} className="glass-panel action-box-hover" onClick={() => setEnquiryOpen(true)}>
              <span>Bring the Arena to your company</span>
              <span style={styles.actionArrow}>→</span>
            </div>
            <div style={styles.arenaActionBox} className="glass-panel action-box-hover" onClick={() => setEnquiryOpen(true)}>
              <span>Hire from the Arena</span>
              <span style={styles.actionArrow}>→</span>
            </div>
            <div style={styles.arenaActionLink} onClick={() => setEnquiryOpen(true)}>
              Apply as a builder →
            </div>
          </div>
        </div>
      </section>

      {/* Arena FAQ Section */}
      <section id="arena-faq" style={styles.sectionPadding}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={styles.sectionSub}>THE AI INNOVATION ARENA — FAQ</div>
            <h2 style={{ ...styles.sectionTitleSplit, marginTop: '12px' }}>
              Common questions about <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>the Arena.</span>
            </h2>
          </div>

          <div style={styles.faqList}>
            {[
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
            ].map((item, idx, arr) => (
              <div
                key={idx}
                style={{
                  ...styles.faqItem,
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid var(--border-color)',
                }}
              >
                <button
                  onClick={() => setActiveArenaFaq(activeArenaFaq === idx ? null : idx)}
                  style={styles.faqQuestionBtn}
                >
                  <span style={styles.faqQuestionText}>{item.q}</span>
                  <span
                    style={{
                      ...styles.faqChevron,
                      transform: activeArenaFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >↓</span>
                </button>
                <div
                  style={{
                    ...styles.faqAnswerContainer,
                    maxHeight: activeArenaFaq === idx ? '260px' : '0px',
                    opacity: activeArenaFaq === idx ? 1 : 0,
                  }}
                >
                  <p style={styles.faqAnswerText}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery: Inside the Innovation Arena */}
      <section id="gallery" style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.sectionHeaderSplit} className="section-header-split">
            <div>
              <div style={styles.sectionSub}>11 — INSIDE THE INNOVATION ARENA</div>
              <h2 style={styles.sectionTitleSplit} className="section-title-split">
                May 2026 · Real cohorts. <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>Real winners.</span> Real cheques.
              </h2>
            </div>
            <p style={styles.sectionHeaderDesc}>
              700+ trained. 70 pods. 10 finalists pitched. NASSCOM and industry leaders judged. ₹90K in cheques handed out on stage. 15 builders are now being backed. Spring Editions open March 1.
            </p>
          </div>

          {/* Photo Grid */}
          <div style={styles.galleryGrid} className="gallery-grid-responsive">
            {/* Row 1 – Full width hero shot */}
            <div style={{ ...styles.galleryItem, gridColumn: 'span 6' }}>
              <img
                src="/Images/1 grand-finale.jpg"
                alt="AI Innovation Arena Grand Finale — full auditorium"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>THE GRAND FINALE · HALDIA INSTITUTE OF TECHNOLOGY · MAY 16, 2026</div>
            </div>

            {/* Row 2 – Half + Half */}
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/2 audience-qa.jpg"
                alt="Audience Q&A session at the AI Innovation Arena"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>AUDIENCE Q&A · LIVE SESSION</div>
            </div>
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/3 founder-address.jpg"
                alt="Founder address — 700+ students and 17 judges"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>FOUNDER ADDRESS · 700+ STUDENTS TRAINED · 17 JUDGES</div>
            </div>

            {/* Row 3 – Three equal thirds */}
            <div style={{ ...styles.galleryItem, gridColumn: 'span 2' }}>
              <img
                src="/Images/4  MENTOR RECOGNITION.jpg"
                alt="Mentor recognition ceremony"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>MENTOR RECOGNITION</div>
            </div>
            <div style={{ ...styles.galleryItem, gridColumn: 'span 2' }}>
              <img
                src="/Images/5  MENTOR HANDOVER · FACULTY HONOURS.jpg"
                alt="Mentor handover and faculty honours"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>MENTOR HANDOVER · FACULTY HONOURS</div>
            </div>
            <div style={{ ...styles.galleryItem, gridColumn: 'span 2' }}>
              <img
                src="/Images/6  MENTOR HANDOVER · STAGE RECEIPT 06 · MENTOR HANDOVER · STAGE RECEIPT.jpg"
                alt="Stage receipt ceremony"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>MENTOR HANDOVER · STAGE RECEIPT</div>
            </div>

            {/* Row 4 – Half + Half */}
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/7 HIT EDITION · COMMEMORATIVE BOX.jpg"
                alt="HIT Edition commemorative box"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>HIT EDITION · COMMEMORATIVE BOX</div>
            </div>
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/8 PREPGENIUS · POD 44 · ₹5K PRIZE COHORT.jpg"
                alt="PrepGenius — Pod 44 — ₹5K Prize Cohort"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>PREPGENIUS · POD 44 · ₹5K PRIZE COHORT</div>
            </div>

            {/* Row 5 – Half + Half */}
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/9 POD KIT · BRAND DETAIL.jpg"
                alt="Pod Kit — Brand Detail"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>POD KIT · BRAND DETAIL</div>
            </div>
            <div style={{ ...styles.galleryItem, gridColumn: 'span 3' }}>
              <img
                src="/Images/10 WINNERS' MOMENT · ₹50K · ₹30K · ₹10K 10 · WINNERS' MOMENT · ₹50K · ₹30K · ₹10K.jpg"
                alt="Winners' Moment — ₹50K · ₹30K · ₹10K Prize Cheques"
                style={styles.galleryImg}
              />
              <div style={styles.galleryCaption}>WINNERS' MOMENT · ₹50K · ₹30K · ₹10K</div>
            </div>
          </div>

          {/* Campus CTA Banner */}
          <div style={styles.campusBanner} className="glass-panel campus-banner-flex">
            <div>
              <div style={styles.campusBannerTag}>BRING THIS TO YOUR CAMPUS</div>
              <p style={styles.campusBannerText}>
                The Innovation Arena 2025–26 editions open across campuses, corporates, and institutions. Apply to host a regional edition.
              </p>
            </div>
            <button className="btn-primary" style={styles.campusBannerBtn} onClick={() => setEnquiryOpen(true)}>
              Apply to host an edition →
            </button>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" style={{ ...styles.sectionPadding, backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={styles.partnerHeaderSplit} className="section-header-split">
            <div style={styles.partnerHeaderLeft}>
              <div style={styles.partnerBadge}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', marginRight: '6px' }} />
                MOMENTUM · ROADMAP
              </div>
              <h2 style={styles.partnerTitle} className="section-title-split">
                Where we are. <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>Where we're going.</span>
              </h2>
            </div>
            <p style={styles.partnerHeaderDesc}>
              The AI shift is moving in months, not years. So are we. Here's what we've shipped, what's next, and what's on the horizon — across the next 18 months.
            </p>
          </div>
          <div style={styles.newRoadmapList}>
            {[
              { date: 'APR 2026', status: 'SHIPPED', title: 'Methodology codified', desc: 'The Practitioner Method™ formalized across 3 tiers, 6 pillars, 4 audiences.', color: 'var(--accent-gold)', textColor: 'var(--accent-gold)', statusColor: 'var(--accent-gold)' },
              { date: 'MAY 2026', status: 'SHIPPED', title: 'Inaugural Arena · HIT', desc: '1,000+ attended. 70 pods built real AI products. 15 builders being backed.', color: 'var(--accent-gold)', textColor: 'var(--accent-gold)', statusColor: 'var(--accent-gold)' },
              { date: 'Q3 2026', status: 'NEXT', title: 'Main platform debuts', desc: 'Certifications, AI Jobs marketplace, Pitch Hub, community — unified.', color: 'var(--accent-primary)', textColor: 'var(--accent-primary)', statusColor: 'var(--accent-primary)' },
              { date: 'Q4 2026', status: 'NEXT', title: 'Global December Finale', desc: 'Regional Arena winners compete on one stage. One champion cohort. Real backing.', color: 'var(--accent-primary)', textColor: 'var(--accent-primary)', statusColor: 'var(--accent-primary)' },
              { date: '2027', status: 'ON THE HORIZON', title: '50+ Arena editions worldwide', desc: 'South Asia, GCC, Southeast Asia, Africa. Built in India. Made for the world.', color: 'var(--text-muted)', textColor: 'var(--text-muted)', statusColor: 'var(--text-muted)' },
            ].map((item, idx, arr) => (
              <div key={idx} style={styles.newRoadmapRow} className="new-roadmap-row">
                <div style={styles.newRoadmapLeft} className="new-roadmap-left">
                  <div style={styles.newRoadmapLineContainer} className="new-roadmap-line-container">
                    <div style={{ ...styles.newRoadmapCircle, borderColor: item.color }}>
                      <div style={{ ...styles.newRoadmapDot, backgroundColor: item.color }} />
                    </div>
                    {idx < arr.length - 1 && (
                      <div style={{ ...styles.newRoadmapVerticalLine, background: `linear-gradient(to bottom, ${item.color}, ${arr[idx+1].color})` }} className="new-roadmap-vertical-line" />
                    )}
                  </div>
                  <div style={styles.newRoadmapDateContainer} className="new-roadmap-date-container">
                    <div style={{ ...styles.newRoadmapDate, color: item.textColor }}>{item.date}</div>
                    <div style={{ ...styles.newRoadmapStatusText, color: item.statusColor }}>{item.status}</div>
                  </div>
                </div>
                <div style={styles.newRoadmapRight}>
                  <h3 style={styles.newRoadmapTitle} className="new-roadmap-title">{item.title}</h3>
                  <p style={styles.newRoadmapDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — DEBUTING · Q3 2026 (Waitlist) */}
      <section id="waitlist" style={styles.waitlistSection}>
        <div className="container waitlist-flex-responsive" style={styles.waitlistContainer}>
          <div style={styles.waitlistLeft}>
            <div style={styles.waitlistBadge}>
              <span style={{ marginRight: '6px' }}>✦</span> DEBUTING · Q3 2026
            </div>
            <h2 style={styles.waitlistTitle}>
              The main platform <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>is coming.</span>
            </h2>
            <p style={styles.waitlistDesc}>
              One product surface for the full AI journey. Certifications, the Innovation Arena, AI Jobs, the Pitch Hub, and the community — unified. We're building it now, with the first 1,000 practitioners shaping it. Reserve early access — invites roll out in waves, by audience.
            </p>
            <ul style={styles.waitlistList}>
              <li style={styles.waitlistItem}>
                <span style={styles.waitlistDash}>—</span> Practitioner-level certifications, scored on shipped artifacts — not quiz banks.
              </li>
              <li style={styles.waitlistItem}>
                <span style={styles.waitlistDash}>—</span> AI Jobs marketplace with role-aware matching and AI-powered resume building.
              </li>
              <li style={styles.waitlistItem}>
                <span style={styles.waitlistDash}>—</span> Pitch Hub for practitioner-founders to be discovered, funded, and scaled.
              </li>
              <li style={styles.waitlistItem}>
                <span style={styles.waitlistDash}>—</span> Community, mentor office hours, and continuously-updated curriculum.
              </li>
            </ul>
          </div>
          <div style={styles.waitlistRight}>
            <div style={styles.waitlistCard} className="glass-panel">
              <div style={styles.waitlistCardBadge}>EARLY ACCESS · WAITLIST</div>
              <h3 style={styles.waitlistCardTitle}>Be first in line when the platform opens.</h3>
              <p style={styles.waitlistCardDesc}>
                Drop your email. We'll send your invite when your audience wave opens.
              </p>
              {!waitlistSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} style={styles.waitlistForm}>
                  <div style={styles.waitlistInputGroup}>
                    <input type="email" required placeholder="you@company.com" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} style={styles.waitlistInput} className="input-focus-glow" />
                    <button type="submit" style={styles.waitlistBtn}>Reserve →</button>
                  </div>
                  <div style={styles.waitlistFootnote}>No spam. One email when your wave opens.</div>
                </form>
              ) : (
                <div style={styles.waitlistSuccess}>
                  <div style={styles.waitlistSuccessIcon}>✓</div>
                  <h4 style={styles.waitlistSuccessTitle}>Reservation Confirmed!</h4>
                  <p style={styles.waitlistSuccessText}>We've added <strong>{waitlistEmail}</strong> to the early access queue.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12 — Manifesto Quote Banner */}
      <section style={styles.quoteBannerSection}>
        <div className="container" style={styles.quoteBannerContainer}>
          <div style={styles.quoteBannerIcon}>“</div>
          <blockquote style={styles.quoteBannerQuote} className="serif-italic">
            We're not building another course catalogue. We're building the loop that turns a first prompt into a funded company.
          </blockquote>
          <div style={styles.quoteBannerAuthor}>THE AI FOR EVERYONE MANIFESTO · MAY 2026</div>
        </div>
      </section>

      {/* 13 — REACH US — AI TRAINING FOR YOUR TEAM */}
      <section id="training" style={styles.trainingSection}>
        <div className="container">
          <div style={styles.trainingHeaderSplit} className="section-header-split">
            <div style={styles.trainingHeaderLeft}>
              <div style={{ ...styles.sectionSub, color: 'var(--accent-gold)' }}>REACH US — AI TRAINING FOR YOUR TEAM</div>
              <h2 style={styles.trainingTitle} className="section-title-split">
                Want AI training for your <span className="serif-italic" style={{ color: 'var(--accent-gold)' }}>school, college, or company?</span>
              </h2>
              <p style={styles.trainingDesc}>
                Tell us who you are. We'll send back a scoped proposal — cohort size, channels, certifications, and an Innovation Arena edition tailored to your context — in 48 hours.
              </p>
            </div>
            <div style={styles.trainingHeaderRight}>
              <button
                className="btn-primary"
                style={styles.trainingProposalBtn}
                onClick={() => handleOpenEnquiry('individual', 'AI Training Proposal Request')}
              >
                Talk to us — get a proposal in 48 hrs →
              </button>
              <div style={styles.trainingSocialLinks}>
                <a href="https://wa.me/919051615690" target="_blank" rel="noopener noreferrer" style={styles.trainingSocialBtn} className="glass-panel">
                  <span style={{ marginRight: '6px' }}>💬</span> WhatsApp us
                </a>
                <a href="mailto:info@aiforeveryone.org" style={styles.trainingSocialBtn} className="glass-panel">
                  <span style={{ marginRight: '6px' }}>✉</span> Email us
                </a>
              </div>
              <div style={styles.trainingCallFootnote}>or call +91 90516 15690</div>
            </div>
          </div>
          <div style={styles.trainingGrid} className="training-grid-responsive">
            <div
              style={styles.trainingCard}
              className="glass-panel audience-card-hover"
              onClick={() => handleOpenEnquiry('school', 'AI literacy for School students, teacher training, and parent orientation.')}
            >
              <div style={styles.trainingCardTop}>
                <div style={styles.trainingCardIcon}>🏫</div>
                <div style={styles.trainingCardArrow}>↗</div>
              </div>
              <div>
                <div style={styles.trainingCardTag}>K-12</div>
                <h3 style={styles.trainingCardTitle}>School</h3>
                <p style={styles.trainingCardDesc}>AI literacy for Class 6–12 students, teacher training, and parent orientation.</p>
              </div>
            </div>
            <div
              style={styles.trainingCard}
              className="glass-panel audience-card-hover"
              onClick={() => handleOpenEnquiry('college', 'The full 17-module flagship + Innovation Arena edition on College campus.')}
            >
              <div style={styles.trainingCardTop}>
                <div style={styles.trainingCardIcon}>🎓</div>
                <div style={styles.trainingCardArrow}>↗</div>
              </div>
              <div>
                <div style={styles.trainingCardTag}>HIGHER ED</div>
                <h3 style={styles.trainingCardTitle}>College</h3>
                <p style={styles.trainingCardDesc}>The full 17-module flagship + Innovation Arena edition on your campus.</p>
              </div>
            </div>
            <div
              style={styles.trainingCard}
              className="glass-panel audience-card-hover"
              onClick={() => handleOpenEnquiry('corporate', 'Corporate AI training: Function & leadership tracks, Chief AI Officer, custom case studies.')}
            >
              <div style={styles.trainingCardTop}>
                <div style={styles.trainingCardIcon}>🏢</div>
                <div style={styles.trainingCardArrow}>↗</div>
              </div>
              <div>
                <div style={styles.trainingCardTag}>WORKFORCE</div>
                <h3 style={styles.trainingCardTitle}>Corporate</h3>
                <p style={styles.trainingCardDesc}>Function & leadership tracks, Chief AI Officer, custom case studies on your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — PARTNER WITH US */}
      <section id="partner" style={styles.partnerSection}>
        <div className="container">
          <div style={styles.partnerHeaderSplit} className="section-header-split">
            <div style={styles.partnerHeaderLeft}>
              <div style={styles.partnerBadge}>
                <span style={styles.partnerBadgeDot}>⬤</span> 12 — PARTNER WITH US
              </div>
              <h2 style={styles.partnerTitle} className="section-title-split">
                Bring AI For Everyone to <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>your region.</span>
              </h2>
            </div>
            <p style={styles.partnerHeaderDesc}>
              We don't deliver alone. Authorized Partners license our IP and deliver our certifications in their cities, countries, and continents. Trainers get certified to facilitate. This is how AI For Everyone scales worldwide — without losing quality.
            </p>
          </div>
          <div style={styles.partnerGrid} className="partner-grid-responsive">
            <div style={styles.partnerCard} className="glass-panel">
              <div>
                <div style={styles.partnerCardNum}>CARD 01</div>
                <h3 style={styles.partnerCardTitle}>Become a Partner</h3>
                <p style={styles.partnerCardItalic}>Training institutes, universities, consulting firms, and educational entrepreneurs.</p>
                <ul style={styles.partnerCardList}>
                  <li style={styles.partnerCardListLi}>— License to deliver AI+ certifications</li>
                  <li style={styles.partnerCardListLi}>— Co-branded delivery</li>
                  <li style={styles.partnerCardListLi}>— Marketing support</li>
                  <li style={styles.partnerCardListLi}>— Trainer certification</li>
                  <li style={styles.partnerCardListLi}>— Revenue share</li>
                </ul>
              </div>
              <div style={styles.partnerCardLink} onClick={() => handleOpenEnquiry('corporate', 'Become a Partner Inquiry')}>
                Apply to become a partner →
              </div>
            </div>
            <div style={styles.partnerCard} className="glass-panel">
              <div>
                <div style={styles.partnerCardNum}>CARD 02</div>
                <h3 style={styles.partnerCardTitle}>Become a Trainer</h3>
                <p style={styles.partnerCardItalic}>Individual practitioners who want to facilitate AI For Everyone certifications.</p>
                <ul style={styles.partnerCardList}>
                  <li style={styles.partnerCardListLi}>— Trainer certification</li>
                  <li style={styles.partnerCardListLi}>— Delivery rights</li>
                  <li style={styles.partnerCardListLi}>— Community of trainers</li>
                  <li style={styles.partnerCardListLi}>— Continuous content updates</li>
                </ul>
              </div>
              <div style={styles.partnerCardLink} onClick={() => handleOpenEnquiry('individual', 'Become a Trainer Inquiry')}>
                Apply to become a trainer →
              </div>
            </div>
            <div style={styles.partnerCard} className="glass-panel">
              <div>
                <div style={styles.partnerCardNum}>CARD 03</div>
                <h3 style={styles.partnerCardTitle}>Co-develop a Certification</h3>
                <p style={styles.partnerCardItalic}>Universities, industry bodies, and institutions building specialized AI capabilities.</p>
                <ul style={styles.partnerCardList}>
                  <li style={styles.partnerCardListLi}>— Co-branded certification</li>
                  <li style={styles.partnerCardListLi}>— Joint IP</li>
                  <li style={styles.partnerCardListLi}>— Shared marketing</li>
                  <li style={styles.partnerCardListLi}>— Long-term partnership</li>
                </ul>
              </div>
              <div style={styles.partnerCardLink} onClick={() => handleOpenEnquiry('college', 'Co-develop a Certification Inquiry')}>
                Explore co-development →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — below Partner With Us */}
      <section id="faq-bottom" style={{ ...styles.sectionPadding, borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ ...styles.sectionHeader, marginBottom: '48px', textAlign: 'center' }}>
            <div style={styles.sectionSub}>FAQ</div>
            <h2 style={styles.sectionTitle} className="section-title">Frequently Asked Questions</h2>
          </div>
          <div style={styles.faqList}>
            {faqData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.faqItem,
                  borderBottom: idx === faqData.length - 1 ? 'none' : '1px solid var(--border-color)'
                }}
              >
                <button
                  onClick={() => setActiveFaq2(activeFaq2 === idx ? null : idx)}
                  style={styles.faqQuestionBtn}
                >
                  <span style={styles.faqQuestionText}>{item.q}</span>
                  <span style={{
                    ...styles.faqChevron,
                    transform: activeFaq2 === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>↓</span>
                </button>
                <div style={{
                  ...styles.faqAnswerContainer,
                  maxHeight: activeFaq2 === idx ? '300px' : '0px',
                  opacity: activeFaq2 === idx ? 1 : 0
                }}>
                  <p style={styles.faqAnswerText}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — THE FOUNDER */}
      <section id="founder" style={styles.founderSection}>
        <div className="container">
          <div style={styles.founderHeaderRow}>
            <div style={styles.partnerBadge}>
              <span style={styles.partnerBadgeDot}>⬤</span> 13 — THE FOUNDER
            </div>
            <h2 style={styles.founderHeading}>Built by builders.</h2>
          </div>

          <div style={styles.founderCard} className="glass-panel">
            <div style={styles.founderImgCol}>
              <img
                src="/Images/founder.jpg"
                alt="Soumojit Das — Founder & Director, AI For Everyone"
                style={styles.founderImg}
              />
            </div>
            <div style={styles.founderContent}>
              <div style={styles.founderMeta}>
                <div style={styles.founderName}>SOUMOJIT DAS</div>
                <div style={styles.founderRole}>FOUNDER &amp; DIRECTOR · AI FOR EVERYONE</div>
              </div>
              <p style={styles.founderBio}>
                <strong><em>18 years</em></strong> across SAP, digital transformation, AI mentorship, and AI adoption.{' '}
                <em>Certified PMO from IIM Indore.</em>
              </p>
              <p style={styles.founderDesc}>
                Founder of InTime IT Services Pvt. Ltd. — the parent company behind AI For Everyone, Excentra, and Aurevia.
              </p>
              <a
                href="https://www.linkedin.com/in/soumojitdas"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.founderLinkedIn}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14 — ENQUIRE */}
      <section id="enquire" style={styles.inqSection}>
        <div className="container">
          <div style={styles.inqGrid}>

            {/* LEFT COLUMN */}
            <div style={styles.inqLeft}>
              <div style={styles.partnerBadge}>
                <span style={styles.partnerBadgeDot}>⬤</span> 14 — ENQUIRE
              </div>
              <h2 style={styles.inqHeading}>
                Every program<br />is scoped to<br />
                <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>your context.</span>
              </h2>
              <p style={styles.inqSubtext}>
                School. College. Corporate. Individual. Every audience, every certification, every Innovation Arena edition gets a custom-scoped proposal in 48 hours. No public pricing — because no two contexts are the same.
              </p>
              <div style={styles.inqRoutingBlock}>
                <p style={styles.inqRoutingLine}>Institutional enquiries route to leadership directly.</p>
                <p style={styles.inqRoutingLine}>Individual enquiries → admissions team.</p>
                <p style={styles.inqRoutingLine}>Partner enquiries → partnerships team.</p>
                <p style={styles.inqRoutingLine}>Adoption Services enquiries → enterprise team.</p>
                <p style={styles.inqRoutingLine}>AI Talent Hiring enquiries → talent partnerships team.</p>
              </div>
              <div style={styles.inqQuickLabel}>PREFER A QUICK MESSAGE?</div>
              <div style={styles.inqQuickLinks}>
                <a href="https://wa.me/919051615690" target="_blank" rel="noopener noreferrer" style={styles.inqQuickBtn} className="glass-panel">
                  <span style={styles.inqQuickIcon}>💬</span>
                  <span style={styles.inqQuickBtnText}>WhatsApp</span>
                  <span style={styles.inqQuickBtnMeta}>+91 90516 15690 →</span>
                </a>
                <a href="mailto:ai@intimeinc.co.in" style={styles.inqQuickBtn} className="glass-panel">
                  <span style={styles.inqQuickIcon}>✉️</span>
                  <span style={styles.inqQuickBtnText}>Email</span>
                  <span style={styles.inqQuickBtnMeta}>ai@intimeinc.co.in →</span>
                </a>
                <a href="tel:+919051615690" style={styles.inqQuickBtn} className="glass-panel">
                  <span style={styles.inqQuickIcon}>📞</span>
                  <span style={styles.inqQuickBtnText}>Call us</span>
                  <span style={styles.inqQuickBtnMeta}>+91 90516 15690 →</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — FORM */}
            <div style={styles.inqRight}>
              {inqSubmitted ? (
                <div style={styles.inqSuccess}>
                  <div style={styles.inqSuccessIcon}>✓</div>
                  <h3 style={styles.inqSuccessTitle}>Enquiry received!</h3>
                  <p style={styles.inqSuccessText}>We’ll send your custom-scoped proposal within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setInqSubmitted(true); }}
                  style={styles.inqForm}
                >
                  {/* Row 1: Name + Email */}
                  <div style={styles.inqRow}>
                    <div style={styles.inqField}>
                      <label style={styles.inqLabel}>NAME *</label>
                      <input required value={inqName} onChange={e => setInqName(e.target.value)} placeholder="Your name" style={styles.inqInput} className="inq-input" />
                    </div>
                    <div style={styles.inqField}>
                      <label style={styles.inqLabel}>EMAIL *</label>
                      <input required type="email" value={inqEmail} onChange={e => setInqEmail(e.target.value)} placeholder="you@company.com" style={styles.inqInput} className="inq-input" />
                    </div>
                  </div>

                  {/* Row 2: Phone + Country */}
                  <div style={styles.inqRow}>
                    <div style={styles.inqField}>
                      <label style={styles.inqLabel}>PHONE / WHATSAPP *</label>
                      <input required value={inqPhone} onChange={e => setInqPhone(e.target.value)} placeholder="+1 555 0123" style={styles.inqInput} className="inq-input" />
                    </div>
                    <div style={styles.inqField}>
                      <label style={styles.inqLabel}>COUNTRY *</label>
                      <select required value={inqCountry} onChange={e => setInqCountry(e.target.value)} style={{ ...styles.inqInput, cursor: 'pointer' }} className="inq-input">
                        <option value="">Select country</option>
                        {['India','United States','United Kingdom','UAE','Singapore','Australia','Canada','South Africa','Other'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Organisation */}
                  <div style={styles.inqFieldFull}>
                    <label style={styles.inqLabel}>ORGANIZATION</label>
                    <input value={inqOrg} onChange={e => setInqOrg(e.target.value)} placeholder="School / College / Company name (optional)" style={styles.inqInput} className="inq-input" />
                  </div>

                  {/* I am enquiring as */}
                  <div style={styles.inqFieldFull}>
                    <label style={styles.inqLabel}>I AM ENQUIRING AS *</label>
                    <div style={styles.inqPillRow}>
                      {['School','College','Corporate','Individual','Partner'].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setInqAs(opt)}
                          style={{
                            ...styles.inqPill,
                            backgroundColor: inqAs === opt ? 'var(--text-primary)' : 'transparent',
                            color: inqAs === opt ? 'var(--bg-primary)' : 'var(--text-secondary)',
                            borderColor: inqAs === opt ? 'var(--text-primary)' : 'var(--border-color)',
                          }}
                        >{opt}</button>
                      ))}
                    </div>
                  </div>

                  {/* I'm interested in */}
                  <div style={styles.inqFieldFull}>
                    <label style={styles.inqLabel}>I’M INTERESTED IN *</label>
                    <div style={styles.inqPillRow}>
                      {[
                        'A certification',
                        'The Innovation Arena',
                        'AI Adoption Services (Audit / Build / Transformation)',
                        'AI Talent Hiring (post a role / sponsor the Arena / build a custom cohort)',
                        'Partner program',
                        'Custom program',
                        'Not sure — guide me',
                      ].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleInqInterest(opt)}
                          style={{
                            ...styles.inqPill,
                            backgroundColor: inqInterests.includes(opt) ? 'var(--text-primary)' : 'transparent',
                            color: inqInterests.includes(opt) ? 'var(--bg-primary)' : 'var(--text-secondary)',
                            borderColor: inqInterests.includes(opt) ? 'var(--text-primary)' : 'var(--border-color)',
                          }}
                        >{opt}</button>
                      ))}
                    </div>
                  </div>

                  {/* Context */}
                  <div style={styles.inqFieldFull}>
                    <label style={styles.inqLabel}>TELL US ABOUT YOUR CONTEXT (OPTIONAL)</label>
                    <textarea
                      value={inqContext}
                      onChange={e => setInqContext(e.target.value)}
                      placeholder="Audience size, timeline, specific goals..."
                      rows={4}
                      style={styles.inqTextarea}
                      className="inq-input"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={styles.inqSubmitBtn}>
                    Send Enquiry — Receive Proposal in 48 Hours
                  </button>
                  <p style={styles.inqDisclaimer}>
                    By submitting, you agree to be contacted by AI For Everyone regarding your enquiry. We do not sell or share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 15 — FAQ */}
      <section id="faq-master" style={styles.masterFaqSection}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={styles.masterFaqHeader}>
            <div style={styles.partnerBadge}>
              <span style={styles.partnerBadgeDot}>⬤</span> 15 — FAQ
            </div>
            <h2 style={styles.masterFaqHeading}>
              Questions, <span className="serif-italic">answered.</span>
            </h2>
          </div>

          <div style={styles.masterFaqPill}>
            <span style={styles.masterFaqPillDot} />
            FAQ
          </div>

          <div style={styles.faqList}>
            {[
              {
                q: 'What is The Practitioner Method?',
                a: 'The Practitioner Method™ is our proprietary three-tier journey (AI Native → AI Builder → AI Leader) built across six pillars and four audiences. Every certification ends in a shippable artifact, not a quiz score.',
              },
              {
                q: 'What is the AI Innovation Arena?',
                a: 'The AI Innovation Arena is the global championship for AI builders. Spring regional editions run across schools, colleges, and corporates; one global December finale crowns a champion cohort. Winners receive capital, mentorship, and GTM backing.',
              },
              {
                q: 'How does AI For Everyone differ from Coursera or upGrad?',
                a: 'AI For Everyone is a four-layer ecosystem — Learn, Build, Hire, Invest — not just a course catalogue. We train practitioners, run the Innovation Arena to mentor builders, connect talent to AI roles, and back the founders who emerge. Every layer feeds the next.',
              },
              {
                q: 'What certifications does AI For Everyone offer?',
                a: '11 launch certifications across foundations, builder tracks, function-specific applications (Sales, Marketing, HR, Finance, Legal), and leadership (Chief AI Officer). Phase 2 launches Q3 2026 across healthcare, government, manufacturing.',
              },
              {
                q: 'How do colleges bring AI For Everyone to their campus?',
                a: 'Colleges partner with AI For Everyone to host an Innovation Arena edition on campus, deploy the 17-module flagship programme, and route their top pods into our incubation pathway. Engineering, commerce, and arts undergraduates are all eligible.',
              },
              {
                q: 'What does the AI Adoption Services engagement look like?',
                a: 'Three service tiers. AI Readiness Audit (2–4 weeks) is a diagnostic that produces a board-ready AI strategy. AI Automation Build (8–16 weeks) deploys working AI systems in production. AI Transformation Partnership (6–12 months) combines audit, build, and workforce training for organizations going all-in on AI.',
              },
              {
                q: 'How can my company hire AI talent through AI For Everyone?',
                a: 'Three ways. (1) Direct hiring through the AI Jobs marketplace — post AI roles to a pool of certified practitioners with smart matching by skill and tier. (2) Sponsor a regional Innovation Arena edition — get recruiter access to top builders before they enter the open market, plus judging seats at the Global Finale. (3) Build a custom training cohort scoped to your tech stack, with pre-placement assessments and hire-from-cohort rights. Enquire for a custom talent partnership.',
              },
              {
                q: 'Why is AI For Everyone positioned as a talent pipeline, not just a training company?',
                a: 'Because we don’t just teach AI — we certify AI practitioners through The Practitioner Method™, put them through real builds in the AI Innovation Arena, and connect them to companies hiring AI talent. Every learner who completes a certification enters the marketplace by default. Every Arena cohort produces pre-vetted practitioners who have already shipped real AI products. For companies facing the AI talent shortage, we are the supply side of the equation.',
              },
              {
                q: 'How does the partner program work?',
                a: 'Authorized Partners license the AI For Everyone IP and deliver our certifications in their cities, countries, and continents under a co-branded model. We provide curriculum, trainer certification, marketing support, and continuous updates. Partners run delivery and share revenue.',
              },
              {
                q: 'What does pricing look like?',
                a: 'Every program is custom-scoped — there is no public price list because no two contexts are the same. School, college, corporate, individual, and Adoption Services engagements all receive a proposal in 48 hours of enquiry.',
              },
            ].map((item, idx, arr) => (
              <div
                key={idx}
                style={{
                  ...styles.faqItem,
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid var(--border-color)',
                }}
              >
                <button
                  onClick={() => setActiveMasterFaq(activeMasterFaq === idx ? null : idx)}
                  style={styles.faqQuestionBtn}
                >
                  <span style={styles.masterFaqQ}>{item.q}</span>
                  <span style={{
                    ...styles.faqChevron,
                    transform: activeMasterFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>↓</span>
                </button>
                <div style={{
                  ...styles.faqAnswerContainer,
                  maxHeight: activeMasterFaq === idx ? '300px' : '0px',
                  opacity: activeMasterFaq === idx ? 1 : 0,
                }}>
                  <p style={styles.faqAnswerText}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultAudience={enquiryAudience}
        defaultMessage={enquiryMessage}
      />
      
      <AuthModals 
        isOpen={authOpen} 
        mode={authMode} 
        onClose={() => setAuthOpen(false)} 
        onSwitchMode={(mode) => setAuthMode(mode)}
      />

      {/* Global CSS classes injecting hover animations and responsive breaks */}
      <style dangerouslySetInnerHTML={{__html: `
        .inq-input:focus {
          border-bottom-color: var(--accent-primary) !important;
        }
        .inq-input::placeholder {
          color: var(--text-muted);
        }
        .video-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
        }
        .video-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px -15px rgba(124, 58, 237, 0.25);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .stat-card-hover:hover {
          transform: translateY(-6px);
          border-color: var(--border-color-hover);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .eco-card-hover:hover {
          transform: translateY(-6px);
          border-color: var(--border-color-hover);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .eco-card-hover:hover .arrow-hover {
          transform: translateX(4px);
        }
        .pillar-hover:hover {
          background: var(--bg-secondary) !important;
          border-color: var(--accent-primary) !important;
          transform: translateY(-4px);
        }
        .audience-card-hover {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          height: 100%;
        }
        .audience-card-hover:hover {
          transform: translateY(-6px);
          border-color: var(--border-color-hover);
        }
        .step-node-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .step-node-hover:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
        }
        .industry-hover-card {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.3s ease;
        }
        .industry-hover-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-color-hover);
        }
        .industry-hover-card:hover .ind-arrow {
          transform: translateX(3px);
        }
        .beyond-row-border {
          border-bottom: 1px solid var(--border-color);
        }
        .beyond-row-border:last-child {
          border-bottom: none;
        }
        .talent-card-hover-el {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          transition: all 0.3s ease;
        }
        .talent-card-hover-el:hover {
          transform: translateY(-6px);
          border-color: var(--border-color-hover);
        }
        .cert-hover-card {
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        .cert-hover-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-color-hover);
          box-shadow: 0 16px 32px rgba(0,0,0,0.1);
        }
        .cert-hover-card:hover .cert-arrow {
          transform: translateX(3px);
        }
        .filter-pill-hover {
          transition: all 0.2s ease;
        }
        .filter-pill-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .download-hover {
          transition: all 0.2s;
        }
        .download-hover:hover {
          color: var(--text-primary) !important;
          background: rgba(255,255,255,0.05);
        }
        .action-box-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .action-box-hover:hover {
          border-color: var(--accent-primary);
          background-color: var(--bg-secondary);
          transform: translateY(-3px);
        }
        .action-box-hover:hover .action-arrow {
          transform: translateX(4px);
        }
        /* Gallery hover */
        .gallery-img-hover:hover img {
          transform: scale(1.04);
        }
        /* Roadmap card hover */
        .roadmap-card-hover:hover {
          transform: translateY(-5px);
          border-color: var(--border-color-hover);
          box-shadow: 0 16px 32px rgba(0,0,0,0.1);
        }
        /* Gallery responsive */
        @media (max-width: 1024px) {
          .gallery-grid-responsive { grid-template-columns: repeat(4, 1fr) !important; }
          .roadmap-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .gallery-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          .roadmap-grid-responsive { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid-responsive { grid-template-columns: 1fr !important; }
          .campus-banner-flex { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}} />
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    color: 'var(--text-primary)',
  },
  heroSection: {
    padding: '160px 0 100px 0',
    position: 'relative',
    zIndex: 2,
  },
  heroContainer: {
    gap: '60px',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heroTagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    letterSpacing: '0.12em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  heroTaglineDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-teal)',
    boxShadow: '0 0 8px var(--accent-teal)',
  },
  heroHeading: {
    lineHeight: '1.15',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    maxWidth: '540px',
  },
  heroBtns: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '12px',
  },
  heroStatsRow: {
    borderTop: '1px solid var(--border-color)',
    paddingTop: '32px',
    marginTop: '24px',
  },
  heroStatsTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  heroStatsGrid: {
    display: 'grid',
    gap: '20px 30px',
  },
  heroStatItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  heroStatNumber: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  heroStatLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  videoWidget: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    aspectRatio: '0.85',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
    backgroundColor: '#0c0d13',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.6,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, rgba(8, 9, 13, 0.4) 0%, transparent 40%, rgba(8, 9, 13, 0.95) 90%)',
  },
  videoHeaderTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '9999px',
    padding: '6px 14px',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  redDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ef4444',
    boxShadow: '0 0 10px #ef4444',
    display: 'inline-block',
  },
  playBtn: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(124, 58, 237, 0.15)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'var(--accent-primary)',
    }
  },
  playArrow: {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '16px solid #ffffff',
    marginLeft: '5px',
  },
  videoFooterCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  videoCardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  videoCardDesc: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
  },
  videoCardDivider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '6px 0',
  },
  videoCardMeta: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-teal)',
    letterSpacing: '0.05em',
  },
  tickerSection: {
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '24px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  sectionPadding: {
    padding: '100px 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionSub: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--accent-primary)',
    letterSpacing: '0.15em',
    fontWeight: '600',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  statsGrid: {
    gap: '24px',
  },
  statCard: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '40px 32px',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    transition: 'all 0.3s ease',
  },
  statCardNum: {
    fontSize: '3.25rem',
    fontWeight: '900',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  statCardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  statCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  manifestoSection: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  manifestoContainer: {
    gap: '60px',
  },
  manifestoLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  manifestoHeading: {
    fontWeight: '900',
    lineHeight: '1.15',
    color: 'var(--text-primary)',
  },
  manifestoLocation: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    marginTop: '8px',
  },
  manifestoRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  manifestoText: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
  },
  manifestoAuthor: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    fontWeight: '600',
    marginTop: '10px',
  },
  sectionHeaderSplit: {
    gap: '40px',
    marginBottom: '60px',
    alignItems: 'flex-end',
  },
  sectionTitleSplit: {
    fontWeight: '800',
    color: 'var(--text-primary)',
    lineHeight: '1.2',
  },
  sectionHeaderDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    maxWidth: '540px',
  },
  ecosystemGrid: {
    gap: '24px',
  },
  ecosystemCard: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '36px',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  ecoCardNum: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
  },
  ecoCardTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  ecoCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    flexGrow: 1,
  },
  ecoCardLink: {
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '12px',
  },
  ecosystemQuote: {
    textAlign: 'center',
    fontSize: '1.35rem',
    color: 'var(--text-secondary)',
    marginTop: '60px',
  },
  stepperContainer: {
    gap: '24px',
    marginBottom: '60px',
  },
  stepNode: {
    padding: '30px 24px',
    borderRadius: '12px',
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  stepIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginBottom: '8px',
  },
  stepName: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  stepDuration: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-gold)',
    fontWeight: '600',
    letterSpacing: '0.05em',
  },
  stepQuote: {
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    fontStyle: 'italic',
  },
  stepTarget: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  pillarsGrid: {
    gap: '20px',
  },
  pillarCard: {
    padding: '28px',
    borderRadius: '12px',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    transition: 'all 0.3s ease',
  },
  pillarId: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginBottom: '10px',
  },
  pillarTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  pillarDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  audiencesGrid: {
    gap: '24px',
  },
  audienceCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
  },
  audHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '24px',
  },
  audTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-teal)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  audTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  audSubtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  audList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  bulletCheck: {
    color: 'var(--accent-teal)',
    marginRight: '8px',
    fontWeight: 'bold',
  },
  audBtn: {
    width: '100%',
    padding: '12px',
    fontSize: '0.9rem',
    borderRadius: '10px',
    marginTop: 'auto',
  },
  
  /* Section 04: Industries Styles */
  industriesGrid: {
    gap: '20px',
  },
  industryCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
  },
  industryId: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  industryTitle: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  industryDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.55',
    flexGrow: 1,
  },
  industryLink: {
    fontSize: '0.85rem',
    color: 'var(--accent-primary)',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px',
  },

  /* Section 05: Beyond Courses Styles */
  beyondListContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  beyondRow: {
    gap: '40px',
    padding: '40px 0',
    alignItems: 'flex-start',
  },
  beyondRowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  beyondRowIndex: {
    fontFamily: 'var(--font-mono)',
    fontSize: '1.15rem',
    fontWeight: '600',
    color: 'var(--accent-primary)',
    minWidth: '30px',
  },
  beyondRowTitle: {
    fontSize: '1.45rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  beyondRowRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  beyondRowDesc: {
    fontSize: '0.975rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
  },
  beyondQuote: {
    color: 'var(--accent-teal)',
    fontSize: '1.1rem',
    marginTop: '6px',
  },

  /* Section 06: Talent pipeline styles */
  talentGrid: {
    gap: '24px',
  },
  talentCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
  },
  talentCardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '20px',
  },
  talentCardTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-gold)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  talentCardTitle: {
    fontSize: '1.45rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  talentCardSub: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  },
  talentListTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: '700',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  talentList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  talentBtn: {
    width: '100%',
    padding: '12px',
    fontSize: '0.9rem',
    borderRadius: '10px',
  },

  /* Section 07: Adoption Services Styles */
  audDetailsTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-teal)',
    fontWeight: '600',
    letterSpacing: '0.05em',
    marginTop: '4px',
  },
  outcomeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px dashed var(--border-color)',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginTop: '20px',
  },
  adoptionEnterpriseFooter: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textAlign: 'center',
    lineHeight: '1.6',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '32px',
    marginTop: '40px',
  },

  /* Section 09: Certifications Styles */
  filterPillsContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '12px',
  },
  filterPill: {
    border: '1px solid',
    padding: '8px 18px',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  certsGrid: {
    gap: '24px',
  },
  certCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
  },
  certHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  certCode: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  certBadgeContainer: {
    display: 'flex',
    gap: '6px',
  },
  certBadge: {
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '4px',
    letterSpacing: '0.02em',
  },
  certTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '6px',
    lineHeight: '1.25',
  },
  certDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    lineHeight: '1.5',
    marginBottom: '14px',
  },
  certDetailsRow: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '12px',
    marginBottom: '12px',
  },
  certQuote: {
    fontSize: '0.925rem',
    lineHeight: '1.55',
    color: 'var(--text-primary)',
    marginBottom: '18px',
  },
  certShipContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    border: '1px dashed var(--border-color)',
    borderRadius: '8px',
    padding: '14px',
    marginBottom: '20px',
  },
  certShipTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: '700',
    letterSpacing: '0.05em',
    marginBottom: '6px',
  },
  certShipText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.45',
  },
  certTagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '14px',
  },
  certTagPill: {
    fontSize: '0.75rem',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-secondary)',
    padding: '4px 10px',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
  },
  certActionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  },
  downloadBrochureBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  certEnquireBtn: {
    fontSize: '0.9rem',
    color: 'var(--accent-primary)',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  certBottomText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    lineHeight: '1.6',
    textAlign: 'center',
    marginTop: '60px',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '30px',
  },

  /* Section 10: Arena Styles */
  arenaGrid: {
    gap: '40px',
    alignItems: 'start',
    marginBottom: '40px',
  },
  arenaLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cadenceTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  cadenceGrid: {
    gap: '24px',
  },
  cadenceCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cadenceSeason: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-primary)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  cadenceHeadline: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  cadenceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  arenaFootnote: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '16px',
    marginTop: '12px',
  },
  arenaRight: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  haldiaCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '32px',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
  },
  haldiaHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '20px',
  },
  haldiaTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-gold)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  haldiaTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  haldiaDate: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  haldiaStatsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '16px 0',
    marginBottom: '20px',
  },
  haldiaStatRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  haldiaStatNum: {
    fontWeight: '800',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
  },
  haldiaStatLabel: {
    color: 'var(--text-secondary)',
    textAlign: 'right',
  },
  haldiaFooter: {
    fontSize: '0.85rem',
    lineHeight: '1.45',
    fontStyle: 'italic',
    color: 'var(--text-primary)',
  },
  haldiaFooterMuted: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    letterSpacing: '0.05em',
  },
  pipelineBanner: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  pipelineTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-teal)',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  pipelineText: {
    fontSize: '0.975rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  pipelineQuote: {
    fontSize: '1.1rem',
    color: 'var(--accent-gold)',
    marginTop: '6px',
  },
  arenaActionsRow: {
    alignItems: 'center',
  },
  arenaActionBox: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionArrow: {
    transition: 'transform 0.25s',
  },
  arenaActionLink: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--accent-primary)',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '12px',
  },

  /* FAQ Accordion Styles */
  faqList: {
    display: 'flex',
    flexDirection: 'column',
  },
  faqItem: {
    padding: '24px 0',
  },
  faqQuestionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    color: 'var(--text-primary)',
    textAlign: 'left',
  },
  faqQuestionText: {
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  faqChevron: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    transition: 'transform 0.3s ease',
  },
  faqAnswerContainer: {
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
  },
  faqAnswerText: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginTop: '14px',
  },

  /* Gallery Section */
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '12px',
    marginBottom: '40px',
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
  },
  galleryImg: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  galleryCaption: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    letterSpacing: '0.08em',
    padding: '8px 12px',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-secondary)',
  },

  /* Campus Banner */
  campusBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    padding: '32px 40px',
    borderRadius: '16px',
    flexWrap: 'wrap',
  },
  campusBannerTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-primary)',
    fontWeight: '700',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  campusBannerText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.55',
    maxWidth: '560px',
  },
  campusBannerBtn: {
    padding: '14px 28px',
    fontSize: '0.95rem',
    flexShrink: 0,
  },

  /* Manifesto Quote Transition Banner */
  quoteBannerSection: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  quoteBannerContainer: {
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  quoteBannerIcon: {
    fontFamily: 'var(--font-serif)',
    fontSize: '6rem',
    color: 'var(--accent-gold)',
    lineHeight: '0.6',
    height: '40px',
  },
  quoteBannerQuote: {
    fontSize: '2.5rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    lineHeight: '1.25',
    letterSpacing: '-0.02em',
    border: 'none',
    padding: '0',
    margin: '0',
  },
  quoteBannerAuthor: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--accent-gold)',
    letterSpacing: '0.15em',
    fontWeight: '600',
  },

  /* New Roadmap Timeline styles */
  newRoadmapList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    marginTop: '60px',
  },
  newRoadmapRow: {
    display: 'flex',
    gap: '40px',
  },
  newRoadmapLeft: {
    display: 'flex',
    width: '180px',
    flexShrink: 0,
    gap: '20px',
  },
  newRoadmapLineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '24px',
  },
  newRoadmapCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-primary)',
    zIndex: 2,
  },
  newRoadmapDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  newRoadmapVerticalLine: {
    position: 'absolute',
    top: '20px',
    bottom: '-48px',
    width: '2px',
    zIndex: 1,
  },
  newRoadmapDateContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  newRoadmapDate: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  newRoadmapStatusText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  newRoadmapRight: {
    flex: 1,
  },
  newRoadmapTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  newRoadmapDesc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },

  /* Section 12: Partner With Us styles */
  partnerSection: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-primary)',
    borderBottom: '1px solid var(--border-color)',
  },
  partnerHeaderSplit: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '60px',
    marginBottom: '60px',
  },
  partnerHeaderLeft: {
    flex: '1.2',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  partnerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    padding: '6px 14px',
    borderRadius: '100px',
    background: 'var(--bg-secondary)',
    alignSelf: 'flex-start',
  },
  partnerBadgeDot: {
    color: 'var(--accent-primary)',
    fontSize: '0.55rem',
  },
  partnerTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    lineHeight: '1.1',
  },
  partnerHeaderDesc: {
    flex: '0.8',
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    margin: 0,
  },
  partnerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  partnerCard: {
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '420px',
  },
  partnerCardNum: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-gold)',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  partnerCardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '14px',
  },
  partnerCardItalic: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '24px',
  },
  partnerCardList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  partnerCardListLi: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  partnerCardLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    transition: 'color 0.2s, transform 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },

  /* Waitlist Section styles */
  waitlistSection: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
  },
  waitlistContainer: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
  },
  waitlistLeft: {
    flex: '1.2',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  waitlistBadge: {
    alignSelf: 'flex-start',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    color: 'var(--accent-gold)',
    border: '1px solid rgba(245, 158, 11, 0.25)',
    padding: '6px 12px',
    borderRadius: '100px',
    background: 'rgba(245, 158, 11, 0.05)',
  },
  waitlistTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    lineHeight: '1.1',
  },
  waitlistDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  waitlistList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  waitlistItem: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    display: 'flex',
    gap: '12px',
    lineHeight: '1.5',
  },
  waitlistDash: {
    color: 'var(--accent-gold)',
    fontWeight: 'bold',
  },
  waitlistRight: {
    flex: '0.8',
    width: '100%',
  },
  waitlistCard: {
    padding: '40px',
    borderRadius: '24px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-glass)',
  },
  waitlistCardBadge: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-gold)',
    letterSpacing: '0.15em',
    fontWeight: '600',
    marginBottom: '16px',
  },
  waitlistCardTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    lineHeight: '1.25',
    marginBottom: '12px',
  },
  waitlistCardDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '30px',
  },
  waitlistForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  waitlistInputGroup: {
    display: 'flex',
    gap: '10px',
    width: '100%',
  },
  waitlistInput: {
    flex: 1,
    padding: '14px 18px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
  },
  waitlistBtn: {
    padding: '14px 24px',
    borderRadius: '8px',
    border: '1px solid var(--accent-gold)',
    backgroundColor: 'transparent',
    color: 'var(--accent-gold)',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  waitlistFootnote: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
  },
  waitlistSuccess: {
    textAlign: 'center',
    padding: '20px 0',
  },
  waitlistSuccessIcon: {
    fontSize: '2.5rem',
    color: 'var(--accent-teal)',
    marginBottom: '12px',
  },
  waitlistSuccessTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  waitlistSuccessText: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
  },

  /* Reach Us / AI Training Section styles */
  trainingSection: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
  },
  trainingHeaderSplit: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px',
    marginBottom: '60px',
  },
  trainingHeaderLeft: {
    flex: '1.2',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  trainingTitle: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    lineHeight: '1.15',
  },
  trainingDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  trainingHeaderRight: {
    flex: '0.8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
  },
  trainingProposalBtn: {
    width: '100%',
    textAlign: 'center',
    padding: '16px 28px',
    fontSize: '1rem',
    fontWeight: '600',
  },
  trainingSocialLinks: {
    display: 'flex',
    gap: '12px',
    width: '100%',
  },
  trainingSocialBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 18px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  trainingCallFootnote: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    width: '100%',
    textAlign: 'center',
  },
  trainingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  trainingCard: {
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  trainingCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  trainingCardIcon: {
    fontSize: '2.5rem',
  },
  trainingCardArrow: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    transition: 'transform 0.3s ease',
  },
  trainingCardTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent-gold)',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  trainingCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  trainingCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },

  /* Section 08: How We Engage */
  engageHeaderSplit: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '60px',
    marginBottom: '0px',
    paddingBottom: '48px',
    borderBottom: '1px solid var(--border-color)',
  },
  engageHeaderLeft: {
    flex: '1.1',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  engageTitleBlock: {
    lineHeight: '1.15',
    margin: 0,
  },
  engageTitleBold: {
    fontSize: '3.8rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  engageTitleItalic: {
    fontSize: '3.2rem',
    color: 'var(--accent-primary)',
    display: 'block',
    letterSpacing: '-0.01em',
    lineHeight: '1.2',
  },
  engageHeaderRight: {
    flex: '0.85',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '4px',
  },
  engageHeaderDesc: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    margin: 0,
  },
  engageStageList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0',
  },
  engageStageRow: {
    display: 'grid',
    gridTemplateColumns: '140px 260px 1fr',
    gap: '32px',
    alignItems: 'center',
    padding: '32px 0',
  },
  engageStageLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  engageStageNum: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    color: 'var(--accent-primary)',
    textTransform: 'uppercase',
  },
  engageStageMid: {
    display: 'flex',
    alignItems: 'center',
  },
  engageStageTitle: {
    fontSize: '1.55rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: 0,
    lineHeight: '1.25',
  },
  engageStageRight: {
    display: 'flex',
    alignItems: 'center',
  },
  engageStageDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: 0,
  },

  /* Section 13: The Founder */
  founderSection: {
    padding: '100px 0',
    borderTop: '1px solid var(--border-color)',
  },
  founderHeaderRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '48px',
  },
  founderHeading: {
    fontSize: '2.75rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
  },
  founderCard: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    padding: '48px',
    borderRadius: '20px',
  },
  founderImgCol: {
    flexShrink: 0,
    width: '200px',
  },
  founderImg: {
    width: '200px',
    height: '240px',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '12px',
    display: 'block',
  },
  founderContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
  },
  founderMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '8px',
  },
  founderName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    color: 'var(--accent-primary)',
  },
  founderRole: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    letterSpacing: '0.08em',
    color: 'var(--text-muted)',
    fontWeight: '600',
  },
  founderBio: {
    fontSize: '1.15rem',
    color: 'var(--text-primary)',
    lineHeight: '1.6',
    fontWeight: '400',
    margin: 0,
  },
  founderDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: 0,
  },
  founderLinkedIn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'color 0.2s',
  },

  /* Section 14: Enquire */
  inqSection: {
    padding: '100px 0',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-primary)',
  },
  inqGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.4fr',
    gap: '80px',
    alignItems: 'flex-start',
  },
  inqLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    position: 'sticky',
    top: '100px',
  },
  inqHeading: {
    fontSize: '3.2rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  inqSubtext: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    margin: 0,
  },
  inqRoutingBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '20px 0',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  inqRoutingLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    margin: 0,
  },
  inqQuickLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: 'var(--accent-primary)',
  },
  inqQuickLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  inqQuickBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 18px',
    borderRadius: '10px',
    fontSize: '0.9rem',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  inqQuickIcon: {
    fontSize: '1.1rem',
    flexShrink: 0,
  },
  inqQuickBtnText: {
    fontWeight: '600',
    flex: 1,
  },
  inqQuickBtnMeta: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
  },
  inqRight: {
    display: 'flex',
    flexDirection: 'column',
  },
  inqForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inqRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  inqField: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  inqFieldFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  inqLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.68rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
  },
  inqInput: {
    width: '100%',
    padding: '12px 0',
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    transition: 'border-color 0.2s',
  },
  inqTextarea: {
    width: '100%',
    padding: '12px 0',
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    resize: 'none',
    transition: 'border-color 0.2s',
    lineHeight: '1.6',
  },
  inqPillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  inqPill: {
    padding: '7px 16px',
    borderRadius: '100px',
    border: '1px solid',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
  },
  inqSubmitBtn: {
    width: '100%',
    padding: '16px',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '12px',
    marginTop: '8px',
  },
  inqDisclaimer: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    lineHeight: '1.55',
    textAlign: 'center',
    margin: 0,
  },
  inqSuccess: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    gap: '16px',
    textAlign: 'center',
  },
  inqSuccessIcon: {
    fontSize: '3rem',
    color: 'var(--accent-teal)',
  },
  inqSuccessTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  inqSuccessText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: 0,
  },

  /* Section 15: Master FAQ */
  masterFaqSection: {
    padding: '100px 0',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-primary)',
  },
  masterFaqHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '48px',
  },
  masterFaqHeading: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: 'var(--text-primary)',
    letterSpacing: '-0.03em',
    lineHeight: '1.1',
    margin: 0,
  },
  masterFaqPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    padding: '6px 14px',
    borderRadius: '100px',
    background: 'var(--bg-secondary)',
    marginBottom: '32px',
  },
  masterFaqPillDot: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-primary)',
    flexShrink: 0,
  },
  masterFaqQ: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1.35',
    textAlign: 'left',
  },
  originalHeroSection: {
    position: 'relative',
    padding: '40px 0 100px 0',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    overflow: 'hidden',
    backgroundImage: 'repeating-linear-gradient(135deg, var(--border-color) 0px, var(--border-color) 1px, transparent 1px, transparent 24px)',
  },
  heroContentWrapper: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  originalNavbarWrapper: {
    width: '100%',
    borderBottom: '1px solid var(--border-color)',
    marginBottom: '20px',
  },
  originalNavbar: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  originalBrandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  originalBrandText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '800',
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  },
  originalBrandTagline: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    borderLeft: '1px solid var(--border-color)',
    paddingLeft: '16px',
    marginLeft: '4px',
    textTransform: 'uppercase',
  },
  originalNavLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '32px',
  },
  originalNavLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  originalEnquireBtn: {
    padding: '10px 24px',
    fontSize: '0.95rem',
    fontWeight: '600',
    borderRadius: '9999px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'var(--accent-primary)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(124, 58, 237, 0.25)',
    transition: 'all 0.2s ease',
  },
  originalHeroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '60px 24px 80px 24px',
    width: '100%',
  },
  originalHeroLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  originalHeroTagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--accent-gold)',
    letterSpacing: '0.12em',
  },
  originalHeroHeading: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
    fontWeight: '400',
    lineHeight: '1.15',
    color: 'var(--text-primary)',
    margin: 0,
  },
  accentTextItalic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    color: '#7c3aed',
  },
  goldTextItalic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    color: 'var(--accent-gold)',
  },
  originalHeroDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
    maxWidth: '560px',
  },
  originalHeroBtns: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  originalHeroCtaBtn: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '9999px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'var(--accent-primary)',
    color: '#ffffff',
    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)',
    transition: 'all 0.2s ease',
  },
  originalHeroLinkBtn: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  originalHeroStatsRow: {
    borderTop: '1px solid var(--border-color)',
    paddingTop: '24px',
    marginTop: '12px',
    maxWidth: '560px',
  },
  originalHeroStatsTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: 'var(--text-muted)',
    letterSpacing: '0.12em',
    marginBottom: '16px',
  },
  originalHeroStatsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px 32px',
  },
  originalHeroStatItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: '8px',
  },
  originalHeroStatNumber: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.1rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    whiteSpace: 'nowrap',
  },
  originalHeroStatLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  originalHeroRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  originalVideoCard: {
    position: 'relative',
    width: '100%',
    maxWidth: '480px',
    aspectRatio: '0.74',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#0c0d13',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  originalVideoThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.85,
  },
  originalVideoOverlay: {
    position: 'absolute',
    inset: 0,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.85) 100%)',
    zIndex: 2,
  },
  originalVideoTags: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '9999px',
    padding: '6px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#ffffff',
  },
  originalLiveTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  originalLiveDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ef4444',
    display: 'inline-block',
  },
  originalVideoDivider: {
    opacity: 0.5,
  },
  originalDateTag: {
    opacity: 0.9,
  },
  originalPlayBtn: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  },
  originalVideoFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  originalVideoTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    lineHeight: '1.35',
  },
  originalVideoTitleItalic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    color: 'var(--accent-gold)',
    fontWeight: '500',
  },
  originalVideoStats: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    letterSpacing: '0.08em',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  originalTickerSection: {
    backgroundColor: '#000000',
    padding: '16px 0',
    width: '100%',
    overflow: 'hidden',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
  },
  originalTickerContainer: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  originalTickerText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    color: '#8c8c8c',
    textTransform: 'uppercase',
  },
  originalTickerAccentText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    color: 'var(--accent-gold)',
    textTransform: 'uppercase',
  },
  originalNumbersSection: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-primary)',
    borderBottom: '1px solid var(--border-color)',
  },
  originalNumbersHeader: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    letterSpacing: '0.12em',
    marginBottom: '40px',
    textTransform: 'uppercase',
  },
  originalNumbersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '24px',
  },
  originalNumberCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  originalNumberVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: '400',
    color: 'var(--text-primary)',
    lineHeight: '1',
  },
  originalNumberTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1.3',
  },
  originalNumberDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
};