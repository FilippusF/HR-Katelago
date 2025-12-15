import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import logoImage from '../assets/images/Main-logo.png';
import aboutImage from '../assets/images/about.png';
import StationImage2 from '../assets/images/9.jpg'; 
import StationImage1 from '../assets/images/10.jpg';

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const uniqueTestimonials = testimonials.filter((testimonial, index, self) => 
    index === self.findIndex(t => t.id === testimonial.id)
  );

  const testimonialsPerSlide = 4;
  const totalSlides = Math.ceil(uniqueTestimonials.length / testimonialsPerSlide);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getTestimonialsForSlide = (slideIndex) => {
    const start = slideIndex * testimonialsPerSlide;
    return uniqueTestimonials.slice(start, start + testimonialsPerSlide);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage2})`,
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

      {/* Testimonials Slider */}
      <section 
        className="py-5 position-relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="position-relative">
            <div className="overflow-hidden">
              <div 
                className="d-flex"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-100 flex-shrink-0">
                    <div className="row g-4 justify-content-center">
                      {getTestimonialsForSlide(slideIndex).map((testimonial) => (
                        <div key={testimonial.id} className="col-lg-3 col-md-6">
                          <div 
                            className="testimonial-box p-3 shadow-sm"
                            style={{
                              backgroundColor: 'rgba(212, 175, 55, 0.9)',
                              border: '1px solid #D4AF37',
                              transition: 'all 0.3s ease',
                              width: '250px',
                              height: '250px',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              margin: '0 auto'
                            }}
                          >
                            {/* Stars */}
                            <div className="mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} style={{ color: '#1e5631', fontSize: '14px' }}>★</span>
                              ))}
                            </div>
                            
                            {/* Content */}
                            <p 
                              className="mb-3"
                              style={{ 
                                fontSize: '12px',
                                lineHeight: '1.4',
                                color: '#2c3e50',
                                fontStyle: 'italic',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: 'vertical'
                              }}
                            >
                              "{testimonial.content}"
                            </p>
                            
                            {/* Author */}
                            <div className="d-flex align-items-center">
                              <div 
                                className="rounded me-2 d-flex align-items-center justify-content-center"
                                style={{
                                  width: '40px',
                                  height: '35px',
                                  backgroundColor: 'white',
                                  border: '1px solid #e9ecef',
                                  padding: '4px'
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
                                <h6 className="mb-0 fw-bold" style={{ color: '#2c3e50', fontSize: '12px' }}>
                                  {testimonial.name}
                                </h6>
                                <small style={{ color: '#495057', fontSize: '10px' }}>
                                  {testimonial.position}, {testimonial.company}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="btn position-absolute top-50 start-0 translate-middle-y rounded-circle shadow"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#1e5631',
                    border: 'none',
                    zIndex: 10,
                    marginLeft: '-25px'
                  }}
                >
                  <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="btn position-absolute top-50 end-0 translate-middle-y rounded-circle shadow"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#1e5631',
                    border: 'none',
                    zIndex: 10,
                    marginRight: '-25px'
                  }}
                >
                  <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </>
            )}
            
            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="d-flex justify-content-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="btn p-0 mx-1"
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: currentSlide === index ? '#1e5631' : '#dee2e6',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5"
        style={{ backgroundColor: '#174D31' }}
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
                  backgroundColor: '#c09c31',
                  color: '#174D31',
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
      <br /> <br />

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
              style={{ color: '#174D31' }}
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
            backgroundColor: '#c09c31',
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
        .testimonial-box:hover {
          background-color: #174D31 !important;
          border-color: #174D31 !important;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
        }
        
        .testimonial-box:hover * {
          color: white !important;
        }
        
        .testimonial-box:hover .mb-2 span {
          color: #c09c31 !important;
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