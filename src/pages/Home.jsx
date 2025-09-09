import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero-section d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://via.placeholder.com/1920x1080/4a90e2/ffffff?text=Background+Image+Placeholder")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="hero-content text-white">
              {/* Subtitle */}
              <p 
                className="text-uppercase mb-3 fw-bold tracking-wider"
                style={{
                  color: '#ff6b4a',
                  letterSpacing: '2px',
                  fontSize: '14px'
                }}
              >
                STREAMLINE YOUR HR PROCESSES
              </p>

              {/* Main Title */}
              <h1 
                className="display-2 fw-bold mb-4 lh-1"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: '700'
                }}
              >
                Scalable HR Services<br />
                <span style={{color: '#20b2aa'}}>Designed To Help Your</span><br />
                Business Grow.
              </h1>

              {/* Description */}
              <p className="lead mb-5 mx-auto" style={{
                fontSize: '1.2rem', 
                lineHeight: '1.8',
                maxWidth: '600px'
              }}>
                Transform your human resources management with our comprehensive 
                solutions. We help businesses streamline their HR processes, 
                improve employee satisfaction, and drive sustainable growth.
              </p>

              {/* CTA Button */}
              <div className="hero-cta mb-5">
                <a 
                  href="#contact" 
                  className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase"
                  style={{
                    backgroundColor: '#ff6b4a',
                    border: 'none',
                    color: 'white',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 107, 74, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#e55a43';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 74, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ff6b4a';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 74, 0.3)';
                  }}
                >
                  FREE CONSULTATION →
                </a>
              </div>

              {/* Stats */}
              <div className="row justify-content-center mt-5 pt-4">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-4">
                      <div className="text-center">
                        <h3 className="fw-bold mb-1" style={{color: '#20b2aa', fontSize: '2rem'}}>500+</h3>
                        <small className="text-light opacity-75">Happy Clients</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h3 className="fw-bold mb-1" style={{color: '#20b2aa', fontSize: '2rem'}}>10+</h3>
                        <small className="text-light opacity-75">Years Experience</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h3 className="fw-bold mb-1" style={{color: '#20b2aa', fontSize: '2rem'}}>98%</h3>
                        <small className="text-light opacity-75">Success Rate</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{animation: 'bounce 2s infinite'}}
      >
        <a href="#about" className="text-white text-decoration-none">
          <div className="d-flex flex-column align-items-center">
            <small className="mb-2 opacity-75">Scroll Down</small>
            <i className="bi bi-chevron-down fs-4"></i>
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
        
        .tracking-wider {
          letter-spacing: 2px;
        }
        
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            background-attachment: scroll;
          }
          
          .hero-content h1 {
            font-size: clamp(2rem, 8vw, 3rem) !important;
          }
          
          .hero-content .lead {
            font-size: 1rem !important;
          }
          
          .stats h3 {
            font-size: 1.5rem !important;
          }
        }
        
        .btn:hover {
          text-decoration: none !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;