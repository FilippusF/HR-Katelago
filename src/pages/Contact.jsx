import React, { useState, useEffect } from 'react';
import contactImage from '../assets/images/9.jpg';
import logoImage from '../assets/images/Main-logo.png';
import StationImage5 from '../assets/images/14.png';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage5})`,
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
                  CONTACT US
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
                Let's Start a Conversation
                <br />
                About Your HR Needs
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
                Ready to transform your HR processes? Get in touch with our experts for a personalized consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background */}
      <section style={{ backgroundColor: '#174D3A', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <h2 className="mb-4 text-white">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      padding: '0.75rem'
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      padding: '0.75rem'
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      padding: '0.75rem'
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn text-white fw-semibold px-4 py-2"
                  style={{
                    backgroundColor: '#2d7d32',
                    borderRadius: '25px',
                    border: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '13px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Get a Quotation
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-lg-4">
              <h2 className="mb-4 text-white">Contact Details</h2>
              <div className="contact-info text-white">
                <div className="mb-4">
                  <h5 className="text-white">
                    <i className="bi bi-geo-alt-fill me-2"></i>Address
                  </h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    44 Sigma Street, Windhoek, Namibia
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="text-white">
                    <i className="bi bi-telephone-fill me-2"></i>Phone
                  </h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    +264 81 393 44 31
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="text-white">
                    <i className="bi bi-envelope-fill me-2"></i>Email
                  </h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    info@katelago.com
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
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
        }

        .form-control:focus {
          border-color: #2d7d32;
          box-shadow: 0 0 0 0.2rem rgba(45, 125, 50, 0.25);
        }
      `}</style>
    </>
  );
};

export default Contact;