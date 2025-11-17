import React, { useState, useEffect } from 'react';
import logoImage from '../assets/images/Main-logo.png';
import StationImage6 from '../assets/images/33.png';

const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage6})`,
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
                  CAREERS
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
                Explore Career Opportunities
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
                Discover open positions across leading organisations partnered with Katelago HR Consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>Apply for a Position</h2>
              <div className="bg-white rounded-4 p-4 shadow-sm" style={{ border: '1px solid #e9ecef' }}>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const subject = `Job Application - ${formData.get('position')}`;
                  const body = `Name: ${formData.get('name')}%0AEmail: ${formData.get('email')}%0APhone: ${formData.get('phone')}%0APosition: ${formData.get('position')}%0AMessage: ${formData.get('message')}`;
                  window.location.href = `mailto:damona.efraim@mail.manatal.com?subject=${subject}&body=${body}`;
                }}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name *"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address *"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="position"
                        className="form-control"
                        placeholder="Position of Interest *"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Tell us about yourself and why you're interested in this position..."
                      style={{ borderRadius: '10px', padding: '12px' }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn text-white fw-semibold px-5 py-3"
                      style={{
                        background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
                        borderRadius: '25px',
                        border: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '14px'
                      }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-center text-muted mt-3" style={{ fontSize: '12px' }}>
                Applications will be sent to our HR team via Manatal
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

      {/* Additional CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section {
            height: 50vh !important;
            min-height: 400px !important;
          }
          
          .hero-section h1 {
            font-size: 2.5rem !important;
          }
          
          .hero-section .lead {
            font-size: 1.1rem !important;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .hero-section {
            height: 45vh !important;
            min-height: 350px !important;
          }
          
          .hero-section h1 {
            font-size: 2rem !important;
          }
          
          .hero-section .lead {
            font-size: 1rem !important;
          }
          
          .display-5 {
            font-size: 1.8rem !important;
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .bg-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </>
  );
};

export default Careers;