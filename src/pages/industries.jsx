import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/Main-logo.png';
import aboutImage from '../assets/images/about.png';
import StationImage2 from '../assets/images/9.jpg'; 
import StationImage1 from '../assets/images/10.jpg';
import StationImage4 from '../assets/images/13.jpg';



const Industries = () => {
  const navigate = useNavigate();
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage1})`,
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
                  INDUSTRIES WE SERVE
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
                Across Diverse Industry Sectors
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
                Tailored human resource strategies designed to meet the unique challenges and opportunities within your specific industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-5" style={{ backgroundColor: '#1e5631' }}>
        <div className="container">
          <div className="row">
            {/* Oil & Gas */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4" style={{backgroundColor:'#c69b0cff'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem'}}>Oil & Gas</h3>
                  </div>
                  <p className="card-text" style={{ color: 'white', lineHeight: '1.6' }}>
                    Workforce compliance & EOR support.
                  </p>
                </div>
              </div>
            </div>

            {/* Mining & Engineering */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4" style={{backgroundColor:'#c69b0cff'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M9 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V1H1.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5H9z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>Mining & Engineering</h3>
                  </div>
                  <p className="card-text" style={{ color: 'white', lineHeight: '1.6' }}>
                    Talent acquisition, payroll, HR solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction Projects */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4" style={{backgroundColor:'#c69b0cff'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8.5 1a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V5a.5.5 0 0 0 1 0V3.5H10a.5.5 0 0 0 0-1H8.5V1zM3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>Construction Projects</h3>
                  </div>
                  <p className="card-text" style={{ color: 'white', lineHeight: '1.6' }}>
                    Project-based HR solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Startups & SMEs */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4" style={{backgroundColor:'#c69b0cff'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M7 14s-3-2-3-6 3-6 3-6 3 2 3 6-3 6-3 6z"/>
                        <path d="M9 14s3-2 3-6-3-6-3-6-3 2-3 6 3 6 3 6z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>Startups & SMEs</h3>
                  </div>
                  <p className="card-text" style={{ color: 'white', lineHeight: '1.6' }}>
                    Affordable HR outsourcing.
                  </p>
                </div>
              </div>
            </div>

            {/* NGOs & Development Projects */}
            <div className="col-lg-12 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4" style={{backgroundColor:'#c69b0cff'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h5.793L8.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 7.5H4.5z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>NGOs & Development Projects</h3>
                  </div>
                  <p className="card-text" style={{ color: 'white', lineHeight: '1.6' }}>
                    Compliance & organizational development.
                  </p>
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
              onClick={() => navigate('/')}
              style={{
                height: '80px',
                animation: 'pulse 1.5s ease-in-out infinite',
                cursor: 'pointer'
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        .btn-outline-primary:hover {
          background-color: #1e5631;
          border-color: #1e5631;
          color: white;
        }
        
        .hero-content {
          animation: fadeInUp 1.2s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .breadcrumb-item + .breadcrumb-item::before {
          content: '/';
          color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 50vh !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          
          .hero-content h1 {
            font-size: 2.5rem !important;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 2rem !important;
          }
          
          .display-5 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Industries;