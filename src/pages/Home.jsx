import React, { useState, useEffect, useRef } from 'react';
import Hero from './hero';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />
      
      {/* HR Solutions Section */}
      <section 
        ref={sectionRef}
        className="py-5 bg-light"
        style={{ 
          minHeight: '600px',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="pe-lg-5">
                {/* Who We Are Tag */}
                <div className="mb-3">
                  <span 
                    className="badge text-uppercase fw-normal px-0"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#ff6b6b',
                      fontSize: '12px',
                      letterSpacing: '2px'
                    }}
                  >
                    WHO WE ARE
                  </span>
                </div>

                {/* Main Heading */}
                <h1 
                  className="display-5 fw-bold mb-4"
                  style={{
                    color: '#2c3e50',
                    lineHeight: '1.2'
                  }}
                >
                  We create a place where your people love to work
                </h1>

                {/* Description */}
                <p 
                  className="lead mb-4"
                  style={{
                    color: '#6c757d',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  Shaping the future of work in Namibia, Katelago is shaping bold,
                  empowered, and human HR solutions that move businesses forward.
                </p>

                {/* Quote */}
                <blockquote 
                  className="border-start border-4 ps-4 mb-4"
                  style={{
                    borderColor: '#ff6b6b !important',
                    fontStyle: 'italic',
                    color: '#6c757d'
                  }}
                >
                  Founded in 2012, on the principles of integrity, innovation, and excellence,
                  Katelago HR Consultants is committed to providing strategic HR solutions that
                  enhance productivity and employee engagement. Our team of seasoned HR
                  professionals brings years of expertise in HR best practices, labour law, and
                  workplace dynamics, ensuring that our clients receive top-tier service and compliance
                  assurance.
                </blockquote>

                {/* Feature Item */}
                <div className="d-flex align-items-start mb-4">
                  <div 
                    className="me-3 p-2 rounded"
                    style={{
                      backgroundColor: '#ffe6e6',
                      minWidth: '40px'
                    }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      style={{ color: '#ff6b6b' }}
                    >
                      <path 
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <circle 
                        cx="9" 
                        cy="7" 
                        r="4"
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="m22 21-3-3m3 0v-2a4 4 0 0 0-3-3.87"
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>
                      Team Ethos
                    </h5>
                    <p 
                      className="mb-0"
                      style={{
                        color: '#6c757d',
                        fontSize: '14px'
                      }}
                    >
                      We are not just consultants, we are partners in building empowered
                      workplaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Images with Animation */}
            <div className="col-lg-6">
              <div className="position-relative">
                {/* Main Image */}
                <div 
                  className="rounded-4 overflow-hidden shadow-lg"
                  style={{
                    height: '500px',
                    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <div 
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23f8f9fa"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%236c757d" font-family="Arial" font-size="14"%3EBusiness Meeting%3C/text%3E%3C/svg%3E")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-center text-white">
                      <div 
                        className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: 'rgba(255,255,255,0.2)'
                        }}
                      >
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                      </div>
                      <h4 className="fw-bold">Expertise 20+ years</h4>
                      <p className="mb-0">HR best practices, labour law, workplace dynamics.</p>
                    </div>
                  </div>
                </div>

                {/* Small Sliding Image */}
                <div 
                  className={`position-absolute bg-white rounded-4 shadow-lg p-4`}
                  style={{
                    bottom: '20px',
                    left: '-50px',
                    width: '280px',
                    zIndex: 10,
                    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="me-3 p-3 rounded-circle"
                      style={{
                        backgroundColor: '#ff6b6b',
                        minWidth: '60px'
                      }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        fill="white" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.67a6.5 6.5 0 0 1-3.11-.931 6.5 6.5 0 0 1-.931-3.11l.239-1.804a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>
                        Call Us Now
                      </h6>
                      <p 
                        className="mb-0"
                        style={{
                          color: '#6c757d',
                          fontSize: '14px'
                        }}
                      >
                        +264 81 393 44 31
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Welcome to Our HR Services</h2>
              <p className="lead">
                This is where additional content sections will go. 
                You can add services, testimonials, about preview, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .shadow-lg {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
    </div>
  );
};

export default Home;