import React, { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#2c3e50' }} className="text-white py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center small">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-4">
                <i className="bi bi-envelope me-2"></i>
                <span>Hello@Email.co</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>
                <span>+62 123 486 789</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark position-sticky top-0" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}>
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <i className="bi bi-geo-alt-fill me-2" style={{ color: '#ff6b4a', fontSize: '2rem' }}></i>
            <div>
              <h2 className="text-white h4 mb-0 fw-bold">Auhar</h2>
              <small className="text-muted">HR Solution</small>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {/* HOME Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                  HOME
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Home V1</a></li>
                  <li><a className="dropdown-item" href="#">Home V2</a></li>
                  <li><a className="dropdown-item" href="#">Home V3</a></li>
                </ul>
              </li>

              {/* ABOUT Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                  ABOUT
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/about">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li><a className="dropdown-item" href="#">Company History</a></li>
                  <li><a className="dropdown-item" href="#">Mission & Vision</a></li>
                </ul>
              </li>

              {/* SERVICES Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                  SERVICES
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/services">All Services</a></li>
                  <li><a className="dropdown-item" href="#">Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">HR Consulting</a></li>
                  <li><a className="dropdown-item" href="#">Training & Development</a></li>
                  <li><a className="dropdown-item" href="#">Payroll Management</a></li>
                </ul>
              </li>

              {/* PROJECTS Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                  PROJECTS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Recent Projects</a></li>
                  <li><a className="dropdown-item" href="#">Case Studies</a></li>
                  <li><a className="dropdown-item" href="#">Success Stories</a></li>
                  <li><a className="dropdown-item" href="#">Portfolio</a></li>
                </ul>
              </li>

              {/* PAGES Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                  PAGES
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/careers">Careers</a></li>
                  <li><a className="dropdown-item" href="/contact">Contact</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                  <li><a className="dropdown-item" href="#">Terms of Service</a></li>
                </ul>
              </li>
            </ul>

            {/* CTA Button */}
            <a href="#" className="btn btn-info text-white fw-semibold px-4 py-2 rounded-pill" style={{ backgroundColor: '#20b2aa' }}>
              GET A QUOTE
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;