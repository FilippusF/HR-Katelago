import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import logoImage from '../assets/images/Main-logo.png';
import aboutImage from '../assets/images/about.png';

const Testimonials = () => {
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
    <div className="testimonials-page">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutImage})`,
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
                  TESTIMONIALS
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
                Client Testimonials
                <br />
                Success Stories That Inspire
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
                Hear what our clients say about our HR solutions and services that drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {testimonials.filter((testimonial, index, self) => 
              index === self.findIndex(t => t.id === testimonial.id)
            ).map((testimonial) => (
              <div key={testimonial.id} className="col-lg-6">
                <div 
                  className="h-100 p-4 rounded-4 shadow-sm"
                  style={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Stars */}
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#D4AF37', fontSize: '18px' }}>★</span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p 
                    className="mb-4"
                    style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#495057',
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '50px',
                        backgroundColor: 'white',
                        border: '2px solid #e9ecef',
                        padding: '8px'
                      }}
                    >
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.company} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: '#2c3e50' }}>
                        {testimonial.name}
                      </h6>
                      <small style={{ color: '#6c757d' }}>
                        {testimonial.position}, {testimonial.company}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5"
        style={{ backgroundColor: '#1e5631' }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-white mb-4" style={{ opacity: 0.9 }}>
                Let us help transform your HR processes and drive your business forward.
              </p>
              <button
                className="btn btn-lg px-5 py-3 rounded-pill fw-bold border-0"
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#1e5631',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Get Started Today
              </button>
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

      <style jsx>{`
        .testimonials-page .shadow-sm:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;