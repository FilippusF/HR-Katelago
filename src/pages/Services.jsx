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
          <div className="d-flex flex-column align-items-center" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3 process-box"
              style={{
                backgroundColor: '#D4AF37',
                color: '#1e5631',
                width: '250px',
                height: '220px',
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
                  <path d="M21 8a8.1 8.1 0 0 0-7-7 8.1 8.1 0 0 0-7 7c0 2.15.5 4.35 1.36 6.36l5.63 10.54.01.02.01.02c.18.32.5.66.99.66s.81-.34.99-.66l.01-.02.01-.02 5.63-10.54C20.5 12.35 21 10.15 21 8zm-7 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Talent Sourcing &amp; Advertising
              </h5>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                Access to broad networks and targeted platforms to connect with best-fit candidates.
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
          </div>

          {/* Step 2 */}
          <div className="d-flex flex-column align-items-center" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3 process-box"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '250px',
                height: '220px',
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
                Screening &amp; Shortlisting
              </h5>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Structured CV reviews, tele-screens, and assessments to identify top talent.
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
          </div>

          {/* Step 3 */}
          <div className="d-flex flex-column align-items-center" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3 process-box"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '250px',
                height: '220px',
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
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Interview Support
              </h5>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Providing interview guides, structured questions, and coordination to ensure consistency.
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

          {/* Step 4 */}
          <div className="d-flex flex-column align-items-center" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
            <div 
              className="text-center p-4 rounded-4 position-relative mb-3 process-box"
              style={{
                backgroundColor: '#1e5631',
                color: '#ffffff',
                width: '250px',
                height: '220px',
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
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                Onboarding Solutions
              </h5>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Smooth candidate integration with tailored induction and orientation support.
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
    </div>
  </div>
</section>

{/* How This HR Solutions Work Section */}
<section className="py-5" style={{ backgroundColor: '#1e5631' }}>
  <div className="container">
    {/* Header */}
    <div className="row mb-5">
      <div className="col-12 text-center">
        <p 
          className="text-uppercase mb-2"
          style={{
            fontSize: '0.9rem',
            letterSpacing: '2px',
            color: '#D4AF37',
            fontWeight: '500'
          }}
        >
          HOW IT'S WORK
        </p>
        <h2 
          className="display-6 fw-bold mb-4"
          style={{
            fontSize: '2.5rem',
            lineHeight: '1.2',
            color: '#ffffff',
            fontWeight: '700'
          }}
        >
          How This HR Solutions Work
        </h2>
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
                backgroundColor: '#2c3e50',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  01
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                    Talk With Us
                  </h5>
                  <p className="mb-0" style={{ color: '#b8c5d1', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet consectetur.
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
                backgroundColor: '#2c3e50',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  02
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                    HR Solutions
                  </h5>
                  <p className="mb-0" style={{ color: '#b8c5d1', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet consectetur.
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
                backgroundColor: '#2c3e50',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff'
                  }}
                >
                  03
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                    Scalable Services
                  </h5>
                  <p className="mb-0" style={{ color: '#b8c5d1', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet consectetur.
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
                    backgroundColor: 'rgba(30, 86, 49, 0.2)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1e5631'
                  }}
                >
                  04
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e5631', fontSize: '1.2rem' }}>
                    Business Stays On Top
                  </h5>
                  <p className="mb-0" style={{ color: '#1e5631', fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.8 }}>
                    Lorem ipsum dolor sit amet consectetur.
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
            {/* Image Placeholder - Replace with your actual image */}
            <div 
              className="w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#495057',
                backgroundImage: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(30, 86, 49, 0.1) 100%)'
              }}
            >
              <div className="text-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37'
                  }}
                >
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <p style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: '500' }}>
                  Replace with Your Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Text */}
    <div className="row mt-4">
      <div className="col-lg-4 offset-lg-8">
        <p 
          style={{
            color: '#b8c5d1',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            margin: 0
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
        
        .process-box:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .process-box:hover .rounded-circle {
          transform: scale(1.1) rotate(360deg);
          transition: all 0.5s ease;
        }
      `}</style>
    </>
  );
};

export default Services;