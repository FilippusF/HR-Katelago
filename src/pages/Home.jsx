import React, { useState, useEffect, useRef } from 'react';
import Hero from './hero';
import { clients } from '../data/clients';
import whoImage from '../assets/images/who.png';
import missionImage from '../assets/images/mission.jpg';
import chooseImage from '../assets/images/choose.png';
import logoImage from '../assets/images/Main-logo.png';
import actionImage from '../assets/images/action.png';
import StationImage1 from '../assets/images/10.jpg'; 
import StationImage2 from '../assets/images/9.jpg'; 
import HomeImage from '../assets/images/mission.jpg';

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
        className="py-5"
        style={{ 
          minHeight: '600px',
          overflow: 'hidden',
          backgroundColor: '#174D3A'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="pe-lg-5">

                {/* Main Heading */}
                <h1 
                  className="display-5 fw-bold mb-4"
                  style={{
                    color: '#C09C31',
                    lineHeight: '1.2',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Workforce Compliance and Payroll Support for Organisations Operating in Namibia
                </h1>

                {/* Description */}
                <p 
                  className="lead mb-4 fw-bold"
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                Katelago HR Consultants is a strategic workforce partner based in Namibia
                </p>

                {/* Quote */}
                <blockquote 
                  className="border-start border-4 ps-4 mb-4 fw-bold"
                  style={{
                    borderColor: '#174D3A !important',
                    fontStyle: 'italic',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                We support clients with compliant employment setup, Employer of Record services, payroll governance and practical HR advisory that reduces risk and supports smooth operations.
                <br />
                Our work is clear, structured and aligned to Namibian labour requirements.
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
                      style={{ color: '#174D3A' }}
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
                    <h5 className="fw-bold mb-2" style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>
                      Team Ethos
                    </h5>
                    <p 
                      className="mb-0 fw-bold"
                      style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif'
                      }}
                    >
                      Redefining the future of work in Africa — Bold. Dynamic. Human.
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
    
                  </div>
                </div>

                {/* Small Sliding Image */}
                <div 
                  className={`position-absolute bg-white rounded-4 shadow-lg p-4 d-none d-lg-block`}
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
                        backgroundColor: ' #174D3A',
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
                      <h6 className="fw-bold mb-1" style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                        Speak to a Consultant
                      </h6>
                      <p 
                        className="mb-0"
                        style={{
                          color: 'black',
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif'
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
      <br /><br /> <br />

      {/* Clients Section */}
      <section className="py-5" style={{ backgroundColor: '#174D3A' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-0" style={{ fontSize: '2rem', fontWeight: '600', color: '#C09C31' }}>
              Corporate Clients Trust Us
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
                        height: '150px', 
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
          backgroundImage: `url(${missionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
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

          <div className="row align-items-stretch ">
            {/* Left Card */}
            <div className="col-lg-6 mb-4">
              <div 
                className="h-100 rounded-4"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '20px'
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
                        backgroundColor: '#1e5631'
                        
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Compliance Before Convenience

                    </span>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#1e5631'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Structure Creates Stability

                    </span>
                  </div>
                  <br />

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#1e5631'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Disciplined Execution
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#1e5631'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Risk Awareness
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#1e5631'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Accountability in Advice
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#1e5631'
                      }}
                    >
                      <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ opacity: 0.9 }}>
                      Human Dignity Within Governance
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
                        backgroundColor: '#1e5631',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      01
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">
                        Vision
                      </h5>
                      <p 
                        className="text-white mb-0"
                        style={{ 
                          opacity: 0.8,
                          fontSize: '14px'
                        }}
                      >
                         To be Namibia’s leading strategic workforce partner, known for workforce compliance, structured HR 
                         governance and clear, trusted advice in regulated and project-based environments.
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
                        backgroundColor: '#1e5631',
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
                      To help organisations operate with confidence through compliant workforce structures, 
                      disciplined payroll governance and practical HR advisory aligned to Namibian labour legislation
                      </p>
                    </div>                    
                  </div>
                </div>

                <div 
                        className="p-4 rounded-4 vision-mission-card"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          marginTop:'25px'
                        }}
                      >
                        <div className="d-flex align-items-start">
                          <div 
                            className="me-4 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: '60px',
                              height: '60px',
                              backgroundColor: '#1e5631',
                              fontSize: '24px',
                              fontWeight: 'bold',
                              color: 'white'
                            }}
                          >
                            03
                          </div>
                          <div>
                            <h5 className="text-white fw-bold mb-2">
                              Philosophy
                            </h5>
                            <p 
                              className="text-white mb-0"
                              style={{ 
                                opacity: 0.8,
                                fontSize: '14px'
                              }}
                            >
                              We believe compliant workforce structures, disciplined payroll governance and clear HR frameworks create stronger organisations. Our approach is practical, structured and aligned to Namibian labour legislation, 
                              helping clients operate with confidence while protecting both their business and their people.
                            </p>
                          </div>
                        </div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="py-5"
        style={{ 
          backgroundColor: '#174D3A',
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
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}
              >
                "We believe that small actions create an extraordinary impact. By listening deeply, reflecting on our quality of work, and understanding others, we craft solutions that inspire trust and drive meaningful change."
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Top Row - Cards 01, 02, 03 */}
            <div className="col-lg-8">
              <div className="row g-4 mb-4">
                {/* Card 01 */}
                <div className="col-md-4">
                  <div 
                    className="choose-card p-3 rounded-4 d-flex flex-column"
                    style={{
                      backgroundColor: '#c09c31',
                      height: '220px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="mb-2">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '36px',
                          color: '#174D3A',
                          lineHeight: '1'
                        }}
                      >
                        01
                      </span>
                    </div>
                    <h6 className="fw-bold mb-2" style={{ color: '#174D3A', fontSize: '14px', lineHeight: '1.3' }}>
                      We understand Namibian labour compliance
                    </h6>
                    <p 
                      className="mb-0 flex-grow-1"
                      style={{ 
                        color: '#174D3A',
                        fontSize: '12px',
                        opacity: 0.8,
                        lineHeight: '1.4',
                        textAlign: 'justify'
                      }}
                    >
                      Our work is grounded in practical knowledge of Namibian labour legislation and workforce requirements. We help 
                      clients navigate employment, payroll and compliance matters with clarity and confidence.
                    </p>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="col-md-4">
                  <div 
                    className="choose-card p-3 rounded-4 d-flex flex-column"
                    style={{
                      backgroundColor: '#c09c31',
                      height: '220px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="mb-2">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '36px',
                          color:'#174D3A',
                          lineHeight: '1'
                        }}
                      >
                        02
                      </span>
                    </div>
                    <h6 className="fw-bold mb-2" style={{ color: '#174D3A', fontSize: '14px', lineHeight: '1.3' }}>
                      We bring structure to complex workforce environments
                    </h6>
                    <p 
                      className="mb-0 flex-grow-1"
                      style={{ 
                        color: '#174D3A',
                        fontSize: '12px',
                        opacity: 0.8,
                        lineHeight: '1.4',
                        textAlign: 'justify'
                      }}
                    >
                      From project-based operations to regulated sectors, we help organisations build clear employment frameworks, 
                      disciplined payroll systems and practical governance processes that support smooth operations.
                    </p>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="col-md-4">
                  <div 
                    className="choose-card p-3 rounded-4 d-flex flex-column"
                    style={{
                      backgroundColor: '#c09c31',
                      height: '220px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="mb-2">
                      <span 
                        className="fw-bold"
                        style={{
                          fontSize: '36px',
                          color: '#174D3A',
                          lineHeight: '1'
                        }}
                      >
                        03
                      </span>
                    </div>
                    <h6 className="fw-bold mb-2" style={{ color: '#174D3A', fontSize: '14px', lineHeight: '1.3' }}>
                      We combine compliance with practical execution
                    </h6>
                    <p 
                      className="mb-0 flex-grow-1"
                      style={{ 
                        color: '#174D3A',
                        fontSize: '12px',
                        opacity: 0.8,
                        lineHeight: '1.4',
                        textAlign: 'justify'
                      }}
                    >
                      We do not believe in advice that looks good on paper 
                      but fails in practice. Our approach is practical, measured and designed to work in real business environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Large Image */}
              <div className="position-relative">
                <div 
                  className="rounded-4 overflow-hidden choose-image"
                  style={{
                    height: '300px',
                    backgroundImage: `url(${StationImage1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    top: '0'
                  }}
                >
                </div>
              </div>
            </div>

            {/* Right Side - Card 04 */}
            <div className="col-lg-4">
              <div 
                className="choose-card p-3 rounded-4 position-relative overflow-hidden d-flex flex-column"
                style={{
                  backgroundColor: '#c09c31',
                  height: '220px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div className="mb-2">
                  <span 
                    className="fw-bold" 
                    style={{
                      fontSize: '36px',
                      lineHeight: '1',
                      color:'#174D3A'
                    }}
                  >
                    04
                  </span>
                </div>
                <h6 className="fw-bold mb-2" style={{ fontSize: '14px', lineHeight: '1.3', color:'#174D3A' }}>
                  We support premium, risk-aware organisations
                </h6>
                <p 
                  className="mb-0 flex-grow-1"
                  style={{ 
                    fontSize: '12px',
                    opacity: 0.8,
                    lineHeight: '1.4',
                    color: '#174D3A',
                    textAlign: 'justify'
                  }}
                >
                  We work with businesses that value structure, accountability and sound judgement. Our focus is on 
                  helping clients make informed workforce decisions that protect both operations and reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
<section 
  className="py-5"
  style={{ 
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '400px',
    position: 'relative'
  }}
>
  {/* Overlay for better text readability */}
  <div 
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 1
    }}
  ></div>
  
  {/* Content */}
  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <h2 
          className="display-4 fw-bold text-white mb-4"
          style={{
            lineHeight: '1.2'
          }}
        >
          Let’s partner for HR Excellence.
        </h2>
        
        <div className="mt-4">
          <a href="/Contact">
          <button
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-white border-0 cta-button "
            style={{
              backgroundColor: '#1e5631',
              fontSize: '16px',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(30, 86, 49, 0.3)'
            }}
          >
            Book a Consultation →
          </button>
          </a>
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

        .choose-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .choose-image:hover {
          transform: scale(1.02);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(30, 86, 49, 0.4) !important;
        }

        .home-page {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .container, .container-fluid {
          max-width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 991px) {
          .display-5 {
            font-size: 2rem !important;
          }

          .display-4 {
            font-size: 2.5rem !important;
          }

          .lead {
            font-size: 1rem !important;
          }

          section {
            padding: 2rem 0 !important;
          }

          .py-5 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }

          .pe-lg-5 {
            padding-right: 0 !important;
          }

          .col-lg-6, .col-lg-8, .col-lg-4 {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          .choose-card {
            height: auto !important;
            min-height: 180px;
          }

          .choose-image {
            height: 250px !important;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          .row {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          .btn-lg {
            padding: 0.75rem 2rem !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;