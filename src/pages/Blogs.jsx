import React, { useState, useEffect, useRef } from 'react';
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

/* ════════════════════════════════════════════════════════════════════════════
   BLOG PAGE
════════════════════════════════════════════════════════════════════════════ */
/* ── EMPTY STATE — shown while Soro loads or if no posts exist ────────────── */
const EmptyState = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    textAlign: 'center',
  }}>
    {/* Decorative icon */}
    <div style={{
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      border: `1.5px solid rgba(192,156,49,0.3)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '28px',
      background: 'rgba(192,156,49,0.06)',
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C09C31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    </div>

    <p style={{
      fontFamily: G.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: G.gold,
      opacity: 0.75,
      margin: '0 0 12px',
    }}>
      Coming Soon
    </p>

    <h3 style={{
      fontFamily: G.serif,
      fontSize: '1.5rem',
      fontWeight: 400,
      color: G.cream,
      margin: '0 0 14px',
      lineHeight: 1.3,
    }}>
      Articles are on their <em style={{ color: G.gold, fontStyle: 'italic' }}>way</em>
    </h3>

    <p style={{
      fontFamily: G.sans,
      fontSize: '14px',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.45)',
      maxWidth: '380px',
      lineHeight: 1.75,
      margin: 0,
    }}>
      Our team is preparing expert insights on HR, talent, and the world of work. Check back soon.
    </p>

    {/* Skeleton post previews */}
    <div style={{ display: 'flex', gap: '20px', marginTop: '52px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '860px' }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          flex: '1 1 240px',
          maxWidth: '280px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '12px',
          border: '1px solid rgba(192,156,49,0.1)',
          overflow: 'hidden',
          opacity: 1 - i * 0.2,
        }}>
          {/* Thumbnail skeleton */}
          <div style={{ height: '140px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(192,156,49,0.06) 50%, transparent 100%)',
              animation: 'blSkeleton 1.6s ease-in-out infinite',
            }} />
          </div>
          {/* Text skeletons */}
          <div style={{ padding: '18px 20px 22px' }}>
            <div style={{ height: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.07)', marginBottom: '10px', width: '60%' }} />
            <div style={{ height: '14px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', marginBottom: '8px' }} />
            <div style={{ height: '14px', borderRadius: '6px', background: 'rgba(255,255,255,0.07)', width: '75%' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════════════════
   BLOG PAGE
════════════════════════════════════════════════════════════════════════════ */
const Blog = () => {
  const [isLoading, setIsLoading]         = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [soroLoaded, setSoroLoaded]       = useState(false);
  const soroInjected                      = useRef(false);

  /* ── page-level loader (1 s) */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* ── inject Soro embed script once on mount */
  useEffect(() => {
    if (soroInjected.current) return;
    soroInjected.current = true;

    const container = document.getElementById('soro-blog');
    if (!container) return;

    /* Read ?post= from the current URL so Soro can deep-link into a post */
    const p = new URLSearchParams(window.location.search);
    let src = 'https://app.trysoro.com/api/embed/71a33da3-d09a-41fe-9227-c0cba626469f';
    if (p.get('post')) src += '?post=' + encodeURIComponent(p.get('post'));

    const s = document.createElement('script');
    s.src = src;
    s.setAttribute('data-soro', 'true');
    /* Mark as loaded once script executes — hides empty state */
    s.onload = () => setSoroLoaded(true);
    s.onerror = () => setSoroLoaded(false);
    container.appendChild(s);

    /* Fallback: if Soro injects content within 4 s, consider it loaded */
    const fallback = setTimeout(() => {
      if (container.children.length > 1) setSoroLoaded(true);
    }, 4000);
    return () => clearTimeout(fallback);
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
          Blurred photo background — identical treatment to Careers / Contact.
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
        {/* ── Blurred background photo */}
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

        {/* ── Gradient overlay */}
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

        {/* ── Diagonal gold pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)',
          }}
        />

        {/* ── Corner accents */}
        <div style={{ position: 'absolute', top: '28px', right: '36px', width: '50px', height: '50px', borderTop: '1.5px solid rgba(192,156,49,0.3)', borderRight: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 8px 0 0' }} />
        <div style={{ position: 'absolute', bottom: '44px', left: '36px', width: '50px', height: '50px', borderBottom: '1.5px solid rgba(192,156,49,0.3)', borderLeft: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 0 0 8px' }} />

        {/* ── Hero text */}
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px 60px' }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">

              {/* Eyebrow with flanking rules */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px', animation: 'blFadeUp 0.7s ease both' }}>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
                <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold }}>
                  Insights &amp; Updates
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
                  animation: 'blFadeUp 0.7s 0.12s ease both',
                  opacity: 0,
                }}
              >
                Our{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>Blog</em>{' '}
                &amp; Articles
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
                  animation: 'blFadeUp 0.7s 0.22s ease both',
                  opacity: 0,
                }}
              >
                Expert perspectives on HR, talent acquisition, and the evolving world of work in Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SORO BLOG EMBED CARD
          Mirrors the Manatal iframe card in Careers.jsx exactly — same card
          structure, header treatment, and border radius.
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
            animation: 'blFadeUp 0.65s 0.15s ease both',
          }}
        >
          {/* ── Card header */}
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
                Latest Articles
              </p>
              <h2 style={{ fontFamily: G.serif, fontSize: '1.6rem', fontWeight: 400, color: G.cream, margin: 0 }}>
                Knowledge &amp;{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>Perspectives</em>
              </h2>
            </div>

            {/* Subtle badge — mirrors "Powered by Manatal" in Careers */}
            <span style={{ fontFamily: G.sans, fontSize: '11px', color: 'rgba(255,255,255,0.22)', fontWeight: 300 }}>
              Powered by Soro
            </span>
          </div>

          {/* ── Soro embed mount point + empty state ───────────────────────
              The <EmptyState> is shown until Soro's script fires onload.
              The soro-blog div is always in the DOM so the script can mount
              into it; we just overlay the empty state on top until ready.
          ──────────────────────────────────────────────────────────────────── */}
          <div style={{ position: 'relative', minHeight: '600px' }}>
            {/* Empty / loading state — hidden once Soro confirms load */}
            {!soroLoaded && <EmptyState />}

            {/* Soro injects its widget markup into this div */}
            <div
              id="soro-blog"
              style={{
                padding: soroLoaded ? '32px 40px 40px' : '0',
                minHeight: soroLoaded ? '600px' : '0',
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CALL-TO-ACTION STRIP  — same gold-tinted pattern as Careers.jsx
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: G.deep, padding: '0 24px 60px' }}>
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
              Stay Informed
            </p>
            <h3 style={{ fontFamily: G.serif, fontSize: '1.4rem', fontWeight: 400, color: G.cream, margin: 0 }}>
              Want to discuss{' '}
              <em style={{ color: G.gold, fontStyle: 'italic' }}>your hiring strategy?</em>
            </h3>
            <p style={{ fontFamily: G.sans, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: '8px 0 0', lineHeight: 1.65 }}>
              Our consultants are ready to translate insights into action for your organisation.
            </p>
          </div>

          <a
            href="/contact"
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
            Get in Touch →
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes blSkeleton {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          [style*="padding: 36px 48px"] { padding: 24px 24px !important; }
          [style*="padding: 40px 48px"] { padding: 28px 24px !important; }
          #soro-blog { padding: 24px 20px 32px !important; }
        }

        @media (max-width: 768px) {
          section { background-attachment: scroll !important; }
        }
      `}</style>
    </div>
  );
};

export default Blog;