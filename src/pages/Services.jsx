import React, { useState, useEffect } from 'react';
import servicesImage from '../assets/images/about.png'; // Using same background image
import logoImage from '../assets/images/Main-logo.png';
import missionImage from '../assets/images/mission.jpg';
import p1Image from '../assets/images/p1.png';

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${servicesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
          minHeight: '500px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              {/* Breadcrumb */}
              <div className="mb-4">
                <span 
                  className="text-uppercase fw-medium"
                  style={{ 
                    fontSize: '14px',
                    letterSpacing: '2px',
                    color: '#ffffff',
                    opacity: 0.9
                  }}
                >
                  OUR SERVICES
                </span>
              </div>
              
              {/* Main Title */}
              <h1 
                className="display-4 fw-bold mb-4"
                style={{
                  fontSize: '3.5rem',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Comprehensive HR Solutions
                <br />
                Tailored for Your Success
              </h1>
              
              {/* Description */}
              <p 
                className="lead mb-0"
                style={{
                  fontSize: '1.2rem',
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                From talent acquisition to organizational development, we offer the full spectrum of HR services to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored HR Services Section */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 pe-lg-5">
              <div className="mb-3">
                <span 
                  className="text-uppercase fw-medium"
                  style={{ 
                    fontSize: '12px',
                    letterSpacing: '2px',
                    color: '#D4AF37',
                    fontWeight: '600'
                  }}
                >
                  Overview
                </span>
              </div>
              
              <h2 
                className="display-6 fw-bold mb-3"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '1.2',
                  color: '#1e5631',
                  fontWeight: '700'
                }}
              >
                Payroll Administration
              </h2>
              
              {/* Tagline */}
              <div 
                className="mb-4 p-3 rounded-3"
                style={{
                  backgroundColor: '#f8f9fa',
                  border: '2px solid #D4AF37',
                  borderRadius: '12px'
                }}
              >
                <p 
                  className="mb-0 text-center fw-bold"
                  style={{
                    fontSize: '1.1rem',
                    color: '#1e5631',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}
                >
                  Accurate. Compliant. Seamless Payroll.
                </p>
              </div>
              
              <p 
                className="mb-4"
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#6c757d'
                }}
              >
                We provide full payroll solutions that make your payroll process simple, accurate, and
                efficient.
              </p>
            </div>

            {/* Right Content - Services Grid */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="row g-4">
                {/* Image Card */}
                <div className="col-12">
                  <div 
                    className="position-relative rounded-4 overflow-hidden"
                    style={{
                      height: '250px'
                    }}
                  >
                    <img 
                      src={p1Image}
                      alt="HR Services"
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>

                {/* Service Cards */}
                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#1e5631',
                      color: 'white'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      Payroll Processing
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Monthly payroll, cost-to-company calculations, and payslips.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#f8f9fa',
                      color: '#1e5631'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      Tax &amp; Compliance
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      PAYE deductions, SSC/Medical Aid registrations, and ITAS returns.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#f8f9fa',
                      color: '#1e5631'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      Leave &amp; Benefits Management
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Leave tracking, pension fund administration, and
                      termination payouts.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#f8f9fa',
                      color: '#1e5631'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      Payroll Reporting
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Detailed reports, historical payroll access, and secured electronic payslips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Consulting & Outsourcing Section */}
      <section 
        className="py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 86, 49, 0.9), rgba(30, 86, 49, 0.9)), url(${missionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="mb-3">
              <span 
                className="text-uppercase fw-medium"
                style={{ 
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#D4AF37',
                  fontWeight: '600'
                }}
              >
                Our Services
              </span>
            </div>
            
            <h2 
              className="display-5 fw-bold mb-4 text-white"
              style={{
                fontSize: '2.8rem',
                lineHeight: '1.2',
                fontWeight: '700'
              }}
            >
              HR Consulting &amp; Outsourcing
            </h2>
            
            <p 
              className="mb-5 text-white"
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Our HR Consulting services help businesses build strong, compliant, and people-
              centred workplaces by aligning HR with business goals.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="row g-4">
            {[
              'Recruitment & Selection',
              'HR Policies',
              'Company Playbook',
              'Employee Handbook',
              'Culture & Employer Branding',
              'Affirmative Action Report',
              'Change Management',
              'Organisational Development',
              'Succession Planning',
              'Job Descriptions',
              'HR Documents, Employment Contracts, etc',
              'Employee Relations',
              'Disciplinary Enquiry Process & or Chair',
              'Performance Management'
            ].map((service, index) => (
              <div 
                key={index}
                className="col-lg-6 col-md-6"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div 
                  className="service-item d-flex align-items-center p-4 rounded-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    className="me-3 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#D4AF37'
                    }}
                  >
                    <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                  <span 
                    className="text-white"
                    style={{ 
                      fontSize: '15px',
                      fontWeight: '500',
                      opacity: 0.95
                    }}
                  >
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Benefits Process Section */}
<section className="py-5" style={{ backgroundColor: '#2c3e50' }}>
  <div className="container">
    {/* Header */}
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h2 
          className="display-6 fw-bold mb-4"
          style={{
            fontSize: '2.5rem',
            lineHeight: '1.2',
            color: '#ffffff',
            fontWeight: '700'
          }}
        >
          Recruitment &amp; Talent Acquisition
        </h2>
        <p 
          className="lead mx-auto"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#b8c5d1',
            maxWidth: '600px'
          }}
        >
          We design recruitment solutions that help you attract, recruit, and keep the right
          talent to drive your business forward.
        </p>
      </div>
    </div>

    {/* Process Steps */}
    <div className="row">
      <div className="col-12">
        <div className="d-flex flex-wrap justify-content-center align-items-stretch gap-4">
          {/* Step 1 - Highlighted */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#D4AF37',
                color: '#1e5631',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease',
                border: '3px solid #1e5631'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Talent Sourcing &amp; Advertising
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Access to broad networks and targeted platforms to
                connect with the best-fit candidates.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                1
              </div>
            </div>
            {/* Arrow */}
            <div className="d-none d-lg-block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M2 10L38 10M38 10L28 2M38 10L28 18" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l3-3 3 3 5-5m0 0l-3 1m3-1v3"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Screening &amp; Shortlisting
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                Structured CV reviews, tele-screens, and assessments to
                identify top talent.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                2
              </div>
            </div>
            {/* Arrow */}
            <div className="d-none d-lg-block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M2 10L38 10M38 10L28 2M38 10L28 18" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Interview Support
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                Providing interview guides, structured questions, and
                coordination to ensure consistency and fairness.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                3
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="d-flex flex-wrap justify-content-center align-items-stretch gap-4 mt-4">
          {/* Step 4 */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Onboarding Solutions
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                Smooth candidate integration with tailored induction and
                orientation support.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                4
              </div>
            </div>
            {/* Arrow */}
            <div className="d-none d-lg-block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M2 10L38 10M38 10L28 2M38 10L28 18" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 5 */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Proven Strategies For Employee
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                Time-tested approaches for engagement, retention, and performance management.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                5
              </div>
            </div>
            {/* Arrow */}
            <div className="d-none d-lg-block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M2 10L38 10M38 10L28 2M38 10L28 18" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 6 */}
          <div className="d-flex flex-column align-items-center">
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '280px',
                minHeight: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Innovative Tools And Technology
              </h5>
              <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                Cutting-edge HR technology solutions for streamlined operations and insights.
              </p>
              <div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: '-15px',
                  right: '-15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}
              >
                6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Loader */}
      {isLoading && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            zIndex: 9999
          }}
        >
          <div className="text-center">
            <img 
              src={logoImage} 
              alt="Katelago Logo" 
              className="mb-3"
              style={{
                height: '80px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}
            />
            <div 
              className="spinner-border"
              style={{ color: '#1e5631' }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="btn position-fixed rounded-circle shadow-lg"
          style={{
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            backgroundColor: '#1e5631',
            border: 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        .service-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .service-item:hover .me-3 {
          background-color: #1e5631 !important;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Services;