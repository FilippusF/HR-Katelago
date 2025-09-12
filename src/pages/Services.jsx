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
                className="display-6 fw-bold mb-4"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '1.2',
                  color: '#1e5631',
                  fontWeight: '700'
                }}
              >
                Payroll Administration
              </h2>
              
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
                      Strategic recruitment and selection of top-tier candidates.
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
                      Employee Onboarding
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Seamless integration process for new team members.
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