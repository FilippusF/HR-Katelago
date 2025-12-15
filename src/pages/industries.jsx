import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/Main-logo.png';
import aboutImage from '../assets/images/about.png';
import StationImage2 from '../assets/images/9.jpg'; 
import StationImage1 from '../assets/images/10.jpg';

const Industries = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

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
                    fontSize: '18px',
                    letterSpacing: '2px',
                    color: '#ffffff',
                    opacity: 0.9
                  }}
                >
                  INDUSTRIES WE SERVE
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
                Comprehensive HR Solutions
                <br />
                Across Diverse Industry Sectors
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
                Tailored human resource strategies designed to meet the unique challenges and opportunities within your specific industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-5" style={{ backgroundColor: '#1e5631' }}>
        <div className="container">
          <div className="row">
            {/* Oil & Gas */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem'}}>Oil & Gas</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Workforce compliance, EOR support & specialised HR for high-risk operations.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('oil-gas')}
                  >
                    {expandedCard === 'oil-gas' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'oil-gas' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Employer of Record (EOR)</li>
                        <li>Workforce mobilisation & onboarding</li>
                        <li>Payroll, PAYE, SSC & statutory reporting</li>
                        <li>Recruitment for project, offshore & technical roles</li>
                        <li>HR compliance & documentation</li>
                        <li>Job grading & salary benchmarking</li>
                        <li>Contracts, policies & HR documentation</li>
                        <li>Disciplinary support & case management</li>
                        <li>Psychometric assessments</li>
                        <li>Organisational development & workforce planning</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mining & Engineering */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M9 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V1H1.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5H9z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Mining & Engineering</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Technical recruitment, payroll, HR compliance & workforce solutions.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('mining')}
                  >
                    {expandedCard === 'mining' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'mining' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Technical talent sourcing</li>
                        <li>Payroll administration & statutory returns</li>
                        <li>Site HR support</li>
                        <li>Performance management systems</li>
                        <li>Job grading & salary benchmarking</li>
                        <li>Compliance-focused HR policies</li>
                        <li>Disciplinary enquiries & ER support</li>
                        <li>Workforce planning & competency mapping</li>
                        <li>Psychometric assessments</li>
                        <li>Onboarding & induction programmes</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Construction & Infrastructure */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8.5 1a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V5a.5.5 0 0 0 1 0V3.5H10a.5.5 0 0 0 0-1H8.5V1zM3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Construction & Infrastructure</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Project-based HR management, payroll & workforce mobilisation.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('construction')}
                  >
                    {expandedCard === 'construction' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'construction' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Project HR setup</li>
                        <li>Recruitment for artisans, labourers & supervisors</li>
                        <li>Payroll for project teams (casual, temporary & long-term)</li>
                        <li>Timesheet, leave & shift management</li>
                        <li>Contracts & site HR documentation</li>
                        <li>HR compliance for site audits</li>
                        <li>Disciplinary & grievance handling</li>
                        <li>Workforce planning across project phases</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Fisheries & Marine */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1zm11 0H3v14h10V1z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Fisheries & Marine</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Seasonal workforce HR, compliance, payroll & maritime labour solutions.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('fisheries')}
                  >
                    {expandedCard === 'fisheries' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'fisheries' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>HR compliance for maritime & processing roles</li>
                        <li>Seasonal & permanent workforce HR</li>
                        <li>Payroll for crew, deckhands & factory staff</li>
                        <li>Shift, attendance & seasonal cycle management</li>
                        <li>Recruitment for factory, vessel & operational roles</li>
                        <li>Contracts & HR documentation</li>
                        <li>Disciplinary & ER support</li>
                        <li>Psychometric assessments</li>
                        <li>Workforce mobilisation & onboarding</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Manufacturing & Industrial */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Manufacturing & Industrial</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Shift-based HR, Job Grading, ER Support & workforce optimisation.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('manufacturing')}
                  >
                    {expandedCard === 'manufacturing' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'manufacturing' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Shift-based HR systems</li>
                        <li>Recruitment for operators, technicians & supervisors</li>
                        <li>Payroll & statutory compliance</li>
                        <li>Job grading & salary structures</li>
                        <li>ER case management</li>
                        <li>HR policies, SOPs & documentation</li>
                        <li>Workplace culture & team optimisation</li>
                        <li>Training & workforce development</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Agriculture & Farming */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Agriculture & Farming</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Seasonal labour HR, payroll, contracts & compliance for farm operations.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('agriculture')}
                  >
                    {expandedCard === 'agriculture' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'agriculture' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Seasonal labour HR & payroll</li>
                        <li>Contracts & employee documentation</li>
                        <li>Recruitment for farm & operational roles</li>
                        <li>Attendance & shift management</li>
                        <li>Compliance audits</li>
                        <li>ER support & disciplinary handling</li>
                        <li>Job grading & salary alignment</li>
                        <li>Training & performance frameworks</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Startups & MSMEs */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M7 14s-3-2-3-6 3-6 3-6 3 2 3 6-3 6-3 6z"/>
                        <path d="M9 14s3-2 3-6-3-6-3-6-3 2-3 6 3 6 3 6z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Startups & MSMEs</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    Affordable, scalable HR outsourcing built for growing teams.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('startups')}
                  >
                    {expandedCard === 'startups' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'startups' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Virtual HR department</li>
                        <li>Recruitment & onboarding</li>
                        <li>Monthly payroll management</li>
                        <li>HR policies & handbooks</li>
                        <li>Job descriptions & performance frameworks</li>
                        <li>Contracts, letters & HR documentation</li>
                        <li>Culture building & employer branding</li>
                        <li>Coaching & people advisory</li>
                        <li>Psychometric assessments</li>
                        <li>Basic compliance support</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ICT & Technology */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>ICT & Technology</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    HR systems, talent acquisition, culture building & remote-ready HR support.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('ict')}
                  >
                    {expandedCard === 'ict' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'ict' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Recruitment for specialised IT & tech roles</li>
                        <li>HRIS design & setup</li>
                        <li>Remote-worker HR solutions</li>
                        <li>Payroll & compliance</li>
                        <li>Culture building & internal systems</li>
                        <li>Job grading & salary benchmarking</li>
                        <li>Performance frameworks</li>
                        <li>Employee relations & coaching</li>
                        <li>Policies, handbooks & documentation</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* NGOs, Governance & Development Agencies */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h5.793L8.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 7.5H4.5z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>NGOs, Governance & Development</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    HR governance, compliance, talent acquisition & organisational development.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('ngos')}
                  >
                    {expandedCard === 'ngos' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'ngos' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>HR governance frameworks & organisational policies</li>
                        <li>Recruitment for programme, technical & regional roles</li>
                        <li>Payroll & statutory compliance</li>
                        <li>Job grading & salary structuring</li>
                        <li>Organisational development & restructuring</li>
                        <li>HR manuals & governance documentation</li>
                        <li>Performance management systems</li>
                        <li>Affirmative Action reporting</li>
                        <li>Psychometric assessments (leadership & selection)</li>
                        <li>Capacity building, training & team development</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Hospitality & Tourism */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Hospitality & Tourism</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    High-volume recruitment, payroll, ER support & workforce performance.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('hospitality')}
                  >
                    {expandedCard === 'hospitality' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'hospitality' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>High-volume recruitment</li>
                        <li>Contracts, onboarding & HR documentation</li>
                        <li>Payroll for shift/roster teams</li>
                        <li>HR audits & compliance</li>
                        <li>Job grading & incentive structures</li>
                        <li>Disciplinary & ER support</li>
                        <li>Training & performance programmes</li>
                        <li>Workforce planning for seasonality</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Retail & Wholesale */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Retail & Wholesale</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    HR outsourcing, recruitment, payroll & ER for fast-moving retail environments.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('retail')}
                  >
                    {expandedCard === 'retail' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'retail' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>Recruitment for store, warehouse & head-office roles</li>
                        <li>HR outsourcing & support</li>
                        <li>Payroll administration</li>
                        <li>Shift scheduling & time/attendance management</li>
                        <li>Disciplinary support & ER processes</li>
                        <li>Policies, SOPs & handbooks</li>
                        <li>Job descriptions & job grading</li>
                        <li>Staff onboarding & training support</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Logistics, Transport & Warehousing */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 rounded-4" style={{backgroundColor:'#c09c31'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1e5631',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                    <h3 className="card-title mb-0" style={{ color: '#174D31', fontSize: '1.5rem' }}>Logistics, Transport & Warehousing</h3>
                  </div>
                  <p className="card-text mb-3" style={{ color: 'white', lineHeight: '1.6' }}>
                    HR compliance, shift management, ER support & full payroll solutions.
                  </p>
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: '#1e5631', color: 'white', border: 'none' }}
                    onClick={() => toggleCard('logistics')}
                  >
                    {expandedCard === 'logistics' ? 'Hide Details' : 'Learn More'}
                  </button>
                  {expandedCard === 'logistics' && (
                    <div className="mt-3 p-3" style={{ backgroundColor: 'rgba(30, 86, 49, 0.1)', borderRadius: '8px' }}>
                      <h6 style={{ color: '#174D31', fontWeight: 'bold' }}>What we provide:</h6>
                      <ul style={{ color: 'white', fontSize: '0.9rem', marginBottom: 0 }}>
                        <li>HR compliance for logistics & fleet operations</li>
                        <li>Payroll for drivers, warehouse & operational teams</li>
                        <li>Leave, shift & roster management</li>
                        <li>Recruitment for drivers & logistics staff</li>
                        <li>Disciplinary support & ER processes</li>
                        <li>HR documents, contracts & compliance</li>
                        <li>Performance & KPI systems</li>
                        <li>Workforce planning & optimisation</li>
                      </ul>
                    </div>
                  )}
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
              onClick={() => navigate('/')}
              style={{
                height: '80px',
                animation: 'pulse 1.5s ease-in-out infinite',
                cursor: 'pointer'
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

      {/* CSS Animations */}
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
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
        
        .btn-outline-primary:hover {
          background-color: #1e5631;
          border-color: #1e5631;
          color: white;
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
        
        .breadcrumb-item + .breadcrumb-item::before {
          content: '/';
          color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 50vh !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          
          .hero-content h1 {
            font-size: 2.5rem !important;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 2rem !important;
          }
          
          .display-5 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Industries;