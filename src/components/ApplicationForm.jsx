/* ════════════════════════════════════════════════════════════════════════════
   CAREERS COMPONENTS
   Three components used on the Vacancies / Careers page:
     1. ApplicationForm  — sidebar form for applying to a job
     2. JobCard          — card representing a single job listing
     3. ManatalWidget    — iframe embed for Manatal career portal

   All use the same G design tokens as the rest of the site.
════════════════════════════════════════════════════════════════════════════ */

import React, { useState } from 'react';

/* ── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Central source of truth — update here to affect all three components.
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

/* ── SHARED STYLES ──────────────────────────────────────────────────────────
   Reused across form inputs and labels for consistency.
────────────────────────────────────────────────────────────────────────── */
const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(192,156,49,0.2)',
  borderRadius: '10px',
  padding: '11px 14px',
  color: G.cream,
  fontFamily: G.sans,
  fontSize: '13px',
  fontWeight: 300,
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.25s ease, background 0.25s ease',
};

const labelStyle = {
  fontFamily: G.sans,
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '7px',
  display: 'block',
};

/* ════════════════════════════════════════════════════════════════════════════
   1. APPLICATION FORM
   ─────────────────────────────────────────────────────────────────────────
   Compact sidebar form for submitting a job application via mailto.
   Receives the `position` prop so the subject line pre-fills.
════════════════════════════════════════════════════════════════════════════ */
export const ApplicationForm = ({ position = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: position,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* Opens the user's mail client with all fields pre-filled */
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application — ${formData.position}`);
    const body    = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}`
    );
    window.location.href = `mailto:careers@katelago.com?subject=${subject}&body=${body}`;
  };

  return (
    /* ── CONTAINER CARD ──────────────────────────────────────────────────
        Contained card — same rounded border as every other section.
    ──────────────────────────────────────────────────────────────────── */
    <div
      style={{
        background: G.dark,
        borderRadius: '16px',
        border: '1px solid rgba(192,156,49,0.18)',
        padding: '32px 28px',
      }}
    >
      {/* Header */}
      <p style={{ fontFamily: G.sans, fontSize: '10px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, margin: '0 0 8px' }}>
        Apply Now
      </p>
      <h3
        style={{
          fontFamily: G.serif,
          fontSize: '1.4rem',
          fontWeight: 400,
          color: G.cream,
          marginBottom: '28px',
          lineHeight: 1.2,
        }}
      >
        Submit Your{' '}
        <em style={{ color: G.gold, fontStyle: 'italic' }}>Application</em>
      </h3>

      <form onSubmit={handleSubmit}>

        {/* Full name */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle} htmlFor="af-name">Full Name *</label>
          <input
            id="af-name" name="name" type="text" required
            placeholder="Jane Smith"
            value={formData.name} onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            onBlur={(e)  => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle} htmlFor="af-email">Email Address *</label>
          <input
            id="af-email" name="email" type="email" required
            placeholder="jane@company.com"
            value={formData.email} onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            onBlur={(e)  => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle} htmlFor="af-phone">Phone Number</label>
          <input
            id="af-phone" name="phone" type="tel"
            placeholder="+264 81 000 0000"
            value={formData.phone} onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            onBlur={(e)  => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
          />
        </div>

        {/* Position of interest */}
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle} htmlFor="af-position">Position of Interest *</label>
          <input
            id="af-position" name="position" type="text" required
            placeholder="e.g. HR Coordinator"
            value={formData.position} onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = G.gold; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            onBlur={(e)  => { e.target.style.borderColor = 'rgba(192,156,49,0.2)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
          />
        </div>

        {/* Note about CV */}
        <p style={{ fontFamily: G.sans, fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: '20px', fontWeight: 300 }}>
          After submitting, attach your CV in the email that opens automatically.
        </p>

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '13px',
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
            boxShadow: '0 4px 16px rgba(192,156,49,0.2)',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(192,156,49,0.3)'; }}
          onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(192,156,49,0.2)'; }}
        >
          Submit Application →
        </button>
      </form>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════════════════
   2. JOB CARD
   ─────────────────────────────────────────────────────────────────────────
   Displays a single job listing. Truncates description to 2 lines.
   Props:
     job      { position_name, department: { name }, location, description }
     onApply  function(job) — called when "Apply Now" is clicked
════════════════════════════════════════════════════════════════════════════ */
export const JobCard = ({ job, onApply }) => {
  const [hovered, setHovered] = useState(false);

  return (
    /* ── CARD ────────────────────────────────────────────────────────────
        Border brightens on hover — same pattern as the why-choose-us cards.
    ──────────────────────────────────────────────────────────────────── */
    <div
      style={{
        background: G.dark,
        borderRadius: '14px',
        border: hovered
          ? '1px solid rgba(192,156,49,0.38)'
          : '1px solid rgba(192,156,49,0.15)',
        padding: '28px 28px 24px',
        marginBottom: '16px',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {/* Top row: department badge + location */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
        {job.department?.name && (
          /* Department pill */
          <span
            style={{
              fontFamily: G.sans,
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: G.gold,
              background: 'rgba(192,156,49,0.1)',
              border: '1px solid rgba(192,156,49,0.2)',
              borderRadius: '50px',
              padding: '4px 12px',
            }}
          >
            {job.department.name}
          </span>
        )}
        {job.location && (
          /* Location tag */
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: G.sans, fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
            <svg width="11" height="11" fill="rgba(192,156,49,0.6)" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {job.location}
          </span>
        )}
      </div>

      {/* Job title */}
      <h5
        style={{
          fontFamily: G.serif,
          fontSize: '1.15rem',
          fontWeight: 400,
          color: G.cream,
          marginBottom: '10px',
          lineHeight: 1.3,
        }}
      >
        {job.position_name}
      </h5>

      {/* Description — truncated to ~2 lines */}
      {job.description && (
        <p
          style={{
            fontFamily: G.sans,
            fontSize: '13px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65,
            marginBottom: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {job.description}
        </p>
      )}

      {/* Gold hairline divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(192,156,49,0.1)', marginBottom: '18px' }} />

      {/* Apply button */}
      <button
        onClick={() => onApply(job)}
        style={{
          padding: '10px 24px',
          borderRadius: '50px',
          backgroundColor: 'transparent',
          border: `1px solid rgba(192,156,49,0.35)`,
          color: G.gold,
          fontFamily: G.sans,
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = G.gold; e.currentTarget.style.color = G.dark; e.currentTarget.style.borderColor = G.gold; }}
        onMouseOut={(e)  => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = G.gold; e.currentTarget.style.borderColor = 'rgba(192,156,49,0.35)'; }}
      >
        Apply Now →
      </button>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════════════════
   3. MANATAL WIDGET
   ─────────────────────────────────────────────────────────────────────────
   Wraps the Manatal career page iframe in a contained card.
   Props:
     companyId  string — Manatal company slug/ID
════════════════════════════════════════════════════════════════════════════ */
export const ManatalWidget = ({ companyId }) => {
  return (
    /* ── OUTER CARD ──────────────────────────────────────────────────────
        Same contained card as every other section.
        Overflow: hidden clips the iframe to rounded corners.
    ──────────────────────────────────────────────────────────────────── */
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
      {/* ── CARD HEADER ────────────────────────────────────────────────
          Eyebrow + title above the iframe for context.
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
          <p style={{ fontFamily: G.sans, fontSize: '10px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: G.gold, opacity: 0.85, margin: '0 0 6px' }}>
            Open Positions
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: '1.5rem', fontWeight: 400, color: G.cream, margin: 0 }}>
            Career <em style={{ color: G.gold, fontStyle: 'italic' }}>Opportunities</em>
          </h2>
        </div>

        {/* Subtle "Powered by Manatal" badge */}
        <span style={{ fontFamily: G.sans, fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
          Powered by Manatal
        </span>
      </div>

      {/* ── IFRAME ────────────────────────────────────────────────────────
          Loads the Manatal career portal.
          Height: 600px — adjust to taste.
          scrolling="yes" allows internal scroll without outer page jump.
      ──────────────────────────────────────────────────────────────────── */}
      <iframe
        src={`https://www.manatal.com/career-page/${companyId}`}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="yes"
        title="Katelago HR — Career Opportunities"
        style={{ display: 'block' }}
      />
    </div>
  );
};

/* ── DEFAULT EXPORT (ApplicationForm) ──────────────────────────────────────
   Named exports above are the primary API.
   Default export preserved for backwards-compatible import.
────────────────────────────────────────────────────────────────────────── */
export default ApplicationForm;