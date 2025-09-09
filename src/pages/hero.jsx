import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero-section d-flex align-items-center min-vh-100"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
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
                className="display-3 fw-bold mb-4 lh-1"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '700'
                }}
              >
                Scalable HR Services<br />
                <span style={{color: '#20b2aa'}}>Designed To Help Your</span><br />
                Business Grow.
              </h1>

              {/* Description */}
              <p className="lead mb-5" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                Transform your human resources management with our comprehensive 
                solutions. We help businesses streamline their HR processes, 
                improve employee satisfaction, and drive sustainable growth.
              </p>

              {/* CTA Button */}
              <div className="hero-cta">
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

              {/* Stats or Features */}
              <div className="row mt-5 pt-4">
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold mb-1" style={{color: '#20b2aa'}}>500+</h3>
                    <small className="text-muted">Happy Clients</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold mb-1" style={{color: '#20b2aa'}}>10+</h3>
                    <small className="text-muted">Years Experience</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold mb-1" style={{color: '#20b2aa'}}>98%</h3>
                    <small className="text-muted">Success Rate</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - could be used for additional content or kept empty */}
          <div className="col-lg-6">
            {/* Optional: Add an image, form, or additional content here */}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{animation: 'bounce 2s infinite'}}
      >
        <a href="#about" className="text-white">
          <i className="bi bi-chevron-down fs-3"></i>
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
        }
      `}</style>
    </section>
  );
};

export default Hero;