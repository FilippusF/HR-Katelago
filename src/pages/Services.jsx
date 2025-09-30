import React, { useState, useEffect } from 'react';
import servicesImage from '../assets/images/about.png'; // Using same background image
import logoImage from '../assets/images/Main-logo.png';
import missionImage from '../assets/images/mission.jpg';
import p1Image from '../assets/images/p1.png';
import chooseImage from '../assets/images/choose.png';
import whoImage from '../assets/images/who.png';

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
                      backgroundColor: '#f8f9fa',
                      color: '#1e5631',
                      border: '2px solid #D4AF37',
                      borderRadius: '12px'
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
                      color: '#1e5631',
                      border: '2px solid #D4AF37',
                      borderRadius: '12px'
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
                      color: '#1e5631',
                      border: '2px solid #D4AF37',
                      borderRadius: '12px'
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
                      color: '#1e5631',
                      border: '2px solid #D4AF37',
                      borderRadius: '12px'
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

      {/* How This HR Solutions Work Section */}
<section 
  className="py-5"
  style={{ 
    backgroundColor: '#1e5631',
    minHeight: '800px'
  }}
>
  <div className="container">
    {/* Section Header */}
    <div className="row mb-5">
      <div className="col-lg-6">
        <h2 
          className="display-5 fw-bold text-white mb-0"
          style={{
            lineHeight: '1.2'
          }}
        >
          Recruitment &amp; Talent Acquisition
        </h2>
      </div>
      <div className="col-lg-6 d-flex align-items-end">
        <p 
          className="text-white mb-0"
          style={{ 
            opacity: 0.8,
            fontSize: '16px',
            lineHeight: '1.6'
          }}
        >
          We design recruitment solutions that help you attract, recruit, and keep the right talent to drive your business forward.
        </p>
      </div>
    </div>

    <div className="row g-4">
      {/* Process Cards */}
      <div className="col-lg-12">
        <div className="row g-4">
          {/* Card 01 */}
          <div className="col-lg-3 col-md-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
            <div 
              className="process-card p-4 rounded-4 d-flex flex-column h-100"
              style={{
                backgroundColor: '#D4AF37',
                minHeight: '280px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div className="mb-3">
                <span 
                  className="fw-bold"
                  style={{
                    fontSize: '48px',
                    color: '#1e5631',
                    lineHeight: '1'
                  }}
                >
                  01
                </span>
              </div>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 8a8.1 8.1 0 0 0-7-7 8.1 8.1 0 0 0-7 7c0 2.15.5 4.35 1.36 6.36l5.63 10.54.01.02.01.02c.18.32.5.66.99.66s.81-.34.99-.66l.01-.02.01-.02 5.63-10.54C20.5 12.35 21 10.15 21 8zm-7 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '16px', lineHeight: '1.3' }}>
                Talent Sourcing & Advertising
              </h5>
              <p 
                className="mb-0 flex-grow-1"
                style={{ 
                  color: '#1e5631',
                  fontSize: '13px',
                  opacity: 0.8,
                  lineHeight: '1.4'
                }}
              >
                Access to broad networks and targeted platforms to connect with best-fit candidates.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="col-lg-3 col-md-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <div 
              className="process-card p-4 rounded-4 d-flex flex-column h-100"
              style={{
                backgroundColor: '#D4AF37',
                minHeight: '280px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div className="mb-3">
                <span 
                  className="fw-bold"
                  style={{
                    fontSize: '48px',
                    color: '#1e5631',
                    lineHeight: '1'
                  }}
                >
                  02
                </span>
              </div>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '16px', lineHeight: '1.3' }}>
                Screening & Shortlisting
              </h5>
              <p 
                className="mb-0 flex-grow-1"
                style={{ 
                  color: '#1e5631',
                  fontSize: '13px',
                  opacity: 0.8,
                  lineHeight: '1.4'
                }}
              >
                Structured CV reviews, tele-screens, and assessments to identify top talent.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="col-lg-3 col-md-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <div 
              className="process-card p-4 rounded-4 d-flex flex-column h-100"
              style={{
                backgroundColor: '#D4AF37',
                minHeight: '280px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div className="mb-3">
                <span 
                  className="fw-bold"
                  style={{
                    fontSize: '48px',
                    color: '#1e5631',
                    lineHeight: '1'
                  }}
                >
                  03
                </span>
              </div>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '16px', lineHeight: '1.3' }}>
                Interview Support
              </h5>
              <p 
                className="mb-0 flex-grow-1"
                style={{ 
                  color: '#1e5631',
                  fontSize: '13px',
                  opacity: 0.8,
                  lineHeight: '1.4'
                }}
              >
                Providing interview guides, structured questions, and coordination to ensure consistency.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="col-lg-3 col-md-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
            <div 
              className="process-card p-4 rounded-4 d-flex flex-column h-100"
              style={{
                backgroundColor: '#D4AF37',
                minHeight: '280px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div className="mb-3">
                <span 
                  className="fw-bold"
                  style={{
                    fontSize: '48px',
                    color: '#1e5631',
                    lineHeight: '1'
                  }}
                >
                  04
                </span>
              </div>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '16px', lineHeight: '1.3' }}>
                Onboarding Solutions
              </h5>
              <p 
                className="mb-0 flex-grow-1"
                style={{ 
                  color: '#1e5631',
                  fontSize: '13px',
                  opacity: 0.8,
                  lineHeight: '1.4'
                }}
              >
                Smooth candidate integration with tailored induction and orientation support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Benefits Summary Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div 
              className="text-center p-5 rounded-4"
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                border: '2px solid #D4AF37',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <h3 
                className="fw-bold mb-4"
                style={{
                  fontSize: '2rem',
                  color: '#ffffff',
                  fontWeight: '700'
                }}
              >
                Why Choose Our Expertise?
              </h3>
              
              <p 
                className="mb-4"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  maxWidth: '800px',
                  margin: '0 auto 2rem auto'
                }}
              >
                With our expertise, you'll cut down recruitment time, improve candidate quality,
                and build a workforce that truly fits your company's values and goals.
              </p>
              
              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
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
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                      Faster Hiring
                    </h5>
                    <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Streamlined processes reduce time-to-hire significantly
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
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
                    <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                      Improved Candidate Quality
                    </h5>
                    <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Better screening ensures top-tier talent selection
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
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
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                      Value-Aligned Workforce
                    </h5>
                    <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Employees who truly fit your company culture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</section>

{/* How This HR Solutions Work Section */}
<section 
  className="py-5" 
  style={{ 
    backgroundColor: 'transparent',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${chooseImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
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
          Job Grading &amp; Salary Benchmarking
        </h2>
        <p 
          className="text-white mb-0"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          We utilize the Patterson Grading System for Job Evaluation, Job Grading, and Salary Benchmarking, ensuring fair and transparent compensation structures.
        </p>
      </div>
    </div>

    {/* Process Steps and Image */}
    <div className="row align-items-stretch">
      {/* Steps Column */}
      <div className="col-lg-8 mb-4">
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-6">
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                backgroundColor: '#D4AF37',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#1e5631',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  01
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.2rem' }}>
                    Objective Job Grading
                  </h5>
                  <p className="mb-0" style={{ color: '#1e5631', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Evaluating roles based on education,
                    responsibility, complexity, and autonomy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-6">
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                backgroundColor: '#D4AF37',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#1e5631',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  02
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.2rem' }}>
                    Transparent Salary Benchmarking
                  </h5>
                  <p className="mb-0" style={{ color: '#1e5631', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Aligning pay structures with industry
                    standards for fairness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-6">
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                backgroundColor: '#D4AF37',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#1e5631',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  03
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.2rem' }}>
                    Competitive Reward Systems
                  </h5>
                  <p className="mb-0" style={{ color: '#1e5631', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Designing equitable salary and benefits structures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - Highlighted */}
          <div className="col-md-6">
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                backgroundColor: '#D4AF37',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#1e5631',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'white'
                  }}
                >
                  04
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.2rem' }}>
                    Compliance &amp; Risk Mitigation
                  </h5>
                  <p className="mb-0" style={{ color: '#1e5631', fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.8 }}>
                    Protecting businesses from legal risks related to pay and discrimination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="col-lg-4 mb-4">
        <div className="h-100 d-flex align-items-stretch">
          <div 
            className="w-100 rounded-4 overflow-hidden"
            style={{
              minHeight: '400px',
              position: 'relative',
              backgroundColor: '#2c3e50'
            }}
          >
            <img 
              src={whoImage}
              alt="Job Grading & Salary Benchmarking"
              className="w-100 h-100"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Text */}
    <div className="row mt-4">
      <div className="col-lg-4 offset-lg-8">
        <p 
          style={{
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            margin: 0
          }}
        >
          With our non-discriminatory approach, job ranks are defined from Unskilled Grade to Director, ensuring justifiable salary decisions.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Psychometric Assessment Section */}
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
            Assessment Services
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
          Psychometric Assessment
        </h2>
        
        <p 
          className="mb-4"
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#6c757d'
          }}
        >
          We utilize Psychometric Assessments to evaluate candidates' suitability for roles and organizations.
        </p>
        
        <p 
          className="mb-4"
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#6c757d'
          }}
        >
          Our proven methodology helps streamline recruitment, optimize team performance, and foster workforce development.
        </p>
      </div>

      {/* Right Content - Assessment Features */}
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="row g-4">
          {/* Behavioural Assessment */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4 d-flex align-items-start"
              style={{
                backgroundColor: '#f8f9fa',
                border: '2px solid #D4AF37'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1e5631',
                  color: '#D4AF37'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.1rem' }}>
                  Behavioural Assessment
                </h5>
                <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                  Understanding candidates' work habits and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Competency Mapping */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4 d-flex align-items-start"
              style={{
                backgroundColor: '#f8f9fa',
                border: '2px solid #D4AF37'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
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
              <div>
                <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.1rem' }}>
                  Competency Mapping
                </h5>
                <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                  Aligning behavioural patterns with job competencies.
                </p>
              </div>
            </div>
          </div>

          {/* Candidate Matching */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4 d-flex align-items-start"
              style={{
                backgroundColor: '#f8f9fa',
                border: '2px solid #D4AF37'
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  color: '#1e5631'
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div>
                <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.1rem' }}>
                  Candidate Matching
                </h5>
                <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                  Leveraging Shadowmatch to select best-fit candidates.
                </p>
              </div>
            </div>
          </div>

          {/* Team Dynamics & Employee Development */}
          <div className="col-6">
            <div 
              className="p-3 rounded-4 h-100"
              style={{
                backgroundColor: '#1e5631',
                color: 'white'
              }}
            >
              <h6 className="fw-bold mb-2" style={{ fontSize: '1rem' }}>
                Team Dynamics
              </h6>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Enhancing collaboration and team performance.
              </p>
            </div>
          </div>

          <div className="col-6">
            <div 
              className="p-3 rounded-4 h-100"
              style={{
                backgroundColor: '#1e5631',
                color: 'white'
              }}
            >
              <h6 className="fw-bold mb-2" style={{ fontSize: '1rem' }}>
                Employee Development
              </h6>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Identifying growth areas and tailoring training interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Employer of Record Section */}
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
            Employment Solutions
          </span>
        </div>
        
        <h2 
          className="display-6 fw-bold mb-3 text-white"
          style={{
            fontSize: '2.5rem',
            lineHeight: '1.2',
            fontWeight: '700'
          }}
        >
          Employer of Record (EOR)
        </h2>
        
        <p 
          className="mb-4 text-white"
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}
        >
          We act as the legal employer on your behalf, managing all employment responsibilities while you retain full control over day-to-day operations and performance.
        </p>
        
        <p 
          className="mb-0 text-white"
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}
        >
          With our Employer of Record services, businesses, including those in the Oil & Gas sector, can expand their workforce in Namibia with confidence, speed, and full legal assurance.
        </p>
      </div>

      {/* Right Content - EOR Features */}
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="row g-4">
          {/* Seamless Hiring & Onboarding */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#D4AF37',
                    color: '#1e5631'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                    Seamless Hiring & Onboarding
                  </h5>
                  <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    Onboard employees anywhere in Namibia without the need for local entity registration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Legal Employment Compliance */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                    Full Legal Employment Compliance
                  </h5>
                  <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    We ensure contracts, payroll, taxes, and statutory contributions fully comply with Namibian labour laws.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Management & HR Compliance */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                    Risk Management & HR Compliance
                  </h5>
                  <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    Mitigating legal risks through correct classification, fair labour practices, and up-to-date documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payroll, Tax & Benefit Administration */}
          <div className="col-12">
            <div 
              className="p-4 rounded-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                    Payroll, Tax & Benefit Administration
                  </h5>
                  <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    Efficient, timely and compliant salary payments, PAYE, Social Security, and Workmen's Compensation.
                  </p>
                </div>
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
        
        .process-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .process-card:hover .rounded-circle {
          transform: scale(1.1) rotate(360deg);
          transition: all 0.5s ease;
        }
      `}</style>
    </>
  );
};

export default Services;