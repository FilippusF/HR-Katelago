import React, { useState, useEffect, useRef } from 'react';
import Hero from './hero';
import { clients } from '../data/clients';
import whoImage     from '../assets/images/aboutUs.jpg';
import missionImage from '../assets/images/mission.jpg';
import logoImage    from '../assets/images/Main-logo.png';
import StationImage1 from '../assets/images/10.jpg';
import HomeImage    from '../assets/images/mission.jpg';

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS
   Single source of truth — keep in sync with Header, Footer, Contact, etc.
───────────────────────────────────────────────────────────────────────────── */
const G = {
  deep:   '#0e3327',   /* outermost page background                  */
  dark:   '#0e3327',   /* card / section surface                      */
  mid:    '#1a5c44',   /* lighter green used in image panels          */
  accent: '#1e5631',   /* CTA / icon background green                 */
  gold:   '#C09C31',   /* primary brand gold                          */
  cream:  '#f5f0e4',   /* off-white for headings / light text         */
  serif:  "'Georgia', 'Times New Roman', serif",
  sans:   "'DM Sans', 'Segoe UI', sans-serif",
};

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED PRIMITIVES
   Small reusable layout atoms used throughout the page.
───────────────────────────────────────────────────────────────────────────── */

/* Contained card — the core layout unit matching every other page */
const Card = ({ children, style = {}, animate = true }) => (
  <div
    style={{
      maxWidth: '1080px',
      margin: '0 auto',
      background: G.dark,
      borderRadius: '20px',
      border: '1px solid rgba(192,156,49,0.18)',
      overflow: 'hidden',
      animation: animate ? 'hmFadeUp 0.65s ease both' : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);

/* Section wrapper — applies page background + consistent vertical padding */
const Section = ({ children, noPad = false, style = {} }) => (
  <section
    style={{
      backgroundColor: G.deep,
      padding: noPad ? '0 24px' : '40px 24px',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </section>
);

/* Gold horizontal rule — used under section headings */
const GoldRule = ({ mb = 20 }) => (
  <div style={{ width: '40px', height: '1.5px', background: G.gold, marginBottom: mb, opacity: 0.6 }} />
);

/* Uppercase micro-label above headings */
const Eyebrow = ({ children }) => (
  <p
    style={{
      fontFamily: G.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: G.gold,
      marginBottom: '20px',
      opacity: 0.9,
    }}
  >
    {children}
  </p>
);

/* ─────────────────────────────────────────────────────────────────────────────
   HOME
───────────────────────────────────────────────────────────────────────────── */
const Home = () => {
  const [isVisible, setIsVisible]         = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading]         = useState(true);
  const sectionRef = useRef(null);

  /* IntersectionObserver — triggers the sliding float card in the hero panel */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  /* Page loader — shows for 2 s then clears */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  /* Back-to-top button visibility */
  useEffect(() => {
    const fn = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /* ── SECTION DATA ────────────────────────────────────────────────────────
     Defined as arrays so content is easy to update without touching JSX.
  ──────────────────────────────────────────────────────────────────────── */

  /* Vision / Mission / Philosophy pillars */
  const pillars = [
    {
      num: '01',
      title: 'Vision',
      body: "To be Namibia's leading strategic workforce partner, known for workforce compliance, structured HR governance and clear, trusted advice in regulated and project-based environments.",
    },
    {
      num: '02',
      title: 'Mission',
      body: 'To help organisations operate with confidence through compliant workforce structures, disciplined payroll governance and practical HR advisory aligned to Namibian labour legislation.',
    },
    {
      num: '03',
      title: 'Philosophy',
      body: 'We believe compliant workforce structures, disciplined payroll governance and clear HR frameworks create stronger organisations. Our approach is practical, structured and aligned to Namibian labour legislation.',
    },
  ];

  /* Core brand values with title + description */
  const values = [
    { title: 'Bold',    desc: 'We address workforce risk directly and speak with clarity.' },
    { title: 'Dynamic', desc: 'We support organisations operating in changing, project-based and regulated environments.' },
    { title: 'Human',   desc: 'We believe strong governance should support both the organisation and its people.' },
  ];

  /* Why Choose Us feature cards */
  const whyCards = [
    {
      num: '01',
      title: 'We understand Namibian labour compliance',
      body: 'Our work is grounded in practical knowledge of Namibian labour legislation and workforce requirements. We help clients navigate employment, payroll and compliance matters with clarity and confidence.',
    },
    {
      num: '02',
      title: 'We bring structure to complex workforce environments',
      body: 'From project-based operations to regulated sectors, we help organisations build clear employment frameworks, disciplined payroll systems and practical governance processes.',
    },
    {
      num: '03',
      title: 'We combine compliance with practical execution',
      body: "We don't believe in advice that looks good on paper but fails in practice. Our approach is practical, measured and designed to work in real business environments.",
    },
    {
      num: '04',
      title: 'We support premium, risk-aware organisations',
      body: 'We work with businesses that value structure, accountability and sound judgement, helping clients make informed workforce decisions that protect both operations and reputation.',
    },
  ];

  /* How We Work process steps */
  const processSteps = [
    {
      num: '01',
      title: 'Understand the environment',
      body: 'We assess your workforce needs, operating context and compliance exposure.',
    },
    {
      num: '02',
      title: 'Design the right framework',
      body: 'We develop practical workforce, payroll or HR solutions aligned to your operational realities.',
    },
    {
      num: '03',
      title: 'Execute with structure',
      body: 'We implement each solution carefully, with proper process, documentation and control.',
    },
    {
      num: '04',
      title: 'Sustain compliance',
      body: 'We provide continued support to help clients maintain standards, reduce risk and strengthen workforce governance.',
    },
  ];

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <Hero />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — WHO WE ARE
          Two-column: left = brand copy + phone CTA, right = photo panel.
          The right panel has corner accents, a frosted stats strip, and a
          slide-in float card triggered by the IntersectionObserver above.
      ══════════════════════════════════════════════════════════════════════ */}
      <Section>
        <Card>
          <div
            ref={sectionRef}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}
            className="km-hero-grid"
          >
            {/* Left — brand copy */}
            <div
              style={{
                padding: '56px 48px 56px 52px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRight: '1px solid rgba(255,255,255,0.07)',
              }}
              className="km-hero-left"
            >
              <Eyebrow>Workforce Solutions · Namibia</Eyebrow>

              <h1
                style={{
                  fontFamily: G.serif,
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: G.cream,
                  marginBottom: '22px',
                  maxWidth: '420px',
                }}
              >
                Strategic Workforce Partner for{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>
                  Regulated &amp; Project-Based
                </em>{' '}
                Operations
              </h1>

              <GoldRule />

              <p
                style={{
                  fontFamily: G.sans,
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                  maxWidth: '380px',
                }}
              >
                We employ, manage, and pay your workforce in Namibia: compliantly and efficiently.
              </p>

              {/* Italic brand quote */}
              <blockquote
                style={{
                  borderLeft: `2px solid ${G.gold}`,
                  paddingLeft: '16px',
                  marginBottom: '32px',
                  opacity: 0.85,
                }}
              >
                {/* <p
                  style={{
                    fontFamily: G.serif,
                    fontSize: '13px',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.65)',
                    margin: 0,
                  }}
                >
                  We support clients with compliant employment setup, Employer of Record services,
                  payroll governance and practical HR advisory that reduces risk and supports smooth operations.
                  Our work is clear, structured and aligned to Namibian labour requirements.
                </p> */}

                <p
                  style={{
                    fontFamily: G.serif,
                    fontSize: '13px',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.65)',
                    margin: 0,
                  }}
                >
                  Katelago HR Consultants is a strategic workforce partner based in Namibia. We provide workforce compliance, Employer of Record (EOR) solutions, payroll governance, recruitment, and strategic HR advisory services for organizations operating in regulated and project-based environments.
                </p>

                <p
                  style={{
                    fontFamily: G.serif,
                    fontSize: '13px',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.65)',
                    marginTop: '10px',
                    marginBottom: 0,
                  }}
                >
                  Our work is grounded in Namibian labour legislation and over 20 years of practical experience. We focus on clarity, structure, and disciplined execution to ensure your workforce systems are compliant, defensible, and aligned to your operations.
                </p>

                <p
                  style={{
                    fontFamily: G.serif,
                    fontSize: '13px',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.65)',
                    marginTop: '10px',
                    marginBottom: 0,
                  }}
                >
                  Alongside our compliance work, we offer strategic HR advisory services, including Psychometric Assessments, Job Grading, Salary Benchmarking and Organizational Development, to organizations across Namibia.
                </p>                
              </blockquote>

              {/* Phone / email CTA pill */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(192,156,49,0.1)',
                    border: '1px solid rgba(192,156,49,0.25)',
                    borderRadius: '50px',
                    padding: '10px 18px 10px 12px',
                  }}
                >
                  <div
                    style={{
                      width: '32px', height: '32px', background: G.gold,
                      borderRadius: '50%', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0,
                    }}
                  >
                    <svg width="14" height="14" fill={G.dark} viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.555 4.533a1 1 0 0 1-1.89 0L0 5.383z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: G.sans, fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 2px' }}>
                      Speak to a consultant
                    </p>
                      <a
                        href="mailto:info@katelago.com"
                        style={{
                          fontFamily: G.sans,
                          fontSize: '13px',
                          fontWeight: 500,
                          color: G.cream,
                          margin: 0,
                          textDecoration: 'none',
                        }}
                      >
                        info@katelago.com
                      </a>
                  </div>
                </div>

                {/* Ethos dot + tagline */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: G.gold, opacity: 0.6 }} />
                  <p style={{ fontFamily: G.sans, fontSize: '12px', color: 'rgba(255,255,255,0.38)', margin: 0, fontWeight: 300 }}>
                    Bold. Dynamic. Human.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — image panel with decorative elements */}
            <div style={{ position: 'relative', background: G.mid, overflow: 'hidden' }} className="km-hero-right">
              {/* Diagonal gold pattern texture */}
              <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 12px)' }} />

              {/* Corner accents — decorative L-shaped gold borders */}
              <div style={{ position: 'absolute', top: '24px', right: '24px', width: '48px', height: '48px', borderTop: '2px solid rgba(192,156,49,0.3)', borderRight: '2px solid rgba(192,156,49,0.3)', borderRadius: '0 8px 0 0' }} />
              <div style={{ position: 'absolute', bottom: '84px', left: '24px', width: '48px', height: '48px', borderBottom: '2px solid rgba(192,156,49,0.3)', borderLeft: '2px solid rgba(192,156,49,0.3)', borderRadius: '0 0 0 8px' }} />

              {/* Actual photo — inset 32px on all sides except bottom (reserved for stats strip) */}
              <div style={{ position: 'absolute', inset: '32px 32px 84px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(192,156,49,0.12)' }}>
                <div style={{ width: '100%', height: '100%', backgroundImage: `url(${whoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>

              {/* Frosted stats strip at the bottom of the image panel */}
              <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
                  display: 'grid', gridTemplateColumns: '1fr 1px 1fr',
                  padding: '18px 28px',
                }}
              >
                {[
                  { val: '100%', label: 'Compliant' },
                  null, /* thin vertical divider */
                  { val: 'LOCAL', label: 'Local Content' },
                ].map((item, i) =>
                  item === null ? (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
                  ) : (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <p style={{ fontFamily: G.serif, fontSize: '1.7rem', fontWeight: 600, color: G.gold, lineHeight: 1, marginBottom: '4px' }}>{item.val}</p>
                      <p style={{ fontFamily: G.sans, fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{item.label}</p>
                    </div>
                  )
                )}
              </div>

              {/* Floating card — slides in from left when section enters viewport */}
              <div
                className="km-float-card"
                style={{
                  position: 'absolute',
                  bottom: '90px',
                  left: '0',
                  width: '210px',
                  background: 'white',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                  zIndex: 10,
                  transition: 'transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease',
                  transform: isVisible ? 'translateX(20px)' : 'translateX(-160px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <p style={{ fontFamily: G.sans, fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#999', margin: '0 0 4px' }}>Team Ethos</p>
                <p style={{ fontFamily: G.sans, fontSize: '12px', fontWeight: 500, color: G.dark, margin: 0, lineHeight: 1.4 }}>Redefining the future of work in Africa</p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — CLIENTS SLIDER
          Contained card with a branded header row, fade-edge slider, and
          gold-pill logo containers that pause on hover.
      ══════════════════════════════════════════════════════════════════════ */}
      <Section noPad style={{ padding: '0 24px 40px' }}>
        <Card style={{ padding: '44px 52px' }}>
          {/* Header: title + hairline + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: G.serif, fontSize: '1.6rem', fontWeight: 400, color: G.cream, whiteSpace: 'nowrap', margin: 0 }}>
              Corporate clients <em style={{ color: G.gold, fontStyle: 'italic' }}>trust us</em>
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'rgba(192,156,49,0.18)', minWidth: '40px' }} />
            <p style={{ fontFamily: G.sans, fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: 0, whiteSpace: 'nowrap' }}>
              Trusted partners
            </p>
          </div>

          {/* Slider track with left/right fade overlays */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: `linear-gradient(to right, ${G.dark}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: `linear-gradient(to left, ${G.dark}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />

            {/* Duplicated client list for seamless infinite loop */}
            <div className="km-client-track" style={{ display: 'flex', alignItems: 'center' }}>
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="km-client-pill"
                  style={{
                    flexShrink: 0,
                    margin: '0 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    border: '1px solid rgba(192,156,49,0.15)',
                    borderRadius: '50px',
                    background: 'rgba(192,156,49,0.04)',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: G.gold, opacity: 0.45, flexShrink: 0 }} />
                  <img src={client.logo} alt={client.name} style={{ height: '38px', width: 'auto', maxWidth: '110px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — VISION / MISSION / VALUES
          Card with a faint missionImage background layer.
          Left col: brand values with title + description.
          Right col: numbered pillars (Vision, Mission, Philosophy).
      ══════════════════════════════════════════════════════════════════════ */}
      <Section noPad style={{ padding: '0 24px 40px' }} id="about">
        <Card style={{ overflow: 'visible' }}>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
            {/* Background image — very faint, purely atmospheric */}
            <div
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${missionImage})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.18,
              }}
            />
            {/* Gradient sits on top of the photo to maintain readability */}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${G.dark} 40%, rgba(23,77,58,0.92) 100%)` }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '60px 52px' }} className="vms-inner">
              <div style={{ marginBottom: '48px' }}>
                <Eyebrow>Who We Are</Eyebrow>
                <h2 style={{ fontFamily: G.serif, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: G.cream, margin: 0 }}>
                  Our <em style={{ color: G.gold, fontStyle: 'italic' }}>Vision, Mission</em> &amp; Values
                </h2>
              </div>

              <div className="row align-items-stretch g-4">
                {/* Values column */}
                <div className="col-lg-5">
                  <div
                    style={{
                      height: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(192,156,49,0.15)',
                      borderRadius: '16px',
                      padding: '32px',
                    }}
                  >
                    <p style={{ fontFamily: G.sans, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, marginBottom: '24px', opacity: 0.8 }}>
                      Core Values
                    </p>
                    {values.map((val) => (
                      <div key={val.title} style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                          {/* Filled check circle */}
                          <div style={{ width: '22px', height: '22px', background: G.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="11" height="11" fill="white" viewBox="0 0 16 16">
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                          </div>
                          <span style={{ fontFamily: G.sans, fontSize: '14px', color: G.cream, fontWeight: 500 }}>{val.title}</span>
                        </div>
                        {/* Description indented to align with the label */}
                        <p style={{ fontFamily: G.sans, fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px', lineHeight: 1.65, fontWeight: 300 }}>
                          {val.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillars column */}
                <div className="col-lg-7">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {pillars.map((p) => (
                      <div
                        key={p.num}
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(192,156,49,0.15)',
                          borderRadius: '14px',
                          padding: '24px',
                          display: 'flex',
                          gap: '20px',
                          alignItems: 'flex-start',
                          transition: 'border-color 0.3s',
                          cursor: 'default',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(192,156,49,0.35)'}
                        onMouseOut={(e)  => e.currentTarget.style.borderColor = 'rgba(192,156,49,0.15)'}
                      >
                        {/* Number badge */}
                        <div style={{ width: '48px', height: '48px', background: G.accent, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: G.serif, fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>
                          {p.num}
                        </div>
                        <div>
                          <h5 style={{ fontFamily: G.sans, fontSize: '15px', fontWeight: 500, color: G.cream, marginBottom: '8px' }}>{p.title}</h5>
                          <p style={{ fontFamily: G.sans, fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{p.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHY CHOOSE US
          4 gold cards + a full-width team photo below.
          Cards collapse 4→2→1 column via CSS classes.
      ══════════════════════════════════════════════════════════════════════ */}
      <Section noPad style={{ padding: '0 24px 40px' }}>
        <Card>
          <div style={{ padding: '60px 52px' }} className="why-inner">
            {/* Two-column header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px', alignItems: 'end' }} className="km-why-header">
              <div>
                <Eyebrow>Our Advantage</Eyebrow>
                <h2 style={{ fontFamily: G.serif, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: G.cream, margin: 0 }}>
                  Why <em style={{ color: G.gold, fontStyle: 'italic' }}>Choose Us</em>
                </h2>
              </div>
              <p style={{ fontFamily: G.serif, fontSize: '15px', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                "We believe that small actions create an extraordinary impact. By listening deeply and understanding others, we craft solutions that inspire trust."
              </p>
            </div>

            {/* 4 gold feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }} className="km-why-cards">
              {whyCards.map((card) => (
                <div
                  key={card.num}
                  style={{
                    background: G.gold,
                    borderRadius: '14px',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)'; }}
                  onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <span style={{ fontFamily: G.serif, fontSize: '2rem', fontWeight: 600, color: G.dark, lineHeight: 1, marginBottom: '12px', opacity: 0.55 }}>{card.num}</span>
                  <h6 style={{ fontFamily: G.sans, fontSize: '13px', fontWeight: 500, color: G.dark, lineHeight: 1.35, marginBottom: '10px' }}>{card.title}</h6>
                  <p style={{ fontFamily: G.sans, fontSize: '12px', color: G.dark, opacity: 0.75, lineHeight: 1.55, margin: 0, flexGrow: 1 }}>{card.body}</p>
                </div>
              ))}
            </div>

            {/* Full-width team photo */}
            <div
              style={{
                height: '280px',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundImage: `url(${StationImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.4s ease',
                cursor: 'default',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.015)'}
              onMouseOut={(e)  => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </Card>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — HOW WE WORK
          4-step process in a 2×2 grid.
          Each step: gold number circle, title, body.
          Steps alternate between a gold-bordered card and a gold-filled card
          for visual rhythm (odd = outline, even = gold fill).
      ══════════════════════════════════════════════════════════════════════ */}
      <Section noPad style={{ padding: '0 24px 40px' }} id>
        <Card>
          <div style={{ padding: '60px 52px' }} className="how-inner">
            {/* Section header */}
            <div style={{ marginBottom: '48px' }}>
              <Eyebrow>How We Work</Eyebrow>
              <h2 style={{ fontFamily: G.serif, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: G.cream, marginBottom: '12px' }}>
                Our <em style={{ color: G.gold, fontStyle: 'italic' }}>Process</em>
              </h2>
              <p style={{ fontFamily: G.sans, fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '520px', margin: 0 }}>
                At Katelago, our process is built around structure, compliance and disciplined execution.
              </p>
            </div>

            {/* 2×2 process grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="km-process-grid">
              {processSteps.map((step, i) => {
                /* Alternate style: even index = gold fill, odd index = outline */
                const isGold = i % 2 === 0;
                return (
                  <div
                    key={step.num}
                    style={{
                      background:   isGold ? G.gold : 'rgba(255,255,255,0.04)',
                      border:       isGold ? 'none' : '1px solid rgba(192,156,49,0.28)',
                      borderRadius: '16px',
                      padding:      '36px 32px',
                      transition:   'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor:       'default',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = isGold ? '0 12px 28px rgba(0,0,0,0.18)' : '0 12px 28px rgba(0,0,0,0.1)'; }}
                    onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {/* Number circle — colours invert between variants */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background:  isGold ? G.dark : G.gold,
                        display:     'flex',
                        alignItems:  'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        fontFamily:  G.serif,
                        fontSize:    '1.4rem',
                        fontWeight:  600,
                        color:       isGold ? G.gold : G.dark,
                      }}
                    >
                      {step.num}
                    </div>

                    <h5
                      style={{
                        fontFamily:   G.sans,
                        fontSize:     '15px',
                        fontWeight:   500,
                        // color:        'rgb(255, 255, 255)',   //isGold ? G.dark : G.cream,
                        color:        isGold ? G.dark : G.cream,
                        marginBottom: '10px',
                        lineHeight:   1.3,
                      }}
                    >
                      {step.title}
                    </h5>
                    <p
                      style={{
                        fontFamily: G.sans,
                        fontSize:   '13px',
                        fontWeight: 300,
                        color:      isGold ? 'rgba(23,77,58,0.85)' : 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        margin:     0,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — CALL TO ACTION
          Contained card with a dark photo background, corner accents,
          and a gold CTA pill.
      ══════════════════════════════════════════════════════════════════════ */}
      <Section noPad style={{ padding: '0 24px 40px' }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Background photo */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          {/* Dark scrim for text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.62)' }} />
          {/* Diagonal gold pattern */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)' }} />

          {/* Corner accents */}
          <div style={{ position: 'absolute', top: '24px', left: '24px', width: '40px', height: '40px', borderTop: '1.5px solid rgba(192,156,49,0.4)', borderLeft: '1.5px solid rgba(192,156,49,0.4)', borderRadius: '8px 0 0 0' }} />
          <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '40px', height: '40px', borderBottom: '1.5px solid rgba(192,156,49,0.4)', borderRight: '1.5px solid rgba(192,156,49,0.4)', borderRadius: '0 0 8px 0' }} />

          {/* CTA content */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 40px' }}>
            <p style={{ fontFamily: G.sans, fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold, marginBottom: '16px', opacity: 0.85 }}>
              Get Started
            </p>
            <h2
              style={{
                fontFamily: G.serif,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: G.cream,
                marginBottom: '12px',
                lineHeight: 1.2,
              }}
            >
              Let's partner for{' '}
              <em style={{ color: G.gold, fontStyle: 'italic' }}>HR Excellence.</em>
            </h2>
            <p style={{ fontFamily: G.sans, fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '36px', fontWeight: 300 }}>
              Compliant employment. Structured payroll. Practical HR advisory.
            </p>
            <a
              href="/Contact"
              style={{
                display: 'inline-block',
                padding: '14px 40px',
                borderRadius: '50px',
                backgroundColor: G.gold,
                color: G.dark,
                fontFamily: G.sans,
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 24px rgba(192,156,49,0.3)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,156,49,0.4)'; }}
              onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 4px 24px rgba(192,156,49,0.3)'; }}
            >
              Book a Consultation →
            </a>
          </div>
        </div>
      </Section>

      {/* ── LOADER ──────────────────────────────────────────────────────────── */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={logoImage} alt="Katelago Logo" style={{ height: '80px', marginBottom: '16px', animation: 'hmPulse 1.5s ease-in-out infinite' }} />
            <div className="spinner-border" style={{ color: G.accent }} role="status">
              <span className="visually-hidden">Loading…</span>
            </div>
          </div>
        </div>
      )}

      {/* ── BACK TO TOP ─────────────────────────────────────────────────────── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed', bottom: '30px', right: '30px',
            width: '48px', height: '48px', borderRadius: '50%',
            backgroundColor: G.gold, border: 'none', zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 16px rgba(192,156,49,0.35)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e)  => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="18" height="18" fill="white" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Entrance animation ── */
        @keyframes hmFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Loader pulse ── */
        @keyframes hmPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }

        /* ── Client logo slider ── */
        .km-client-track {
          animation: kmSlide 32s linear infinite;
          will-change: transform;
        }
        .km-client-track:hover { animation-play-state: paused; }
        @keyframes kmSlide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .km-client-pill:hover { border-color: rgba(192,156,49,0.4) !important; }

        /* ── Float card — only visible on large screens ── */
        .km-float-card { display: none; }
        @media (min-width: 1100px) { .km-float-card { display: block; } }

        /* ── TABLET (≤900px) ── */
        @media (max-width: 900px) {
          /* Hero grid: single column, image panel below */
          .km-hero-grid  { grid-template-columns: 1fr !important; }
          .km-hero-right { min-height: 320px; }

          /* Why cards: 2 columns */
          .km-why-cards  { grid-template-columns: 1fr 1fr !important; }
          .km-why-header { grid-template-columns: 1fr !important; }

          /* Process grid: single column */
          .km-process-grid { grid-template-columns: 1fr !important; }
        }

        /* ── MOBILE (≤600px) ── */
        @media (max-width: 600px) {
          /* Why cards: single column */
          .km-why-cards { grid-template-columns: 1fr !important; }
        }

        /* ── Padding tightening on mobile ── */
        @media (max-width: 768px) {
          .why-inner  { padding: 32px 24px !important; }
          .how-inner  { padding: 32px 24px !important; }
          .vms-inner  { padding: 32px 24px !important; }
          .km-hero-left { padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;