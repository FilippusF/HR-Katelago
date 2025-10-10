import React from 'react';
import mainLogo from '../../assets/images/Main-logo.png';

const Footer = () => {
  return (
    <footer className=" text-light py-5" style={{ backgroundColor: '#174D31' }}>
      <div className="container">
        <div className="row">
          {/* Logo and Description Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mb-3">
              <img 
                src={mainLogo} 
                alt="Katelago HR" 
                style={{ 
                  height: '80px',
                  width: 'auto'
                }}
              />
            </div>
            <p className="text-light small" style={{ color: '#ffffff !important' }}>
              Shaping the future of work in Namibia, Katelago is shaping bold,
              empowered, and human HR solutions that move businesses forward.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/Home" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Homepage
                </a>
              </li>
              <li className="mb-2">
                <a href="/About" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/Services" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/Contact" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* HR Solution Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">HR Solutions</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/Services#HRConsultingAndOutSourcing" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  HR Consulting 
                </a>
              </li>
              <li className="mb-2">
                <a href="/Services#PayrollAdministration" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Payroll Administration
                </a>
              </li>
              <li className="mb-2">
                <a href="/Services#RecruitmentAndTalentAcquisition" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Talent Acquisition
                </a>
              </li>
              <li className="mb-2">
                <a href="/Services#JobGradingAndSalaryBenchmarking" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Job Grading
                </a>
              </li>
              <li className="mb-2">
                <a href="/Services#PsychometricAssessment" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                    Psychometric Assessment
                </a>
              </li>

              <li className="mb-2">
                <a href="/Services#EOR" className="text-light text-decoration-none" style={{ color: '#ffffff !important' }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                    Employer of Record
                </a>
              </li>
            </ul>
          </div>

          {/* Head Office Address Column */}
          <div className="col-lg-5 col-md-6 mb-4">
            <h5 className="text-white mb-3">Head Office Address</h5>
            <p className="text-light small mb-3" style={{ color: '#ffffff !important' }}>
              44 Sigma Street, Windhoek, Namibia
            </p>
            
            <h6 className="text-white mb-2">Days Open</h6>
            <p className="text-light small mb-4" style={{ color: '#ffffff !important' }}>
              Monday - Friday 08 AM - 5 PM
            </p>

            {/* Social Media Icons */}
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61556197468363" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '45px', height: '45px', backgroundColor: '#4267B2', border: 'none', fontSize: '18px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/katelagohr/?hl=en" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '45px', height: '45px', backgroundColor: '#E4405F', border: 'none', fontSize: '18px' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/katelago-human-resources-consultants/?viewAsMember=true" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '45px', height: '45px', backgroundColor: '#0077B5', border: 'none', fontSize: '18px' }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <hr className="my-4" style={{ borderColor: '#6c757d' }} />
        <div className="row align-items-center">
          <div className="col-12 text-center text-lg-start">
            <p className="mb-0 text-light small" style={{ color: '#ffffff !important' }}>
              © 2025 All Rights Reserved - Made with 💙 by Loop Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;