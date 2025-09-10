import React, { useState, useEffect, useRef } from 'react';
import Hero from './hero';
import { clients } from '../data/clients';
import whoImage from '../assets/images/who.png';
import missionImage from '../assets/images/mission.jpg';
import chooseImage from '../assets/images/choose.png';
import logoImage from '../assets/images/Main-logo.png';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Back to top button visibility
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
                      backgroundColor: '#e8f5e8',
                      minWidth: '40px'
                    }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      style={{ color: '#28a745' }}
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
                {/* Main Content Card */}
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
                      backgroundImage: `url(${whoImage})`,
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
                        backgroundColor: '#28a745',
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

      {/* Clients Section */}
      <section className="py-5" style={{ backgroundColor: '#e9ecef' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-0" style={{ fontSize: '2rem', fontWeight: '600', color: '#2c3e50' }}>
              9+ Corporate Clients Trust Us
            </h2>
          </div>
          
          {/* Client Logos Slider */}
          <div className="client-slider-wrapper overflow-hidden">
            <div className="client-slider d-flex align-items-center">
              {/* First set of logos */}
              <div className="client-slide d-flex align-items-center">
                {clients.map((client) => (
                  <div key={client.id} className="client-logo mx-5">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      style={{ 
                        height: '100px', 
                        width: 'auto', 
                        maxWidth: '200px',
                        objectFit: 'contain',
                        filter: 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="client-slide d-flex align-items-center">
                {clients.map((client) => (
                  <div key={`${client.id}-duplicate`} className="client-logo mx-5">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      style={{ 
                        height: '100px', 
                        width: 'auto', 
                        maxWidth: '200px',
                        objectFit: 'contain',
                        filter: 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section 
        className="py-5"
        style={{ 
          minHeight: '700px',
          backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url(${missionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="mb-3">
              <span 
                className="text-uppercase fw-normal"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  letterSpacing: '3px'
                }}
              >
                VISION & MISSION
              </span>
            </div>
            <h2 
              className="display-5 fw-bold text-white mb-4"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.2'
              }}
            >
              Our  Vision, Mission, Values.
            </h2>
          </div>

          <div className="row align-items-stretch">
            {/* Left Card */}
            <div className="col-lg-6 mb-4">
              <div 
                className="h-100 p-5 rounded-4"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-white mb-4 fw-bold">
                  Values
                </h3>

                {/* Check Items */}
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#28a745'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Empowerment &amp; Growth
                    </span>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#28a745'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Collaboration
                    </span>
                  </div>
                  <br />

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#28a745'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Excellence Innovation
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#28a745'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="col-lg-6">
              <div className="h-100">
                {/* First Item */}
                <div 
                  className="p-4 rounded-4 mb-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="d-flex align-items-start">
                    <div 
                      className="me-4 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ff6b6b',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      01
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">
                        Values
                      </h5>
                      <p 
                        className="text-white mb-0"
                        style={{ 
                          opacity: 0.8,
                          fontSize: '14px'
                        }}
                      >
                        To be recognized as the leading HR firm, positively impacting our clients and
                        their employees through our innovative and people-centric approach..
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Item */}
                <div 
                  className="p-4 rounded-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="d-flex align-items-start">
                    <div 
                      className="me-4 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#28a745',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      02
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">
                        Mission
                      </h5>
                      <p 
                        className="text-white mb-0"
                        style={{ 
                          opacity: 0.8,
                          fontSize: '14px'
                        }}
                      >
                        To empower businesses with professional, innovative HR solutions and
                        positively impact employees..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How This HR Solutions Work Section */}
      <section 
        className="py-5"
        style={{ 
          backgroundColor: '#1e5631',
          minHeight: '800px'
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 
                className="display-5 fw-bold text-white mb-0"
                style={{
                  lineHeight: '1.2'
                }}
              >
                Why Choose Us
              </h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p 
                className="text-white mb-0"
                style={{ 
                  opacity: 0.8,
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                20+ years of Industry Expertise – Experienced HR professionals.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Left Side - Process Steps */}
            <div className="col-lg-8 mb-4">
              <div className="row g-4">
                {/* Step 01 */}
                <div className="col-md-6">
                  <div 
                    className="h-100 p-4 rounded-4"
                    style={{
                      backgroundColor: '#D4AF37',
                      minHeight: '200px'
                    }}
                  >
                    <div className="mb-3">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '48px',
                          color: 'rgba(0,0,0,0.3)',
                          lineHeight: '1'
                        }}
                      >
                        01
                      </span>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#1e5631' }}>
                      Bold Solutions, Trusted Results, Human Impact.
                    </h4>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="col-md-6">
                  <div 
                    className="h-100 p-4 rounded-4"
                    style={{
                      backgroundColor: '#D4AF37',
                      minHeight: '200px'
                    }}
                  >
                    <div className="mb-3">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '48px',
                          color: 'rgba(0,0,0,0.3)',
                          lineHeight: '1'
                        }}
                      >
                        02
                      </span>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#1e5631' }}>
                      Tailored Strategies, Compliance Assured.
                    </h4>
                    <p 
                      className="mb-0"
                      style={{ 
                        color: '#1e5631',
                        fontSize: '14px',
                        opacity: 0.8
                      }}
                    >
                      We design HR strategies tailored to your needs, ensuring compliance with labour laws
                      while reducing risk..
                    </p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="col-md-6">
                  <div 
                    className="h-100 p-4 rounded-4"
                    style={{
                      backgroundColor: '#D4AF37',
                      minHeight: '200px'
                    }}
                  >
                    <div className="mb-3">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '48px',
                          color: 'rgba(0,0,0,0.3)',
                          lineHeight: '1'
                        }}
                      >
                        03
                      </span>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#1e5631' }}>
                      Seamless Integration, Trusted Support.
                    </h4>
                    <p 
                      className="mb-0"
                      style={{ 
                        color: '#1e5631',
                        fontSize: '14px',
                        opacity: 0.8
                      }}
                    >
                      From in-house to outsourced HR, we safeguard confidentiality and professionalism at
                      every step, delivering ethical and results-driven support.
                    </p>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="col-md-6">
                  <div 
                    className="h-100 p-4 rounded-4 position-relative overflow-hidden"
                    style={{
                      backgroundColor: '#D4AF37',
                      minHeight: '200px'
                    }}
                  >
                    <div className="mb-3">
                      <span 
                        className="fw-bold text-white"
                        style={{
                          fontSize: '48px',
                          opacity: 0.3,
                          lineHeight: '1'
                        }}
                      >
                        04
                      </span>
                    </div>
                    <h4 className="fw-bold mb-3 text-white">
                      Empowering Growth, People First.
                    </h4>
                    <p 
                      className="mb-0 text-white"
                      style={{ 
                        fontSize: '14px',
                        opacity: 0.9
                      }}
                    >
                      At Katelago, we’re passionate about helping businesses grow with confidence,
                      compliance, and people-first solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-4">
              <div className="h-100">
                <div 
                  className="rounded-4 overflow-hidden h-100"
                  style={{
                    minHeight: '500px',
                    backgroundImage: `url(${chooseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
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
              style={{ color: '#20b2aa' }}
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
        .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .shadow-lg {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        .client-slider-wrapper {
          position: relative;
        }

        .client-slider {
          animation: slideRightToLeft 30s linear infinite;
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .client-slider:hover {
          animation-play-state: paused;
        }

        .client-logo {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .client-logo:hover {
          opacity: 1;
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

export default Home;