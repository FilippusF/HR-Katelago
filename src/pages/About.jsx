import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/images/about.png';
import a1Image from '../assets/images/a1.png';
import a2Image from '../assets/images/a2.png';
import logoImage from '../assets/images/Main-logo.png';
import missionImage from '../assets/images/mission.jpg';
import StationImage1 from '../assets/images/10.jpg'; 
import StationImage2 from '../assets/images/9.jpg'; 

const About = () => {
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
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage1})`,
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
                Through Expert HR Solutions
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
                We provide comprehensive HR solutions that drive growth and success for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 pe-lg-5">
              {/* Section Label */}
              <div className="mb-3">
                <span 
                  className="text-uppercase fw-medium"
                  style={{ 
                    fontSize: '15px', //changed from 12px to 15px
                    letterSpacing: '2px',
                    color: '#c09c31',
                    fontWeight: '600'
                  }}
                >
                  About Us
                </span>
              </div>
              
              {/* Main Heading */}
              <h2 
                className="display-5 fw-bold mb-4"
                style={{
                  fontSize: '2.8rem',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  color: 'black'
                }}
              >
                Katelago HR Consultants
              </h2>
              
              {/* Description */}
              <p 
                className="mb-4"
                style={{
                  fontSize: '1.1rem',
                  color: 'black',
                  lineHeight: '1.6'
                }}
              >
                Shaping the future of work in Africa, Katelago is redefining what it means to be bold, dynamic, and human in the world of HR.
                We empower organisations to build compliant, inclusive, and future-ready workplaces where people, purpose, and progress come together.
              </p>
              
              {/* Quote */}
              <blockquote 
                className="border-start border-4 ps-4 mb-4"
                style={{ 
                  borderColor: '#6c757d!important',
                  fontStyle: 'italic',
                  color: 'black'
                }}
              >
                Founded in 2012 , Katelago HR Consultants was built on the belief that HR should be human first.
                Our team of seasoned professionals combines deep expertise in HR best practice, labour law, and workplace culture to deliver people solutions that are both strategic and meaningful.
                From payroll to performance, we partner with clients to transform compliance into confidence; and people into possibility.
              </blockquote>
              
              {/* Feature Item */}
              <div className="d-flex align-items-start mb-4">
                <div 
                  className="me-3 mt-1"
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#174D31',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                </div>
              </div>
            </div>
            
            {/* Right Images */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="position-relative">
                {/* Main large image */}
                <div className="position-relative">
                  <img 
                    src={a1Image}
                    alt="Business meeting"
                    className="img-fluid rounded shadow-lg"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '15px'
                    }}
                  />
                </div>
                

                
                {/* Call Us Now Card - Moved outside and positioned at bottom */}
                <div 
                  className="position-absolute bg-white rounded shadow p-3"
                  style={{
                    bottom: '-60px',
                    right: '20px',
                    minWidth: '200px',
                    zIndex: 3
                  }}
                >
                    <div className="d-flex align-items-center">
                      <div 
                        className="me-3"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#174D31',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      </div>
                      <div>
                        <h6 
                          className="fw-bold mb-1"
                          style={{ color: 'black', fontSize: '1rem' }}
                        >
                          Call Us Now
                        </h6>
                        <p 
                          className="mb-0 small"
                          style={{ color: 'black' }}
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
                  <div className="mb-3">
                    <span 
                      className="text-uppercase fw-normal"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '15px',
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
                    Our  Vision, Mission, Values &amp; Philosophy
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
                              backgroundColor: '#1e5631'
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
                              backgroundColor: '#1e5631'
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
                              backgroundColor: '#1e5631'
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
                              backgroundColor: '#1e5631'
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
                        className="p-4 rounded-4 mb-4 vision-mission-card"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
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
                              To empower businesses with professional, innovative HR solutions and
                              positively impact employees.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Third Item - Philosophy */}
                      <div 
                        className="p-4 rounded-4 vision-mission-card"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
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
                              We believe small actions create extraordinary impact. By listening
                              deeply, reflecting on our work, and understanding others, we craft solutions that
                              inspire trust and drive meaningful change.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Our Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="mb-3">
              <span 
                className="text-uppercase fw-medium"
                style={{
                  fontSize: '25px', //chamged to 15px
                  letterSpacing: '2px',
                  color: '#c09c31',
                  fontWeight: '600'
                }}
              >
                HOW WE WORK
              </span>
            </div>
            <h2 
              className="display-5 fw-bold mb-4"
              style={{
                fontSize: '2.8rem',
                lineHeight: '1.2',
                fontWeight: '700',
                color: 'black'
              }}
            >
              Our Process
            </h2>
            <p 
              className="lead"
              style={{
                color: 'black',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              We follow a structured approach to deliver exceptional HR solutions tailored to your business needs.
            </p>
          </div>

          {/* Process Steps */}
          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="process-card h-100 p-4 rounded-4 text-center"
                style={{
                  backgroundColor: '#174D31',
                  border: '2px solid #f0f0f0',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: 'fadeInUp 0.6s ease-out 0.1s both'
                }}
              >
                <div 
                  className="process-number mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#c09c31',
                    borderRadius: '50%',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  01
                </div>
                <h5 
                  className="fw-bold mb-3"
                  style={{ color: 'white', fontSize: '1.3rem' }}
                >
                  Grabbing a coffee and catching up
                </h5>
                <p 
                  style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}
                >
                  Informal chat (virtual or in-person) to see if we're the right fit.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="process-card h-100 p-4 rounded-4 text-center"
                style={{
                  backgroundColor: '#174D31',
                  border: '2px solid #c09c31',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: 'fadeInUp 0.6s ease-out 0.2s both'
                }}
              >
                <div 
                  className="process-number mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#c09c31',
                    borderRadius: '50%',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  02
                </div>
                <h5 
                  className="fw-bold mb-3"
                  style={{ color: 'white', fontSize: '1.3rem' }}
                >
                  Discover and Understand
                </h5>
                <p 
                  style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}
                >
                  Deep dive into business needs and goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="process-card h-100 p-4 rounded-4 text-center"
                style={{
                  backgroundColor: '#174D31',
                  border: '2px solid #f0f0f0',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: 'fadeInUp 0.6s ease-out 0.3s both'
                }}
              >
                <div 
                  className="process-number mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#c09c31',
                    borderRadius: '50%',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  03
                </div>
                <h5 
                  className="fw-bold mb-3"
                  style={{ color: 'white', fontSize: '1.3rem' }}
                >
                  Crafting Solutions
                </h5>
                <p 
                  style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}
                >
                  Develop tailored HR solutions aligned to business outcomes.
                </p>
              </div>
            </div>



            {/* Step 4 */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="process-card h-100 p-4 rounded-4 text-center"
                style={{
                  backgroundColor: '#174D31',
                  border: '2px solid #f0f0f0',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: 'fadeInUp 0.6s ease-out 0.4s both'
                }}
              >
                <div 
                  className="process-number mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#c09c31',
                    borderRadius: '50%',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  04
                </div>
                <h5 
                  className="fw-bold mb-3"
                  style={{ color: 'white', fontSize: '1.3rem' }}
                >
                  Implement and Embed
                </h5>
                <p 
                  style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}
                >
                  Partner with clients to execute and embed solutions.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-lg-8 col-md-12 mx-auto">
              <div 
                className="process-card h-100 p-4 rounded-4 text-center"
                style={{
                  backgroundColor: '#174D31',
                  border: '2px solid #174D31',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: 'fadeInUp 0.6s ease-out 0.5s both'
                }}
              >
                <div 
                  className="process-number mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#c09c31',
                    borderRadius: '50%',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  05
                </div>
                <h5 
                  className="fw-bold mb-3 text-white"
                  style={{ fontSize: '1.3rem' }}
                >
                  We are here to help you grow
                </h5>
                <p 
                  className="text-white mb-0"
                  style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9 }}
                >
                  Long-term HR partner, supporting growth and change.
                </p>
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
          
          .display-5 {
            font-size: 2rem !important;
          }
          
          .slide-in-left {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: 30px;
          }
          
          .slide-in-left img {
            width: 100% !important;
            max-width: 280px;
            height: auto !important;
          }
          
          .position-absolute[style*="bottom: -60px"] {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 20px;
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
          
          .display-5 {
            font-size: 1.8rem !important;
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .vision-mission-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .process-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: #D4AF37 !important;
        }
        
        .process-card:hover .process-number {
          transform: scale(1.1);
        }
        
        @keyframes arrowFloat {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .process-card {
            margin-bottom: 2rem;
          }
          
          .process-arrow,
          .curved-arrow {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;