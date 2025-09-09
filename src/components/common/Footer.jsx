import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5" style={{ backgroundColor: '#3a3d4a' }}>
      <div className="container">
        <div className="row">
          {/* Logo and Description Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-2" style={{ color: '#ff6b6b' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="3"/>
                  <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/>
                </svg>
              </div>
              <h4 className="mb-0 text-white">Auhar</h4>
              <small className="text-muted ms-2">HR Solution</small>
            </div>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Homepage
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Projects Work
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* HR Solution Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">HR Solution</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Employee Training
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Payroll Automation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Business Grow
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Outsource HR
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '10px' }}></i>
                  Business HR
                </a>
              </li>
            </ul>
          </div>

          {/* Head Office Address Column */}
          <div className="col-lg-5 col-md-6 mb-4">
            <h5 className="text-white mb-3">Head Office Address</h5>
            <p className="text-muted small mb-3">
              Lumbung Hidup St 425 East Java Madiun<br />
              City Block ABC 123
            </p>
            
            <h6 className="text-white mb-2">Days Open</h6>
            <p className="text-muted small mb-4">
              Monday - Friday 08 AM - 10 PM
            </p>

            {/* Social Media Icons */}
            <div className="d-flex gap-2">
              <a href="#" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '40px', height: '40px', backgroundColor: '#4267B2', border: 'none' }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '40px', height: '40px', backgroundColor: '#1DA1F2', border: 'none' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '40px', height: '40px', backgroundColor: '#FF0000', border: 'none' }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                 style={{ width: '40px', height: '40px', backgroundColor: '#BD081C', border: 'none' }}>
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <hr className="my-4" style={{ borderColor: '#6c757d' }} />
        <div className="row align-items-center">
          <div className="col-12 text-center text-lg-start">
            <p className="mb-0 text-muted small">
              ALL RIGHT RESERVED - WIRASTUDIO ELEMENTOR KIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;