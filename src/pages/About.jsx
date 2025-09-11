import React from 'react';

const About = () => {
  return (
    <>
      
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("src/images/about.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
          minHeight: '500px'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
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
                  ABOUT US
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
                Empowering Businesses
                <br />
                Through Expert.
              </h1>
              
              {/* Optional subtitle or description */}
              <p 
                className="lead mb-0"
                style={{
                  fontSize: '1.2rem',
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                We provide comprehensive HR solutions that drive growth and success for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overlay for better text readability */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.3) 0%, rgba(45, 125, 50, 0.3) 100%)',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        ></div>
        
        {/* Content wrapper to ensure text is above overlay */}
        <div className="position-relative" style={{ zIndex: 2, width: '100%' }}>
          {/* Content already included above */}
        </div>
      </section>

      {/* Additional CSS for responsive design */}
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
        }
      `}</style>
    </>
  );
};

export default About;