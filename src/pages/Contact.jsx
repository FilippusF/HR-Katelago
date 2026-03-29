import React, { useState, useEffect } from 'react';
import StationImage5 from '../assets/images/14.png';
import logoImage from '../assets/images/Main-logo.png';

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Same tokens used across Hero, Home, Header, Footer.
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

/* ── SHARED INPUT STYLE ─────────────────────────────────────────────────────
   Applied to every form-control so they're consistent.
   Semi-transparent white surface on dark green background.
────────────────────────────────────────────────────────────────────────── */
const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(192,156,49,0.2)',
  borderRadius: '10px',
  padding: '12px 16px',
  color: G.cream,
  fontFamily: G.sans,
  fontSize: '14px',
  fontWeight: 300,
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.25s ease, background 0.25s ease',
};

/* ── LABEL STYLE ────────────────────────────────────────────────────────── */
const labelStyle = {
  fontFamily: G.sans,
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.55)',
  marginBottom: '8px',
  display: 'block',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    serviceRequired: '',
    hearAboutUs: '',
    message: '',
  });
  const [isLoading, setIsLoading]         = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitStatus, setSubmitStatus]   = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      /* Production API endpoint — swap comment for local dev */
      const apiUrl = 'https://qualis-email-server.vercel.app/api/custom-mails/katelago/quote-request';
      // const apiUrl = 'http://localhost:5001/api/custom-mails/katelago/quote-request';

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        alert('Your quotation request has been successfully submitted. We will get back to you soon!');
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', businessName: '', serviceRequired: '', hearAboutUs: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      alert('There was an error submitting your request. Please try again or email info@katelago.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── CONTACT DETAIL ITEMS ─────────────────────────────────────────────── */
  const details = [
    {
      label: 'Address',
      value: '44 Sigma Street, Windhoek, Namibia',
      icon: (
        <svg width="16" height="16" fill={G.gold} viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+264 81 393 44 31',
      icon: (
        <svg width="16" height="16" fill={G.gold} viewBox="0 0 16 16">
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.67a6.5 6.5 0 0 1-3.11-.931 6.5 6.5 0 0 1-.931-3.11l.239-1.804a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'info@katelago.com',
      icon: (
        <svg width="16" height="16" fill={G.gold} viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
      ),
    },
    {
      label: 'Hours',
      value: 'Monday – Friday  08:00 – 17:00',
      icon: (
        <svg width="16" height="16" fill={G.gold} viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: G.deep }}>

      {/* ── HERO SECTION ──────────────────────────────────────────────────────
          Full-bleed background with blurred photo + dark overlay.
          Bleeds into the page background (#0e3327) at the bottom.
      ──────────────────────────────────────────────────────────────────── */}
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
        {/* Blurred background photo */}
        <div
          style={{
            position: 'absolute',
            inset: '-8px',
            backgroundImage: `url(${StationImage5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.45,
            filter: 'blur(3px)',
          }}
        />

        {/* Gradient overlay — subtle top, heavy bottom for section bleed */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              to bottom,
              rgba(10,36,25,0.1)  0%,
              rgba(10,36,25,0.2)  50%,
              rgba(14,51,39,0.95) 88%,
              rgba(14,51,39,1)    100%
            )`,
          }}
        />

        {/* Diagonal pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'repeating-linear-gradient(45deg, #C09C31 0px, #C09C31 1px, transparent 1px, transparent 14px)',
          }}
        />

        {/* Corner accents */}
        <div style={{ position: 'absolute', top: '28px', right: '36px', width: '50px', height: '50px', borderTop: '1.5px solid rgba(192,156,49,0.3)', borderRight: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 8px 0 0' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: '36px', width: '50px', height: '50px', borderBottom: '1.5px solid rgba(192,156,49,0.3)', borderLeft: '1.5px solid rgba(192,156,49,0.3)', borderRadius: '0 0 0 8px' }} />

        {/* Hero text */}
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px 60px' }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '24px', height: '1px', background: G.gold, opacity: 0.7 }} />
                <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: G.gold }}>
                  Get in Touch
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
                  marginBottom: '16px',
                }}
              >
                Start the Right{' '}
                <em style={{ color: G.gold, fontStyle: 'italic' }}>Workforce</em>{' '}
                Conversation
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
                }}
              >
                Tell us what support you need, and we will help you find a practical, compliant and well-structured way forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + CONTACT DETAILS CARD ───────────────────────────────────────
          Contained card sits on the deep-green page background.
          Left: contact form. Right: details + social links.
      ──────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 24px 40px', backgroundColor: G.deep }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: G.dark,
            borderRadius: '20px',
            border: '1px solid rgba(192,156,49,0.18)',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px' }} className="contact-grid">

            {/* ── LEFT: FORM ──────────────────────────────────────────────
                All fields use a consistent semi-transparent input style.
                Labels are uppercase micro-text for refined hierarchy.
            ────────────────────────────────────────────────────────────── */}
            <div style={{ padding: '56px 52px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, display: 'block', marginBottom: '12px' }}>
                Send a Message
              </span>
              <h2 style={{ fontFamily: G.serif, fontSize: '1.8rem', fontWeight: 400, color: G.cream, marginBottom: '36px' }}>
                Get in <em style={{ color: G.gold, fontStyle: 'italic' }}>Touch</em>
              </h2>

              <form onSubmit={handleSubmit}>

                {/* First + Last name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle} htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="phoneNumber">Phone Number *</label>
                    <input id="phoneNumber" name="phoneNumber" type="tel" required value={formData.phoneNumber} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>
                </div>

                {/* Business name */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle} htmlFor="businessName">Business Name *</label>
                  <input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>

                {/* Service select */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle} htmlFor="serviceRequired">Service Required *</label>
                  <select id="serviceRequired" name="serviceRequired" required value={formData.serviceRequired} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = G.gold; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; }}
                  >
                    <option value="" style={{ background: G.dark }}>Select a service…</option>
                    {['Employee Training & Development','Performance Management','HR Policy Development','Compliance & Legal Support','Payroll Governance', 'Oil & Gas Workforce Solutions', 'Employer of Record', 'Recruitment', 'Pyschometric Assesment', 'Job Grading', '','Employee Relations','Organizational Development','Other']
                      .map((s) => <option key={s} value={s} style={{ background: G.dark }}>{s}</option>)}
                  </select>
                </div>

                {/* How did you hear */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle} htmlFor="hearAboutUs">How did you hear about us?</label>
                  <select id="hearAboutUs" name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = G.gold; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; }}
                  >
                    <option value="" style={{ background: G.dark }}>Select an option…</option>
                    {['Google Search','Social Media','Referral','Advertisement','Other']
                      .map((s) => <option key={s} value={s} style={{ background: G.dark }}>{s}</option>)}
                  </select>
                </div>

                {/* Message textarea */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle} htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows="5" required
                    value={formData.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '13px 36px',
                    borderRadius: '50px',
                    backgroundColor: isSubmitting ? 'rgba(192,156,49,0.4)' : G.gold,
                    color: G.dark,
                    fontFamily: G.sans,
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(192,156,49,0.2)',
                  }}
                  onMouseOver={(e) => { if (!isSubmitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,156,49,0.3)'; }}}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,156,49,0.2)'; }}
                >
                  {isSubmitting ? 'Sending…' : 'Get a Quotation →'}
                </button>

              </form>
            </div>

            {/* ── RIGHT: CONTACT DETAILS PANEL ────────────────────────────
                Slightly darker panel with contact info and a subtle map hint.
            ────────────────────────────────────────────────────────────── */}
            <div
              style={{
                padding: '56px 36px',
                background: 'rgba(0,0,0,0.18)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              <span style={{ fontFamily: G.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, display: 'block', marginBottom: '12px' }}>
                Contact Details
              </span>
              <h3 style={{ fontFamily: G.serif, fontSize: '1.4rem', fontWeight: 400, color: G.cream, marginBottom: '36px' }}>
                Reach <em style={{ color: G.gold, fontStyle: 'italic' }}>Us</em>
              </h3>

              {/* Contact detail rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                {details.map((d) => (
                  <div key={d.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    {/* Icon in a small gold-tinted circle */}
                    <div
                      style={{
                        width: '36px', height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(192,156,49,0.1)',
                        border: '1px solid rgba(192,156,49,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: G.sans, fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 3px', fontWeight: 500 }}>
                        {d.label}
                      </p>
                      <p style={{ fontFamily: G.sans, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.5 }}>
                        {d.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gold divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(192,156,49,0.15)', marginBottom: '32px' }} />

              {/* Brand tagline */}
              <blockquote
                style={{
                  borderLeft: `2px solid ${G.gold}`,
                  paddingLeft: '14px',
                  opacity: 0.7,
                }}
              >
                <p style={{ fontFamily: G.serif, fontSize: '13px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                  "We provide structured workforce solutions that help organisations operate with confidence."
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOADER ──────────────────────────────────────────────────────────── */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={logoImage} alt="Katelago" style={{ height: '80px', marginBottom: '16px', animation: 'ctPulse 1.5s ease-in-out infinite' }} />
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
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="18" height="18" fill="white" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes ctPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }

        /* Collapse to single column on tablet */
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }

        /* Tighten form padding on mobile */
        @media (max-width: 600px) {
          [style*="padding: 56px 52px"] { padding: 32px 24px !important; }
          [style*="padding: 56px 36px"] { padding: 32px 24px !important; }
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;