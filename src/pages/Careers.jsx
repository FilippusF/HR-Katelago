import React, { useState, useEffect } from 'react';
import StationImage4 from '../assets/images/13.jpg'; /* hero background — same image used across page heroes */

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Mirrors every other component on the site.
────────────────────────────────────────────────────────────────────────── */
const G = {
  deep:   '#0e3327',
  dark:   '#174D3A',
  accent: '#1e5631',
  gold:   '#C09C31',
  cream:  '#f5f0e4',
  serif:  "'Georgia', 'Times New Roman', serif",
  sans:   "'DM Sans', 'Segoe UI', sans-serif",
};

/* ── MANATAL API SERVICE ─────────────────────────────────────────────────────
   Reads API key and base URL from Vite env vars.
   getJobs()         — fetches open positions
   submitApplication() — posts a candidate + resume to Manatal ATS
────────────────────────────────────────────────────────────────────────── */
const API_KEY  = import.meta.env.VITE_MANATAL_API_KEY;
const BASE_URL = import.meta.env.VITE_MANATAL_BASE_URL || 'https://api.manatal.com/v3';

class ManatalService {
  async getJobs() {
    try {
      const res = await fetch(`${BASE_URL}/jobs/`, {
        headers: { 'Authorization': `Token ${API_KEY}`, 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to fetch jobs');
      return await res.json();
    } catch (err) {
      console.error('ManatalService.getJobs:', err);
      return { results: [] };
    }
  }

  async submitApplication(data) {
    const fd = new FormData();
    fd.append('first_name',   data.firstName);
    fd.append('last_name',    data.lastName);
    fd.append('email',        data.email);
    fd.append('phone',        data.phone || '');
    fd.append('cover_letter', data.message || '');
    if (data.jobId)  fd.append('job',    data.jobId);
    if (data.resume) fd.append('resume', data.resume);

    const res = await fetch(`${BASE_URL}/candidates/`, {
      method: 'POST',
      headers: { 'Authorization': `Token ${API_KEY}` },
      body: fd,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to submit application');
    }
    return await res.json();
  }
}

const manatal = new ManatalService();

/* ════════════════════════════════════════════════════════════════════════════
   CAREERS PAGE
════════════════════════════════════════════════════════════════════════════ */
const Careers = () => {
  const [isLoading, setIsLoading]         = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── page-level loader (1 s) */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* ── back-to-top visibility */
  useEffect(() => {
    const fn = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: G.deep }}>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
          Blurred photo background — same treatment as Contact and Services.
          Bottom gradient bleeds into the page background.
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '52vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: G.deep,
        }}
      >
        {/* ── Blurred background photo ──────────────────────────────────────
            inset: -8px prevents white blur edges.
            opacity + blur: image is visible but softened so text reads clearly.
        ──────────────────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: '-8px',
            backgroundImage: `url(${StationImage4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            filter: 'blur(4px)',
          }}
        />

        {/* ── Gradient overlay (light at top, solid at bottom for bleed) ───── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              to bottom,
              rgba(10,36,25,0.08)  0%,
              rgba(10,36,25,0.15)  52%,
              rgba(14,51,39,0.95)  88%,
              rgba(14,51,39,1.00)  100%
            )`,
          }}
        />

        {/* ── Diagonal gold pattern (very faint decorative texture) ─────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)',
          }}
        />

        {/* ── Corner accents ────────────────────────────────────────────────── */}
        <div style={{ position: 'absolute', top: '28px', right: '36px', width: '50px', height: '50px', borderTop: '1.5px solid rgba(192,156,49,0.3)', borderRight: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 8px 0 0' }} />
        <div style={{ position: 'absolute', bottom: '44px', left: '36px', width: '50px', height: '50px', borderBottom: '1.5px solid rgba(192,156,49,0.3)', borderLeft: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 0 0 8px' }} />

        {/* ── Hero text ─────────────────────────────────────────────────────── */}
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px 60px' }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">

              {/* Eyebrow with flanking rules */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px', animation: 'crFadeUp 0.7s ease both' }}>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
                <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold }}>
                  Careers at Katelago
                </span>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
              </div>

              <h1
                style={{
                  fontFamily: G.serif,
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 400,
                  color: G.cream,
                  lineHeight: 1.2,
                  marginBottom: '20px',
                  animation: 'crFadeUp 0.7s 0.12s ease both',
                  opacity: 0,
                }}
              >
                Explore{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>Career</em>{' '}
                Opportunities
              </h1>

              <p
                style={{
                  fontFamily: G.sans,
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                  maxWidth: '560px',
                  margin: '0 auto',
                  animation: 'crFadeUp 0.7s 0.22s ease both',
                  opacity: 0,
                }}
              >
                Discover open positions across leading organisations partnered with Katelago HR Consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CAREERS IFRAME CARD
          The Manatal career-page portal embedded in a contained card.
          The iframe handles all job listing and application UI.
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: G.deep, padding: '0 24px 40px' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            background: G.dark,
            borderRadius: '20px',
            border: '1px solid rgba(192,156,49,0.18)',
            overflow: 'hidden',
            animation: 'crFadeUp 0.65s 0.15s ease both',
          }}
        >
          {/* ── Card header ─────────────────────────────────────────────────
              Eyebrow + title sits above the iframe for context and branding.
          ──────────────────────────────────────────────────────────────────── */}
          <div
            style={{
              padding: '36px 48px 28px',
              borderBottom: '1px solid rgba(192,156,49,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <p style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, margin: '0 0 6px' }}>
                Open Positions
              </p>
              <h2 style={{ fontFamily: G.serif, fontSize: '1.6rem', fontWeight: 400, color: G.cream, margin: 0 }}>
                Available <em style={{ color: G.gold, fontStyle: 'italic' }}>Vacancies</em>
              </h2>
            </div>

            {/* Subtle "Powered by Manatal" badge */}
            <span style={{ fontFamily: G.sans, fontSize: '11px', color: 'rgba(255,255,255,0.22)', fontWeight: 300 }}>
              Powered by Manatal
            </span>
          </div>

          {/* ── Manatal careers iframe ──────────────────────────────────────
              Loads the full Manatal career portal.
              overflow: hidden on the parent clips it to the card corners.
              height: 80vh gives ample space without requiring the user to
              navigate away — they can scroll inside the iframe.
          ──────────────────────────────────────────────────────────────────── */}
          <iframe
            src="https://katelago-hr-consultants.careers-page.com/"
            style={{
              width: '100%',
              height: '80vh',
              minHeight: '600px',
              border: 'none',
              display: 'block',
            }}
            title="Katelago HR Consultants — Career Opportunities"
            scrolling="yes"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CALL-TO-ACTION STRIP
          Encourages direct contact if no suitable vacancy is listed.
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: G.deep, padding: '0 24px 40px' }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: 'rgba(192,156,49,0.07)',
            borderRadius: '16px',
            border: '1px solid rgba(192,156,49,0.18)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <p style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, margin: '0 0 8px' }}>
              Don't See a Match?
            </p>
            <h3 style={{ fontFamily: G.serif, fontSize: '1.4rem', fontWeight: 400, color: G.cream, margin: 0 }}>
              Send us a{' '}
              <em style={{ color: G.gold, fontStyle: 'italic' }}>speculative application</em>
            </h3>
            <p style={{ fontFamily: G.sans, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: '8px 0 0', lineHeight: 1.65 }}>
              We keep CVs on file and reach out when the right opportunity opens up.
            </p>
          </div>

          <a
            href="mailto:careers@katelago.com?subject=Speculative Application"
            style={{
              display: 'inline-block',
              padding: '13px 32px',
              borderRadius: '50px',
              backgroundColor: G.gold,
              color: G.dark,
              fontFamily: G.sans,
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(192,156,49,0.2)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,156,49,0.32)'; }}
            onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,156,49,0.2)'; }}
          >
            Email Your CV →
          </a>
        </div>
      </section>

      {/* ── LOADER ────────────────────────────────────────────────────────── */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="spinner-border" style={{ color: G.accent }} role="status">
            <span className="visually-hidden">Loading…</span>
          </div>
        </div>
      )}

      {/* ── BACK TO TOP ───────────────────────────────────────────────────── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '30px', right: '30px', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: G.gold, border: 'none', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(192,156,49,0.35)', transition: 'transform 0.3s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e)  => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="18" height="18" fill="white" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        /* Entrance animation — elements fade up from below */
        @keyframes crFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Tighten card padding on small screens */
        @media (max-width: 600px) {
          [style*="padding: 36px 48px"] { padding: 24px 24px !important; }
          [style*="padding: 40px 48px"] { padding: 28px 24px !important; }
        }

        /* Disable fixed background-attachment on mobile */
        @media (max-width: 768px) {
          section { background-attachment: scroll !important; }
        }
      `}</style>
    </div>
  );
};

export default Careers;