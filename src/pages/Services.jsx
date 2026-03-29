import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage    from '../assets/images/Main-logo.png';
import missionImage from '../assets/images/mission.jpg';
import HomeImage    from '../assets/images/mission.jpg';
import StationImage4 from '../assets/images/13.jpg';
import OilGasImage  from '../assets/images/Oil & Gas.png';

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Single source of truth — mirrors every other component on the site.
────────────────────────────────────────────────────────────────────────── */
const G = {
  deep:   '#0e3327',
  dark:   '#174D3A',
  mid:    '#1a5c44',
  accent: '#1e5631',
  gold:   '#C09C31',
  cream:  '#f5f0e4',
  serif:  "'Georgia', 'Times New Roman', serif",
  sans:   "'DM Sans', 'Segoe UI', sans-serif",
};

/* ── REUSABLE CONTAINED CARD ────────────────────────────────────────────────
   maxWidth: 1280px fills most of the viewport so cards don't feel squeezed.
   cardStyle overrides let service sections alternate green vs transparent.
────────────────────────────────────────────────────────────────────────── */
const Card = ({ children, style = {}, cardStyle = {} }) => (
  <div
    style={{
      maxWidth: '1280px',
      margin: '0 auto',
      background: G.dark,             /* default: solid green — overridden per service */
      borderRadius: '20px',
      border: '1px solid rgba(192,156,49,0.18)',
      overflow: 'hidden',
      animation: 'svFadeUp 0.65s ease both',
      ...style,
      ...cardStyle,
    }}
  >
    {children}
  </div>
);

/* ── SECTION WRAPPER ────────────────────────────────────────────────────────
   Applies page bg + consistent padding between cards.
────────────────────────────────────────────────────────────────────────── */
/* ── SECTION WRAPPER ────────────────────────────────────────────────────────
   Standard cards: solid G.deep background.
   Parallax cards: full-bleed background image with fixed attachment so the
   image stays still while the user scrolls — content floats over it.
   On mobile, background-attachment: fixed is disabled (iOS jank).
────────────────────────────────────────────────────────────────────────── */
const Wrap = ({ children, pb = true, parallax = false, parallaxImage = null }) => (
  <section
    style={{
      backgroundColor: parallax ? 'transparent' : G.deep,
      backgroundImage: parallax && parallaxImage ? `url(${parallaxImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: parallax ? 'fixed' : 'scroll',
      padding: pb ? '0 16px 32px' : '0 16px 0',
      position: 'relative',
    }}
  >
    {/* Dark scrim over the parallax image so content stays readable */}
    {parallax && (
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        pointerEvents: 'none',
      }} />
    )}
    {/* Content sits above the scrim */}
    <div style={{ position: parallax ? 'relative' : 'static', zIndex: 1 }}>
      {children}
    </div>
  </section>
);

/* ── EYEBROW LABEL ──────────────────────────────────────────────────────── */
const Eyebrow = ({ children }) => (
  <p style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold, marginBottom: '14px', opacity: 0.85 }}>
    {children}
  </p>
);

/* ── GOLD RULE ──────────────────────────────────────────────────────────── */
const Rule = () => (
  <div style={{ width: '40px', height: '1.5px', background: G.gold, opacity: 0.55, marginBottom: '20px' }} />
);

/* ── GOLD TAGLINE PILL ──────────────────────────────────────────────────── */
const Tagline = ({ children }) => (
  <div
    style={{
      background: 'rgba(192,156,49,0.12)',
      border: '1px solid rgba(192,156,49,0.3)',
      borderRadius: '10px',
      padding: '12px 20px',
      marginBottom: '24px',
    }}
  >
    <p style={{ fontFamily: G.serif, fontSize: '1rem', fontStyle: 'italic', color: G.gold, textAlign: 'center', margin: 0, letterSpacing: '0.3px' }}>
      {children}
    </p>
  </div>
);

/* ── INFO CARD ───────────────────────────────────────────────────────────────
   variant='gold'        → solid gold bg  (odd service: 1st, 3rd…)
   variant='transparent' → glass/border   (even service: 2nd, 4th…)
   Text colour adjusts automatically so both are readable.
────────────────────────────────────────────────────────────────────────── */
const InfoCard = ({ title, children, variant = 'gold' }) => {
  const isGold = variant === 'gold';
  return (
    <div
      style={{
        background:     isGold ? G.gold : 'rgba(50, 52, 52, 0.18)',  /* dark charcoal-green, readable over any image */
        border:         isGold ? 'none' : '1px solid rgba(192,156,49,0.3)',
        backdropFilter: isGold ? 'none' : 'blur(10px)',
        borderRadius:   '14px',
        padding:        '24px 22px',
        height:         '100%',
      }}
    >
      <h5 style={{ fontFamily: G.sans, fontSize: '14px', fontWeight: 500, color: isGold ? G.dark : G.gold, marginBottom: '14px' }}>
        {title}
      </h5>
      <div style={{ color: isGold ? G.dark : 'rgba(255,255,255,0.88)' }}>
        {children}
      </div>
    </div>
  );
};

/* ── CTA BUTTON ─────────────────────────────────────────────────────────── */
const CtaBtn = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      display: 'inline-block',
      padding: '12px 32px',
      borderRadius: '50px',
      backgroundColor: G.gold,
      color: G.dark,
      fontFamily: G.sans,
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(192,156,49,0.2)',
    }}
    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,156,49,0.32)'; }}
    onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,156,49,0.2)'; }}
  >
    {children}
  </button>
);

/* ── SERVICE SECTION LAYOUT ─────────────────────────────────────────────────
   Two-column layout: left = copy, right = photo + two feature cards.
   `flip`    — reverses column order on desktop for alternating visual rhythm.
   `variant` — 'gold' or 'transparent'; drives InfoCard alternating colours.

   Mobile behaviour (≤900px):
     - svc-grid collapses to 1 column via CSS
     - svc-copy / svc-media always stack copy-first via CSS order classes
     - inner feature-cards grid collapses to 1 column via svc-cards class
────────────────────────────────────────────────────────────────────────── */
const ServiceLayout = ({
  id, eyebrow, heading, tagline, body, ctaLabel, ctaOnClick,
  image, card1Title, card1Content, card2Title, card2Content,
  flip = false, variant = 'gold',
}) => (
  <div id={id} className="svc-layout">
    <div className={`svc-grid ${flip ? 'svc-flip' : ''}`}>

      {/* ── COPY COLUMN ── always order-1 on mobile via CSS ── */}
      <div className="svc-copy">
        <Eyebrow>{eyebrow || 'Overview'}</Eyebrow>
        <h2 style={{ fontFamily: G.serif, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 400, color: G.cream, lineHeight: 1.25, marginBottom: '20px' }}>
          {heading}
        </h2>
        <Rule />
        <Tagline>{tagline}</Tagline>
        <p style={{ fontFamily: G.sans, fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
          {body}
        </p>
        <CtaBtn onClick={ctaOnClick}>{ctaLabel}</CtaBtn>
      </div>

      {/* ── MEDIA COLUMN ── photo + two feature cards ── */}
      <div className="svc-media">
        {/* Photo */}
        <div style={{ borderRadius: '14px', overflow: 'hidden', height: '220px', border: '1px solid rgba(192,156,49,0.12)', marginBottom: '16px' }}>
          <img src={image} alt={heading} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* Two feature cards — collapse to 1-col on mobile via .svc-cards */}
        <div className="svc-cards">
          <InfoCard title={card1Title} variant={variant}>{card1Content}</InfoCard>
          <InfoCard title={card2Title} variant={variant === 'gold' ? 'transparent' : 'gold'}>{card2Content}</InfoCard>
        </div>
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════════════════
   SERVICES PAGE
════════════════════════════════════════════════════════════════════════════ */
const Services = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading]         = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop    = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSec    = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const goContact      = () => navigate('/contact');

  /* Hash-based deep linking — scrolls to anchor after load */
  useEffect(() => {
    const go = () => {
      const hash = window.location.hash.substring(1);
      if (hash) setTimeout(() => scrollToSec(hash), 500);
    };
    go();
    window.addEventListener('hashchange', go);
    return () => window.removeEventListener('hashchange', go);
  }, []);

  useEffect(() => {
    if (!isLoading && window.location.hash) {
      setTimeout(() => scrollToSec(window.location.hash.substring(1)), 100);
    }
  }, [isLoading]);

  /* ── SERVICES DATA ──────────────────────────────────────────────────────
     Kept as data so adding a new service only requires a new object here.
  ──────────────────────────────────────────────────────────────────────── */
  const services = [
    {
      id: 'talent-acquisition',
      variant: 'gold',           /* card 1 starts gold, card 2 transparent */
      heading: 'Oil & Gas Workforce Solutions',
      tagline: 'Workforce structures that can hold up under pressure.',
      body: 'Katelago supports operators, EPC contractors, drilling companies and project teams with practical workforce compliance, payroll structure and employment support built for regulated environments.',
      ctaLabel: 'Request a Consultation',
      image: OilGasImage,
      card1Title: 'What We Support',
      card1Content: (
        <ul style={{ fontFamily: G.sans, fontSize: '12px', paddingLeft: '16px', margin: 0, lineHeight: 1.75 }}>
          {['Pre-project workforce compliance reviews','Workforce mobilisation planning','Rotational and offshore support','Project payroll structure','Immigration and local labour alignment','Demobilisation and termination support','Review-ready employment documentation'].map(i => <li key={i}>{i}</li>)}
        </ul>
      ),
      card2Title: 'Why This Matters',
      card2Content: (
        <p style={{ fontFamily: G.sans, fontSize: '12px', margin: 0, lineHeight: 1.7 }}>
          In project environments, small workforce gaps can become expensive very quickly. Unclear contracts, poor overtime control or delayed registrations can lead to disputes and payroll exposure. Katelago helps clients reduce that risk by putting the right structure in place early.
        </p>
      ),
    },
    {
      id: 'employer-of-record',
      variant: 'transparent',    /* card 1 starts transparent, card 2 gold */
      heading: 'Employer of Record Services in Namibia',
      tagline: 'Hire employees in Namibia without opening a local entity too early.',
      body: "Katelago acts as the local employer while you manage the employee's day-to-day work. We handle compliant contracts, payroll, statutory administration and core employment support in line with Namibian requirements.",
      ctaLabel: 'Talk to Us About EOR',
      image: StationImage4,
      flip: true,
      card1Title: 'EOR Support Includes',
      card1Content: (
        <ul style={{ fontFamily: G.sans, fontSize: '12px', paddingLeft: '16px', margin: 0, lineHeight: 1.75 }}>
          {['Compliant local employment contracts','Employee onboarding and file setup','Monthly payroll processing','PAYE and Social Security administration','Payslips and payroll reporting','Leave and record management','Termination calculations and close-out','Basic HR and compliance guidance','Immigration support where needed'].map(i => <li key={i}>{i}</li>)}
        </ul>
      ),
      card2Title: 'When EOR Is the Right Fit',
      card2Content: (
        <p style={{ fontFamily: G.sans, fontSize: '12px', margin: 0, lineHeight: 1.7 }}>
          You want to hire in Namibia before setting up a local company. You need to enter the market quickly but stay compliant. You are testing operations or mobilising a project team. You need a lawful local employment structure while keeping focus on your core business.
        </p>
      ),
    },
    {
      id: 'payroll-administration',
      variant: 'gold',           /* back to gold for service 3 */
      heading: 'Payroll Governance',
      tagline: 'Accurate. Compliant. Seamless Payroll.',
      body: 'We provide full payroll solutions that make your payroll process simple, accurate, and efficient — built around Namibian statutory requirements.',
      ctaLabel: 'Speak to a Payroll Specialist',
      image: StationImage4,
      card1Title: 'What We Support',
      card1Content: (
        <ul style={{ fontFamily: G.sans, fontSize: '12px', paddingLeft: '16px', margin: 0, lineHeight: 1.75 }}>
          {['Monthly payroll processing','Cost-to-company calculations','PAYE and Social Security compliance','Leave administration and reporting','Overtime and allowance control','Pension and benefit administration','Termination payout calculations','Payroll reports and secure payslips','Payroll checks and verification'].map(i => <li key={i}>{i}</li>)}
        </ul>
      ),
      card2Title: 'Payroll Reporting',
      card2Content: (
        <p style={{ fontFamily: G.sans, fontSize: '12px', margin: 0, lineHeight: 1.7 }}>
          Weak payroll controls create avoidable risk — incorrect statutory deductions, overtime errors, poor records or disputes at termination. We help clients build payroll systems that are more controlled, more consistent and easier to review.
        </p>
      ),
    },
    {
      id: 'hr-consulting',
      variant: 'transparent',    /* transparent for service 4 */
      heading: 'Strategic HR Advisory Services',
      tagline: 'Practical HR advisory support for better workforce decisions.',
      body: 'Alongside our compliance and payroll services, Katelago provides practical HR advisory support that helps organisations make better workforce decisions.',
      ctaLabel: 'Talk to Us About HR Advisory',
      image: StationImage4,
      flip: true,
      card1Title: 'HR Advisory Includes',
      card1Content: (
        <ul style={{ fontFamily: G.sans, fontSize: '12px', paddingLeft: '16px', margin: 0, lineHeight: 1.75 }}>
          {['Psychometric Assessments','Job Grading & Salary Benchmarking','Organisational Development','Recruitment','Performance Framework Design','HR governance framework support'].map(i => <li key={i}>{i}</li>)}
        </ul>
      ),
      card2Title: 'How We Approach It',
      card2Content: (
        <p style={{ fontFamily: G.sans, fontSize: '12px', margin: 0, lineHeight: 1.7 }}>
          Our advisory work is practical. Whether the need is assessment, grading, recruitment or organisational structure, the goal is the same: clearer decisions, stronger fairness and better alignment between people and business needs.
        </p>
      ),
    },
  ];

  /* ── WHY CHOOSE US data ─────────────────────────────────────────────────*/
  const whyItems = [
    { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', title: 'Experienced and locally grounded', body: 'We bring practical HR and workforce experience rooted in Namibian labour requirements.' },
    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Structured approach', body: 'We help clients build systems that are easier to manage and defend — not isolated admin tasks.' },
    { icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', title: 'Compliance-focused', body: 'We work with organisations that need lawful, practical and review-ready workforce processes.' },
    { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', title: 'Trusted advisory', body: 'We handle sensitive workforce matters with discretion, accountability and clear judgement.' },
  ];

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: G.deep }}>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
          Blurred background photo, barely-there overlay, bleeds into page.
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: G.deep }}>

        {/* Blurred background photo */}
        <div style={{ position: 'absolute', inset: '-8px', backgroundImage: `url(${StationImage4})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, filter: 'blur(4px)' }} />

        {/* Gradient overlay — light top, solid bottom for section bleed */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,36,25,0.1) 0%, rgba(10,36,25,0.15) 52%, rgba(14,51,39,0.95) 88%, rgba(14,51,39,1) 100%)' }} />

        {/* Diagonal gold pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)' }} />

        {/* Corner accents */}
        <div style={{ position: 'absolute', top: '28px', right: '36px', width: '50px', height: '50px', borderTop: '1.5px solid rgba(192,156,49,0.3)', borderRight: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 8px 0 0' }} />
        <div style={{ position: 'absolute', bottom: '44px', left: '36px', width: '50px', height: '50px', borderBottom: '1.5px solid rgba(192,156,49,0.3)', borderLeft: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 0 0 8px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 16px 60px' }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              {/* Eyebrow with flanking rules */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
                <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold }}>Our Services</span>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
              </div>

              <h1 style={{ fontFamily: G.serif, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 400, color: G.cream, lineHeight: 1.2, marginBottom: '20px' }}>
                Practical Workforce Solutions for{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>Regulated &amp; Growing</em>{' '}
                Organisations
              </h1>

              <p style={{ fontFamily: G.sans, fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 32px' }}>
                From Employer of Record and payroll governance to strategic HR advisory, we help organisations put the right workforce structures in place to support compliance and business stability.
              </p>

              {/* Quick-jump service pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {[['Oil & Gas', 'talent-acquisition'], ['Employer of Record', 'employer-of-record'], ['Payroll Governance', 'payroll-administration'], ['HR Advisory', 'hr-consulting']].map(([label, anchor]) => (
                  <button
                    key={anchor}
                    onClick={() => scrollToSec(anchor)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '50px',
                      background: 'rgba(192,156,49,0.1)',
                      border: '1px solid rgba(192,156,49,0.25)',
                      color: G.gold,
                      fontFamily: G.sans,
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(192,156,49,0.2)'; e.currentTarget.style.borderColor = 'rgba(192,156,49,0.5)'; }}
                    onMouseOut={(e)  => { e.currentTarget.style.background = 'rgba(192,156,49,0.1)'; e.currentTarget.style.borderColor = 'rgba(192,156,49,0.25)'; }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SERVICE SECTIONS
          Even index (0,2…) = solid green card  (#174D3A)
          Odd  index (1,3…) = transparent card  (glass border only)
          This alternates the entire outer card background, separate from
          the inner InfoCard gold/transparent alternation.
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          SERVICE SECTIONS
          Even index (0,2…) = solid green contained card on dark page bg.
          Odd  index (1,3…) = no card shell — content floats over a fixed
          parallax background image (background-attachment: fixed).
      ══════════════════════════════════════════════════════════════════════ */}
      {services.map((svc, i) => {
        const isGreenCard = i % 2 === 0;
        return (
          <Wrap
            key={svc.id}
            pb={true}
            parallax={!isGreenCard}
            parallaxImage={!isGreenCard ? HomeImage : null}
          >
            <Card
              style={{ animationDelay: `${i * 0.08}s` }}
              cardStyle={{
                /* Green card: normal contained card with solid bg */
                /* Parallax card: invisible shell — content sits directly on the image */
                background:   isGreenCard ? G.dark : 'transparent',
                border:       isGreenCard ? '1px solid rgba(192,156,49,0.18)' : 'none',
                borderRadius: isGreenCard ? '20px' : '0',
                overflow:     isGreenCard ? 'hidden' : 'visible',
                boxShadow:    'none',
              }}
            >
              <ServiceLayout
                id={svc.id}
                eyebrow="Overview"
                heading={svc.heading}
                tagline={svc.tagline}
                body={svc.body}
                ctaLabel={svc.ctaLabel}
                ctaOnClick={goContact}
                image={svc.image}
                flip={svc.flip}
                variant={svc.variant}
                card1Title={svc.card1Title}
                card1Content={svc.card1Content}
                card2Title={svc.card2Title}
                card2Content={svc.card2Content}
              />
            </Card>
          </Wrap>
        );
      })}

      {/* ══════════════════════════════════════════════════════════════════════
          WHY CHOOSE US — contained card with image background layer
      ══════════════════════════════════════════════════════════════════════ */}
      <Wrap pb={true}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(192,156,49,0.18)',
            position: 'relative',
          }}
        >
          {/* Background image layer — very faint */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${missionImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${G.dark} 40%, rgba(23,77,58,0.94) 100%)` }} />

          <div style={{ position: 'relative', zIndex: 1, padding: '60px 52px' }} className="why-inner">
            {/* Header */}
            <div style={{ marginBottom: '44px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <Eyebrow>Why Work With Us</Eyebrow>
                <h2 style={{ fontFamily: G.serif, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: G.cream, margin: 0 }}>
                  Our <em style={{ color: G.gold, fontStyle: 'italic' }}>Difference</em>
                </h2>
              </div>
              <p style={{ fontFamily: G.serif, fontSize: '14px', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', maxWidth: '360px', margin: 0, lineHeight: 1.7 }}>
                "Whether you are entering Namibia, managing a project workforce or strengthening HR governance — Katelago can help."
              </p>
            </div>

            {/* 2×2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '44px' }} className="why-grid">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(192,156,49,0.15)',
                    borderRadius: '14px',
                    padding: '28px 24px',
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(192,156,49,0.38)'}
                  onMouseOut={(e)  => e.currentTarget.style.borderColor = 'rgba(192,156,49,0.15)'}
                >
                  {/* Icon circle */}
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(192,156,49,0.12)', border: '1px solid rgba(192,156,49,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" fill={G.gold} viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ fontFamily: G.sans, fontSize: '14px', fontWeight: 500, color: G.cream, marginBottom: '8px' }}>{item.title}</h5>
                    <p style={{ fontFamily: G.sans, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing CTA */}
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(192,156,49,0.12)', paddingTop: '40px' }}>
              <h3 style={{ fontFamily: G.serif, fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, color: G.cream, marginBottom: '12px' }}>
                Need a more structured approach to{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>workforce compliance?</em>
              </h3>
              <p style={{ fontFamily: G.sans, fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
                Whether you are entering Namibia, managing a project workforce, improving payroll controls or strengthening HR governance, Katelago can help.
              </p>
              <CtaBtn onClick={goContact}>Book a Consultation →</CtaBtn>
            </div>
          </div>
        </div>
      </Wrap>

      {/* ── LOADER ────────────────────────────────────────────────────────── */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={logoImage} alt="Katelago" style={{ height: '80px', marginBottom: '16px', animation: 'svPulse 1.5s ease-in-out infinite' }} />
            <div className="spinner-border" style={{ color: G.accent }} role="status"><span className="visually-hidden">Loading…</span></div>
          </div>
        </div>
      )}

      {/* ── BACK TO TOP ───────────────────────────────────────────────────── */}
      {showBackToTop && (
        <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: G.gold, border: 'none', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(192,156,49,0.35)', transition: 'transform 0.3s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="18" height="18" fill="white" viewBox="0 0 16 16"><path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/></svg>
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes svFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes svPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }

        /* ── SERVICE CARD INNER LAYOUT ──────────────────────────────────────
           .svc-layout   — outer padding
           .svc-grid     — two-column desktop grid
           .svc-flip     — reverses column order on desktop
           .svc-copy     — text column
           .svc-media    — photo + cards column
           .svc-cards    — two feature cards side by side
        ──────────────────────────────────────────────────────────────────── */

        .svc-layout {
          padding: 60px 52px;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
        }

        /* Desktop flip: media left, copy right */
        .svc-flip .svc-copy  { order: 2; }
        .svc-flip .svc-media { order: 1; }

        /* Feature cards: two columns on desktop */
        .svc-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .svc-media {
          display: flex;
          flex-direction: column;
        }

        /* ── WHY GRID ──────────────────────────────────────────────────────── */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 44px;
        }

        /* ── TABLET (≤900px) ─────────────────────────────────────────────────
           Main two-column grid → single column.
           Copy always appears first, media below.
           Feature cards inside each service → single column.
        ──────────────────────────────────────────────────────────────────── */
        @media (max-width: 900px) {
          .svc-grid {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }

          /* Always show copy first regardless of flip */
          .svc-copy  { order: 1 !important; }
          .svc-media { order: 2 !important; }

          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* ── MOBILE (≤600px) ─────────────────────────────────────────────────
           Feature cards also collapse to single column.
           Card padding tightens up.
        ──────────────────────────────────────────────────────────────────── */
        @media (max-width: 600px) {
          .svc-layout {
            padding: 28px 16px !important;
          }

          .svc-cards {
            grid-template-columns: 1fr !important;
          }

          /* Why section padding */
          .why-inner {
            padding: 28px 16px !important;
          }
        }

        @media (max-width: 768px) {
          section { background-attachment: scroll !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;