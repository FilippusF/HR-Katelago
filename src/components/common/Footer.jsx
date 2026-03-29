import React from 'react';
import mainLogo from '../../assets/images/Main-logo.png';
import Logo from '../../assets/images/Logo2.png';

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Shared across all components for visual consistency.
   deep   = outermost page background
   dark   = card / section surface
   gold   = primary brand accent
   cream  = primary light text
────────────────────────────────────────────────────────────────────────── */
const G = {
  deep:  '#0e3327',
  dark:  '#174D3A',
  gold:  '#C09C31',
  cream: '#f5f0e4',
  serif: "'Georgia', 'Times New Roman', serif",
  sans:  "'DM Sans', 'Segoe UI', sans-serif",
};

const Footer = () => {
  /* ── NAV GROUPS ───────────────────────────────────────────────────────────
     Defined as data so the JSX stays clean and links are easy to update.
  ──────────────────────────────────────────────────────────────────────── */
  const quickLinks = [
    { label: 'Home',        href: '/' },
    { label: 'About Us',    href: '/About' },
    { label: 'Our Services',href: '/Services' },
    { label: 'Contact Us',  href: '/Contact' },
  ];

  const services = [
    { label: 'Oil & Gas Workforce Solutions', href: '/Services#talent-acquisition' },
    { label: 'Employer of Record',            href: '/Services#employer-of-record' },
    { label: 'Payroll Governance',            href: '/Services#payroll-administration' },
    { label: 'Strategic HR Advisory',         href: '/Services#hr-consulting' },
  ];

  const socials = [
    {
      href: 'https://www.facebook.com/profile.php?id=61556197468363',
      /* Facebook brand blue */
      bg: '#4267B2',
      icon: (
        <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/katelagohr/?hl=en',
      /* Instagram gradient approximated as solid */
      bg: '#E4405F',
      icon: (
        <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/company/katelago-human-resources-consultants/?viewAsMember=true',
      bg: '#0077B5',
      icon: (
        <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      ),
    },
  ];

  return (
    /* ── OUTER WRAPPER ────────────────────────────────────────────────────
       Same deep green as the page background so the footer sits flush
       inside the contained-page aesthetic.
    ──────────────────────────────────────────────────────────────────── */
    <footer style={{ backgroundColor: G.deep, padding: '40px 24px 0' }}>

      {/* ── MAIN FOOTER CARD ──────────────────────────────────────────────
          Contained card — same rounded border treatment as every section.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          background: G.dark,
          borderRadius: '20px 20px 0 0',     /* flat bottom — bleeds into copyright strip */
          border: '1px solid rgba(192,156,49,0.18)',
          borderBottom: 'none',
          padding: '56px 52px 48px',
        }}
      >
        <div className="row g-5">

          {/* ── COL 1: LOGO + TAGLINE ──────────────────────────────────────
              Brand identity anchor. Logo + one-line mission statement.
          ────────────────────────────────────────────────────────────── */}
          <div className="col-lg-4 col-md-12">
            <img
              src={Logo}
              alt="Katelago HR"
              style={{ height: '72px', width: 'auto', marginBottom: '20px', display: 'block' }}
            />
            <p
              style={{
                fontFamily: G.sans,
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                marginBottom: '28px',
                maxWidth: '300px',
              }}
            >
              Shaping the future of work in Namibia. Structured workforce solutions that help organisations operate with confidence, reduce risk and stay aligned with Namibian labour requirements.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: s.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.25s ease, opacity 0.25s ease',
                    flexShrink: 0,
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.opacity = '0.85'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: QUICK LINKS ────────────────────────────────────────
              Primary site navigation — mirrors the header menu.
          ────────────────────────────────────────────────────────────── */}
          <div className="col-lg-2 col-md-4 col-6">
            <p
              style={{
                fontFamily: G.sans,
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: G.gold,
                marginBottom: '20px',
                opacity: 0.85,
              }}
            >
              Quick Links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: '12px' }}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: G.sans,
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = G.gold}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {/* Small arrow indicator */}
                    <span style={{ color: G.gold, opacity: 0.5, fontSize: '10px' }}>›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: HR SOLUTIONS ───────────────────────────────────────
              Service links — direct entry points to the services page.
          ────────────────────────────────────────────────────────────── */}
          <div className="col-lg-3 col-md-4 col-6">
            <p
              style={{
                fontFamily: G.sans,
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: G.gold,
                marginBottom: '20px',
                opacity: 0.85,
              }}
            >
              HR Solutions
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s.href} style={{ marginBottom: '12px' }}>
                  <a
                    href={s.href}
                    style={{
                      fontFamily: G.sans,
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = G.gold}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span style={{ color: G.gold, opacity: 0.5, fontSize: '10px' }}>›</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: CONTACT INFO ───────────────────────────────────────
              Physical address, hours, and direct contact for reassurance.
          ────────────────────────────────────────────────────────────── */}
          <div className="col-lg-3 col-md-4 col-12">
            <p
              style={{
                fontFamily: G.sans,
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: G.gold,
                marginBottom: '20px',
                opacity: 0.85,
              }}
            >
              Head Office
            </p>

            {[
              {
                icon: (
                  <svg width="14" height="14" fill={G.gold} viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                ),
                lines: ['44 Sigma Street,', 'Windhoek, Namibia'],
              },
              {
                icon: (
                  <svg width="14" height="14" fill={G.gold} viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.67a6.5 6.5 0 0 1-3.11-.931 6.5 6.5 0 0 1-.931-3.11l.239-1.804a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                  </svg>
                ),
                lines: ['+264 81 393 44 31'],
              },
              {
                icon: (
                  <svg width="14" height="14" fill={G.gold} viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                ),
                lines: ['info@katelago.com'],
              },
              {
                icon: (
                  <svg width="14" height="14" fill={G.gold} viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                ),
                lines: ['Mon – Fri  08:00 – 17:00'],
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  {item.lines.map((line, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: G.sans,
                        fontSize: '13px',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.6)',
                        margin: 0,
                        lineHeight: 1.65,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── COPYRIGHT STRIP ───────────────────────────────────────────────────
          Sits flush below the card, slightly darker for visual separation.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.25)',
          borderRadius: '0 0 20px 20px',
          border: '1px solid rgba(192,156,49,0.18)',
          borderTop: '1px solid rgba(192,156,49,0.1)',
          padding: '16px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '0',
        }}
      >
        <p
          style={{
            fontFamily: G.sans,
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
            margin: 0,
            fontWeight: 300,
          }}
        >
          © 2026 Katelago HR Consultants. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: G.sans,
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
            fontWeight: 300,
          }}
        >
          Made with ♥ by Loop Technologies
        </p>
      </div>

      {/* Bottom spacer so the copyright strip doesn't clip the page edge */}
      <div style={{ height: '40px', backgroundColor: G.deep }} />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;