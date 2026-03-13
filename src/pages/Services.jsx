import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImage from '../assets/images/about.png'; // Using same background image
import logoImage from '../assets/images/Main-logo.png';
import missionImage from '../assets/images/mission.jpg';
import p1Image from '../assets/images/p1.png';
import chooseImage from '../assets/images/choose.png';
import whoImage from '../assets/images/who.png';
import StationImage2 from '../assets/images/9.jpg'; 
import StationImage1 from '../assets/images/10.jpg';
import StationImage3 from '../assets/images/mission.jpg';
import StationImage4 from '../assets/images/13.jpg';
import StationImage5 from '../assets/images/20.png';


const Services = () => {
  const navigate = useNavigate();
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => scrollToSection(hash), 500);
      }
    };

    // Handle initial load with hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Also handle after loading is complete
  useEffect(() => {
    if (!isLoading && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [isLoading]);
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${StationImage4})`,
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
                    fontSize: '20px',
                    letterSpacing: '2px',
                    color: '#ffffff',
                    opacity: 0.9
                  }}
                >
                  OUR SERVICES
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
                Practical Workforce Solutions for Regulated and Growing Organisations
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
                From Employer of Record and payroll governance to strategic HR advisory, 
                we help organisations put the right workforce structures in place to support compliance and business stability.
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* Workforce Support for Oil & Gas Section */}
<section id="talent-acquisition"
  className="py-5"
  style={{
    backgroundColor: '#174D31'
  }}
>
  <div className="container">
    {/* Section Header */}
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h2 className="display-5 fw-bold text-white mb-4"
          style={{
            lineHeight: '1.2',
            fontSize: '2.5rem'
          }}
        >
          Oil & Gas Workforce Solutions
        </h2>
        
        <div className='container' style={{padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(84, 82, 82, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)', display: 'inline-block'}}>
          <p 
            className="text-white mb-3"
            style={{ 
              opacity: 0.9,
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Oil &amp; Gas projects need more than recruitment. They need workforce structures that can hold up under pressure.
          </p>
          <p 
            className="text-white mb-0"
            style={{ 
              opacity: 0.9,
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Katelago supports operators, EPC contractors, drilling companies and project teams with practical workforce compliance, payroll structure and employment support built for regulated environments.
          </p>
        </div>
      </div>
    </div>

    {/* What We Support Section */}
    <div className="row mb-5">
      <div className="col-lg-6 mb-4">
        <div 
          className="p-4 rounded-4 h-100"
          style={{
            backgroundColor: '#c09c31',
            border: '2px solid #c09c31'
          }}
        >
          <h3 className="fw-bold mb-3" style={{ color: '#174D31', fontSize: '1.5rem' }}>
            What We Support
          </h3>
          <p className="mb-3" style={{ color: '#174D31', fontSize: '1rem', lineHeight: '1.6' }}>
            Our Oil &amp; Gas service is designed to support workforce setup, mobilisation and close-out in a lawful and organised way.
          </p>
          <ul className="mb-0" style={{ fontSize: '0.95rem', color: '#174D31', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
            <li>Pre-project workforce compliance reviews</li>
            <li>Workforce mobilisation planning</li>
            <li>Rotational and offshore workforce support</li>
            <li>Project payroll structure</li>
            <li>Immigration and local labour alignment</li>
            <li>Demobilisation and termination support</li>
            <li>Employment documentation that is clear and review-ready</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div 
          className="p-4 rounded-4 h-100"
          style={{
            backgroundColor: '#c09c31',
            border: '2px solid #c09c31'
          }}
        >
          <h3 className="fw-bold mb-3" style={{ color: '#174D31', fontSize: '1.5rem' }}>
            Why This Matters
          </h3>
          <p className="mb-3" style={{ color: '#174D31', fontSize: '1rem', lineHeight: '1.6' }}>
            In project environments, small workforce gaps can become expensive very quickly.
          </p>
          <p className="mb-0" style={{ color: '#174D31', fontSize: '1rem', lineHeight: '1.6' }}>
            Unclear contracts, poor overtime control, delayed registrations or weak close-out planning can lead to disputes, payroll exposure and operational disruption.
            <br /><br />
            Katelago helps clients reduce that risk by putting the right structure in place early.
          </p>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="row">
      <div className="col-12 text-center">
        <div 
          className="p-5 rounded-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h4 className="fw-bold mb-3 text-white" style={{ fontSize: '1.3rem' }}>
            Planning workforce mobilisation in Namibia?
          </h4>
          <p className="mb-4 text-white" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Speak to Katelago about structured workforce support for Oil &amp; Gas and project-based operations.
          </p>
          <button
            className="btn fw-bold"
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: 'white',
              color: '#174D31',
              border: 'none',
              padding: '14px 32px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Employer of Record Section */}
<section id="employer-of-record"
  className="py-5"
  style={{
    backgroundImage: `url(${missionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  <div className="container">
    {/* Section Header */}
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h2 className="display-5 fw-bold text-white mb-4"
          style={{
            lineHeight: '1.2',
            fontSize: '2.5rem'
          }}
        >
          Employer of Record Services in Namibia
        </h2>
        
        <div className='container' style={{padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(84, 82, 82, 0.4)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.2)', display: 'inline-block'}}>
          <p 
            className="text-white mb-3"
            style={{ 
              opacity: 0.9,
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Hire employees in Namibia without opening a local entity too early.
          </p>
          <p 
            className="text-white mb-0"
            style={{ 
              opacity: 0.9,
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Katelago acts as the local employer while you manage the employee's day-to-day work. We handle compliant contracts, payroll, statutory administration and core employment support in line with Namibian requirements.
          </p>
        </div>
      </div>
    </div>

    {/* How the Service Helps */}
    <div className="row mb-5">
      <div className="col-12">
        <div 
          className="p-4 rounded-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h3 className="fw-bold mb-3 text-white" style={{ fontSize: '1.6rem' }}>
            How the Service Helps
          </h3>
          <p className="mb-3 text-white" style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>
            For many international organisations, the real challenge is not only finding talent. It is employing people lawfully from the first day.
          </p>
          <p className="mb-0 text-white" style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>
            Our EOR service helps clients enter the market in a structured way, reduce early compliance risk and focus on operations while we manage the local employment side.
          </p>
        </div>
      </div>
    </div>

    {/* EOR Support and When It's Right */}
    <div className="row mb-5">
      <div className="col-lg-6 mb-4">
        <div 
          className="p-4 rounded-4 h-100"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h3 className="fw-bold mb-3 text-white" style={{ fontSize: '1.6rem' }}>
            EOR Support Includes
          </h3>
          <ul className="mb-0 text-white" style={{ fontSize: '1.05rem', paddingLeft: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
            <li>Compliant local employment contracts</li>
            <li>Employee onboarding and file setup</li>
            <li>Monthly payroll processing</li>
            <li>PAYE and Social Security administration</li>
            <li>Payslips and payroll reporting</li>
            <li>Leave and employee record management</li>
            <li>Termination calculations and close-out support</li>
            <li>Basic HR and compliance guidance</li>
            <li>Immigration support where needed</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div 
          className="p-4 rounded-4 h-100"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h3 className="fw-bold mb-3 text-white" style={{ fontSize: '1.6rem' }}>
            When EOR Is the Right Fit
          </h3>
          <ul className="mb-0 text-white" style={{ fontSize: '1.05rem', paddingLeft: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
            <li>You want to hire in Namibia before setting up a local company</li>
            <li>You need to enter the market quickly but stay compliant</li>
            <li>You are testing operations or mobilising a project team</li>
            <li>You need a lawful local employment structure while keeping focus on your core business</li>
          </ul>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="row">
      <div className="col-12 text-center">
        <div 
          className="p-5 rounded-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h4 className="fw-bold mb-4 text-white" style={{ fontSize: '1.4rem' }}>
            Need to hire in Namibia quickly and correctly?
          </h4>
          <button
            className="btn fw-bold"
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: 'white',
              color: '#174D31',
              border: 'none',
              padding: '14px 32px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            Talk to Us About EOR
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Tailored HR Services Section */}
      <section id="payroll-administration" className="py-5" style={{ backgroundColor: '#174D31' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 pe-lg-5">
              <div className="mb-3">
                <span 
                  className="text-uppercase fw-medium"
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '2px',
                    color: '#c09c31',
                    fontWeight: '600'
                  }}
                >
                  Overview
                </span>
              </div>
              
              <h2 className="display-6 fw-bold mb-3"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '1.2',
                  color: 'white',
                  fontWeight: '700'
                }}
              >
                Payroll Governance
              </h2>
              
              {/* Tagline */}
              <div 
                className="mb-4 p-3 rounded-3"
                style={{
                  backgroundColor: '#c09c31',
                  border: '2px solid #c09c31',
                  borderRadius: '12px'
                }}
              >
                <p 
                  className="mb-0 text-center fw-bold"
                  style={{
                    fontSize: '1.1rem',
                    color: '#174D31',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}
                >
                  Accurate. Compliant. Seamless Payroll.
                </p>
              </div>
              
              <p 
                className="mb-4"
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'white'
                }}
              >
                We provide full payroll solutions that make your payroll process simple, accurate, and
                efficient.
              </p>
              
              <button
                className="btn fw-bold"
                onClick={() => navigate('/contact')}
                style={{
                  backgroundColor: 'white',
                  color: '#174D31',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  marginLeft: '160px',
                  cursor: 'pointer'
                }}
              >
                Speak to a Payroll Specialist
              </button>
            </div>

            {/* Right Content - Services Grid */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="row g-4">
                {/* Image Card */}
                <div className="col-12">
                  <div 
                    className="position-relative rounded-4 overflow-hidden"
                    style={{
                      height: '250px'
                    }}
                  >
                    <img 
                      src={StationImage4}
                      alt="HR Services"
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>

                {/* Service Cards */}

                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#c09c31',
                      color: '#174D31',
                      border: '2px solid #c09c31',
                      borderRadius: '12px'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      What we support
                    </h5>
                    <ul className="mb-0" style={{ fontSize: '0.9rem', color: '#174D31', paddingLeft: '1.2rem' }}>
                      <li>Monthly payroll processing</li>
                      <li>Cost-to-company calculations</li>
                      <li>PAYE and Social Security compliance</li>
                      <li>Leave administration and reporting</li>
                      <li>Overtime and allowance control</li>
                      <li>Pension and benefit administration support</li>
                      <li>Termination payout calculations</li>
                      <li>Payroll reports and secure payslips</li>
                      <li>Payroll checks and verification support</li>
                    </ul>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: '#c09c31',
                      color: '#174D31',
                      border: '2px solid #c09c31',
                      borderRadius: '12px'
                    }}
                  >
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                      Payroll Reporting
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#174D31' }}>
                      Weak payroll controls can create avoidable risk.
                      <br /><br />
                      That may include incorrect statutory deductions, overtime errors, poor records, allowance issues or disputes at termination stage.
                        <br /><br />
                        We help clients move beyond basic payroll admin and build payroll systems that are more controlled, more consistent and easier to review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Consulting & Outsourcing Section */}
      <section id="hr-consulting"
        className="py-5"
        style={{
          backgroundImage: `url(${missionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            
            <h2 className="display-5 fw-bold mb-4 text-white"
              style={{
                fontSize: '2.8rem',
                lineHeight: '1.2',
                fontWeight: '700'
              }}
            >
              Strategic HR Advisory Services
            </h2>
            
            <div className='container' style={{padding: '20px', borderRadius: '10px' , backgroundColor: 'rgba(84, 82, 82, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)' ,display: 'inline-block'}}>
            <p 
              className="mb-5 text-white"
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto',
                marginTop: '20px'
              }}
            >
              Alongside our compliance and payroll services, Katelago provides 
              practical HR advisory support that helps organisations make better workforce decisions.
            </p>
          </div>
          </div>
          
          {/* Services Grid */}
          <div className="row g-4">
            {[
              'Psychometric Assessments',
              'Job Grading and Salary Benchmarking',
              'Organisational Development',
              'Recruitment',
              'Performance Framework Design',
              'HR governance framework support'
            ].map((service, index) => (
              <div 
                key={index}
                className="col-lg-6 col-md-6"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div 
                  className="service-item d-flex align-items-center p-4 rounded-4"
                  style={{
                    backgroundColor: 'rgba(20, 18, 18, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    className="me-3 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#c09c31'
                    }}
                  >
                    <svg width="12" height="12" fill="white" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                  <span 
                    className="text-white"
                    style={{ 
                      fontSize: '20px',
                      fontWeight: '500',
                      opacity: 0.95
                    }}
                  >
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Advisory Section */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className='container' style={{padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(84, 82, 82, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)', display: 'inline-block'}}>
                <h3 className="fw-bold mb-3 text-white" style={{ fontSize: '1.5rem' }}>
                  How We Approach It
                </h3>
                <p 
                  className="mb-3 text-white"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}
                >
                  Our advisory work is practical.
                </p>
                <p 
                  className="mb-0 text-white"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}
                >
                  Whether the need is assessment, grading, recruitment or organisational structure, the goal is the same: clearer decisions, stronger fairness and better alignment between people and business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Benefits Summary Section */}
<section 
  className="py-5" 
  style={{
    backgroundImage: `url(${missionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  <div className="container">
    {/* Benefits Summary Section */}
    <div className="row">
      <div className="col-12">
        <div 
          className="text-center p-5 rounded-4"
          style={{
            backgroundColor: 'rgba(84, 82, 82, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          
          <h3 
            className="fw-bold mb-4"
            style={{
              fontSize: '2rem',
              color: '#ffffff',
              fontWeight: '700'
            }}
          >
            Why Choose Us
          </h3>
          
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div 
                className="p-3 rounded-3"
                style={{
                  backgroundColor: 'rgba(176, 61, 61, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#174D31',
                    color: '#c09c31'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                  Experienced and locally grounded
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  We bring practical HR and workforce experience rooted in Namibian labour requirements.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div 
                className="p-3 rounded-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#174D31',
                    color: '#c09c31'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                  Structured approach
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  We do not treat workforce matters as isolated admin tasks. We help clients build systems that are easier to manage and defend.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div 
                className="p-3 rounded-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#174D31',
                    color: '#c09c31'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                  Compliance-focused
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  We work with organisations that need lawful, practical and review-ready workforce processes.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div 
                className="p-3 rounded-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#174D31',
                    color: '#c09c31'
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.1rem' }}>
                  Trusted advisory
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  We handle sensitive workforce matters with discretion, accountability and clear judgement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Closing CTA */}
          <div className="mt-5">
            <h4 className="fw-bold mb-3 text-white" style={{ fontSize: '1.4rem' }}>
              Need a more structured approach to workforce compliance?
            </h4>
            <p className="mb-4 text-white" style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2rem auto' }}>
              Whether you are entering Namibia, managing a project workforce, improving payroll controls or strengthening HR governance, Katelago can help.
            </p>
            <button
              className="btn fw-bold"
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: 'white',
                color: '#174D31',
                border: 'none',
                padding: '14px 32px',
                fontSize: '1.1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              Book a Consultation
            </button>
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

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
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
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        .service-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .service-item:hover .me-3 {
          background-color: #174D31 !important;
          transform: scale(1.1);
        }
        
        .process-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .process-card:hover .rounded-circle {
          transform: scale(1.1) rotate(360deg);
          transition: all 0.5s ease;
        }
      `}</style>
    </>
  );
};

export default Services;