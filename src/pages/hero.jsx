import React from 'react';
import heroImage from '../assets/images/9.jpg';

const Hero = () => {
  return (
    <section 
      className="hero-section d-flex align-items-center min-vh-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="hero-content text-white text-center">

              {/* Main Title */}
              <h1 
                className="mb-5"
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  marginBottom: '3rem'
                }}
              >
                We create a place where your people love to work!
              </h1>

              {/* CTA Button */}
              <div className="hero-cta mb-5">
                <a 
                  href="#contact" 
                  className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase"
                  style={{
                    backgroundColor: '#1e5631',
                    border: 'none',
                    color: 'white',
                    fontSize: '14px',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(30, 86, 49, 0.3)',
                    minWidth: '220px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#2d7d32';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 25px rgba(30, 86, 49, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#1e5631';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(30, 86, 49, 0.3)';
                  }}
                >
                  Book a Consultation →
                </a>
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
        
        .hero-section {
          position: relative;
          overflow: hidden;
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
        
        .hero-content h1 {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-content p {
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            background-attachment: scroll;
          }
          
          .hero-content h1 {
            font-size: 2.5rem !important;
            line-height: 1.3;
          }
          
          .hero-content p {
            font-size: 12px;
            letter-spacing: 2px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;