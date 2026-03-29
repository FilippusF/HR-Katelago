import React from 'react';
import HomeImage from '../assets/images/mission.jpg';

const Hero = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0a2419', /* fallback colour while image loads */
      }}
    >

      {/* ── BACKGROUND IMAGE ────────────────────────────────────────────────
          Isolated in its own div so filter:blur doesn't affect any content.
          inset: -8px compensates for the blur edge bleed (prevents white edges).
          opacity: 0.55  — how much of the photo shows through
          filter: blur(4px) — softness; raise to 6–8px for more frosted effect
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: '-8px',
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.55,
          filter: 'blur(4px)',
        }}
      />

      {/* ── GRADIENT OVERLAY (barely-there, ~3–8% darkness) ────────────────
          Top and middle: almost invisible — lets the blurred photo breathe.
          Lower third: ramps up so text stays readable and bleeds into the
          next section's #0e3327 background seamlessly.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(10,36,25,0.08)  0%,
              rgba(10,36,25,0.12)  55%,
              rgba(14,51,39,0.92)  88%,
              rgba(14,51,39,1.00)  100%
            )
          `,
        }}
      />

      {/* ── DIAGONAL GOLD PATTERN (subtle tactile texture) ──────────────────
          Very faint repeating lines — only visible up close.
          Pure decoration; keep opacity at 0.03 or lower.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)',
        }}
      />

      {/* ── CORNER ACCENT — top right ───────────────────────────────────────
          Gold L-shaped border — decorative framing device.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          right: '40px',
          width: '60px',
          height: '60px',
          borderTop: '1.5px solid rgba(192,156,49,0.35)',
          borderRight: '1.5px solid rgba(192,156,49,0.35)',
          borderRadius: '0 10px 0 0',
        }}
      />

      {/* ── CORNER ACCENT — bottom left ─────────────────────────────────────
          Mirrors the top-right corner for visual balance.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '40px',
          width: '60px',
          height: '60px',
          borderBottom: '1.5px solid rgba(192,156,49,0.35)',
          borderLeft: '1.5px solid rgba(192,156,49,0.35)',
          borderRadius: '0 0 0 10px',
        }}
      />

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────
          zIndex: 2 keeps everything above the background layers.
          All direct children use staggered hFadeUp animation delays.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 2, padding: '80px 24px' }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8 text-center">

            {/* ── EYEBROW — brand + location identifier ───────────────────
                Uppercase micro-text flanked by short gold rules.
                First element to animate in (no delay).
            ────────────────────────────────────────────────────────────── */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '32px',
                animation: 'hFadeUp 0.7s ease both',
              }}
            >
              <div style={{ width: '28px', height: '1px', background: '#C09C31', opacity: 0.7 }} />
              <span
                style={{
                  fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#C09C31',
                  opacity: 0.9,
                }}
              >
                Katelago HR Consultants · Namibia
              </span>
              <div style={{ width: '28px', height: '1px', background: '#C09C31', opacity: 0.7 }} />
            </div>

            {/* ── MAIN HEADING — primary message ──────────────────────────
                Georgia serif for authority. Gold italic em on the USP phrase.
                Delay: 0.12s
            ────────────────────────────────────────────────────────────── */}
            <h1
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#f5f0e4',
                marginBottom: '24px',
                animation: 'hFadeUp 0.7s 0.12s ease both',
                opacity: 0,
              }}
            >
              Strategic Workforce Partner{' '}
              <br />
              <em style={{ color: '#C09C31', fontStyle: 'italic' }}>
                for Regulated &amp; Project-Based
              </em>{' '}
              Operations
            </h1>

            {/* ── DECORATIVE DIVIDER — heading / tagline separator ─────────
                Two short gold rules and a dot. Visual breathing space.
                Delay: 0.22s
            ────────────────────────────────────────────────────────────── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '28px',
                animation: 'hFadeUp 0.7s 0.22s ease both',
                opacity: 0,
              }}
            >
              <div style={{ width: '40px', height: '1px', background: 'rgba(192,156,49,0.4)' }} />
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C09C31', opacity: 0.6 }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(192,156,49,0.4)' }} />
            </div>

            {/* ── TAGLINE — brand ethos ────────────────────────────────────
                Italic serif, intentionally understated.
                Delay: 0.30s
            ────────────────────────────────────────────────────────────── */}
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.3px',
                marginBottom: '48px',
                animation: 'hFadeUp 0.7s 0.3s ease both',
                opacity: 0,
              }}
            >
              Bold. Dynamic. Human.
            </p>

            {/* ── CTA BUTTONS ─────────────────────────────────────────────
                Primary (gold pill): main conversion action.
                Secondary (ghost outline): softer entry point.
                Delay: 0.40s
            ────────────────────────────────────────────────────────────── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '64px',
                animation: 'hFadeUp 0.7s 0.4s ease both',
                opacity: 0,
              }}
            >
              {/* Primary CTA — gold pill */}
              <a
                href="/Contact"
                style={{
                  display: 'inline-block',
                  padding: '14px 36px',
                  borderRadius: '50px',
                  backgroundColor: '#C09C31',
                  color: '#174D3A',
                  fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 24px rgba(192,156,49,0.25)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4aa38';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,156,49,0.35)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#C09C31';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(192,156,49,0.25)';
                }}
              >
                Book a Consultation →
              </a>

              {/* Secondary CTA — ghost outline */}
              <a
                href="#about"
                style={{
                  display: 'inline-block',
                  padding: '13px 32px',
                  borderRadius: '50px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(192,156,49,0.4)';
                  e.currentTarget.style.color = '#C09C31';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                Our Services
              </a>
            </div>

            {/* ── STATS BAR — frosted-glass pill ──────────────────────────
                Three key credentials in a single frosted strip.
                null entries = thin vertical divider lines between stats.
                Delay: 0.50s — last element, lets everything settle first.
            ────────────────────────────────────────────────────────────── */}
            <div
              style={{
                display: 'inline-grid',
                gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
                gap: 0,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(192,156,49,0.15)',
                borderRadius: '14px',
                padding: '20px 40px',
                animation: 'hFadeUp 0.7s 0.5s ease both',
                opacity: 0,
              }}
            >
              {[
                { val: 'LOCAL',  label: 'Local Content' },
                null, /* divider */
                { val: '100%', label: 'Labour Compliant' },
                null, /* divider */
                { val: 'SADC',  label: 'SADC-Based' },
              ].map((item, i) =>
                item === null ? (
                  /* Vertical divider between stats */
                  <div key={i} style={{ background: 'rgba(255,255,255,0.1)', margin: '4px 24px' }} />
                ) : (
                  /* Stat block: large value + small label */
                  <div key={i} style={{ textAlign: 'center', padding: '0 12px' }}>
                    <p
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#C09C31',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {item.val}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)',
                        margin: 0,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                )
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────────────────────
          Gently bouncing arrow at bottom-centre.
          Draws the eye downward without competing with the CTAs.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 2,
          animation: 'hBounce 2.5s ease infinite',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          Scroll
        </span>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="rgba(192,156,49,0.5)" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        /* Entrance animation — elements fade up from 20px below */
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Scroll indicator bounce — subtle and slow */
        @keyframes hBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }

        /* Disable fixed background-attachment on mobile (iOS scroll jank) */
        @media (max-width: 768px) {
          section { background-attachment: scroll !important; }
        }

        /* Stack stats bar to single column on very small screens */
        @media (max-width: 576px) {
          [style*="inline-grid"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;