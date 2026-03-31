import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/Main-logo.png';

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Kept in sync with G tokens used across all other components.
────────────────────────────────────────────────────────────────────────── */
const G = {
  dark:  '#174D3A',
  gold:  '#C09C31',
  sans:  "'DM Sans', 'Segoe UI', sans-serif",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  /* ── SCROLL DETECTION ───────────────────────────────────────────────────
     Triggers a slightly more opaque navbar background once user scrolls.
  ──────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* ── NAV ITEMS ──────────────────────────────────────────────────────────
     Defined as data — add/remove items here, JSX stays clean.
     type: 'link'     = simple <Link>
     type: 'dropdown' = has a children[] array
  ──────────────────────────────────────────────────────────────────────── */
  const navItems = [
    { label: 'Home',       to: '/',        type: 'link' },
    // {
    //   label: 'About',
    //   type: 'dropdown',
    //   children: [{ label: 'About Us', to: '#/about' }],
    // },
    { label: 'About', to: '/#about', type: 'link' },
    { label: 'Services', to: '/services', type: 'link' }, 
    { label: 'Blogs', to: '/blogs', type: 'link' },    
    { label: 'Vacancies', to: '/careers', type: 'link' },    
    // {
    //   label: 'Vacancies',
    //   type: 'dropdown',
    //   children: [{ label: 'Recent Vacancies', to: '/careers' }],
    // },
    { label: 'Contact Us', to: '/contact', type: 'link' },
  ];

  /* ── TOP BAR SOCIAL LINKS ───────────────────────────────────────────── */
  const socials = [
    { href: 'https://www.facebook.com/profile.php?id=61556197468363', icon: 'bi-facebook' },
    { href: 'https://www.instagram.com/katelagohr/?hl=en',            icon: 'bi-instagram' },
    { href: 'https://www.linkedin.com/company/katelago-human-resources-consultants/?viewAsMember=true', icon: 'bi-linkedin' },
  ];

  return (
    <>
      {/* ── TOP CONTACT BAR ─────────────────────────────────────────────────
          Slim brand-colour strip visible on desktop only.
          Shows email, phone, and social icons.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="d-none d-md-block"
        style={{
          backgroundColor: G.dark,
          borderBottom: '1px solid rgba(192,156,49,0.15)',
          padding: '8px 0',
        }}
      >
        <div className="container-fluid px-4">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            {/* Left: contact details */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {[
                { icon: 'bi-envelope', text: 'info@katelago.com' },
                { icon: 'bi-telephone', text: '+264 81 393 44 31' },
              ].map((item) => (
                <span
                  key={item.text}
                  style={{
                    fontFamily: G.sans,
                    fontSize: '12px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <i className={`bi ${item.icon}`} style={{ color: G.gold, fontSize: '11px' }} />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Right: social icons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = G.gold}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ─────────────────────────────────────────────────────
          Sticky, frosted-glass. Background opacity increases on scroll.
          isScrolled drives the background alpha change.
      ──────────────────────────────────────────────────────────────────── */}
      <nav
        className="navbar navbar-expand-lg position-sticky top-0"
        style={{
          zIndex: 9999,
          padding: '10px 0',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: isScrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.82)',
          borderBottom: isScrolled
            ? '1px solid rgba(23,77,58,0.12)'
            : '1px solid transparent',
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <div className="container-fluid px-4 px-lg-5">

          {/* ── LOGO ──────────────────────────────────────────────────────
              Links to home. Height kept consistent at 50px.
          ────────────────────────────────────────────────────────────── */}
          <a className="navbar-brand" href="/" style={{ marginRight: '2.5rem' }}>
            <img
              src={mainLogo}
              alt="Katelago HR Consultants"
              style={{ height: '50px', width: 'auto' }}
            />
          </a>

          {/* ── MOBILE TOGGLE ─────────────────────────────────────────────
              Bootstrap collapse trigger for screens < lg.
          ────────────────────────────────────────────────────────────── */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ padding: '0.4rem', outline: 'none' }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ── COLLAPSE MENU ─────────────────────────────────────────────
              Nav links centred in the middle, CTA pinned to the right.
          ────────────────────────────────────────────────────────────── */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Spacer so links sit in the true centre between logo and CTA */}
            <ul className="navbar-nav mx-auto" style={{ gap: '0.25rem' }}>
              {navItems.map((item) =>
                item.type === 'link' ? (
                  /* Simple nav link */
                  <li key={item.label} className="nav-item">
                    <Link
                      className="nav-link"
                      to={item.to}
                      style={{
                        fontFamily: G.sans,
                        fontSize: '13px',
                        fontWeight: 500,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: '#2a2a2a',
                        padding: '8px 14px',
                        borderRadius: '6px',
                        transition: 'color 0.2s ease, background 0.2s ease',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = G.dark; e.currentTarget.style.background = 'rgba(23,77,58,0.06)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = '#2a2a2a'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  /* Dropdown nav item */
                  <li key={item.label} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        fontFamily: G.sans,
                        fontSize: '13px',
                        fontWeight: 500,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: '#2a2a2a',
                        padding: '8px 14px',
                        borderRadius: '6px',
                        transition: 'color 0.2s ease, background 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = G.dark; e.currentTarget.style.background = 'rgba(23,77,58,0.06)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = '#2a2a2a'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      {item.label}
                    </a>

                    {/* ── DROPDOWN MENU ─────────────────────────────────
                        Clean white card with subtle shadow.
                        Rounded corners, no default Bootstrap border.
                    ──────────────────────────────────────────────────── */}
                    <ul
                      className="dropdown-menu"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(23,77,58,0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        marginTop: '6px',
                        padding: '8px',
                        minWidth: '180px',
                      }}
                    >
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            className="dropdown-item"
                            to={child.to}
                            style={{
                              fontFamily: G.sans,
                              fontSize: '13px',
                              fontWeight: 400,
                              color: '#333',
                              borderRadius: '8px',
                              padding: '9px 14px',
                              transition: 'background 0.2s ease, color 0.2s ease',
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(23,77,58,0.07)'; e.currentTarget.style.color = G.dark; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#333'; }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>

            {/* ── CTA BUTTON ──────────────────────────────────────────────
                Gold pill — consistent with hero and section CTAs.
                Stands out against the white navbar.
            ────────────────────────────────────────────────────────────── */}
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: G.gold,
                color: G.dark,
                fontFamily: G.sans,
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 12px rgba(192,156,49,0.25)',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(192,156,49,0.35)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(192,156,49,0.25)'; }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        /* Hide Bootstrap's default dropdown caret */
        .dropdown-toggle::after { display: none; }

        /* Tighten mobile menu spacing */
        @media (max-width: 991px) {
          .navbar-nav { margin: 1rem 0; gap: 0 !important; }
          .nav-link   { padding: 10px 8px !important; }
          .dropdown-menu { box-shadow: none !important; border: none !important; background: rgba(23,77,58,0.04) !important; margin-top: 0 !important; }
        }
      `}</style>
    </>
  );
};

export default Header;