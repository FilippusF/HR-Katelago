import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/Main-logo.png';
import goldLogo from '../../assets/images/Gold-Icon.png';

const Header = () => {

  return (
    <>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#2c3e50' }} className="text-white py-2">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center small">
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              marginLeft: '-25px',
              marginRight: '-25px'
            }}>
              <li style={{ 
                display: 'flex', 
                alignItems: 'center',
                paddingLeft: '25px',
                paddingRight: '25px'
              }}>
                <i className="bi bi-envelope me-2"></i>
                <span>info@katelago.com</span>
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'center',
                paddingLeft: '25px',
                paddingRight: '25px'
              }}>
                <i className="bi bi-telephone me-2"></i>
                <span>+264 81 393 44 31</span>
              </li>
            </ul>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              marginLeft: '-4px',
              marginRight: '-4px'
            }}>
              <li style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                <a href="https://www.facebook.com/profile.php?id=61556197468363" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                <a href="https://www.instagram.com/katelagohr/?hl=en" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                <a href="https://www.linkedin.com/company/katelago-human-resources-consultants/?viewAsMember=true" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 shadow-sm" style={{ 
        zIndex: 1050,
        padding: '12px 0'
      }}>
        <div className="container-fluid px-5">
          {/* Logo Section */}
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ marginRight: '3rem' }}>
            <img 
              src={goldLogo} 
              alt="Logo" 
              style={{ 
                height: '55px',
                width: 'auto'
              }}
            />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            style={{ padding: '0.5rem', fontSize: '1.2rem' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto" style={{ gap: '2.5rem' }}>
              {/* HOME */}
              <li className="nav-item">
                <Link 
                  className="nav-link text-dark fw-medium" 
                  to="/"
                  style={{ 
                    fontSize: '15px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    color: '#333 !important'
                  }}
                >
                  HOME
                </Link>
              </li>

              {/* ABOUT Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium position-relative d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  style={{ 
                    fontSize: '15px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    color: '#333 !important'
                  }}
                >
                  ABOUT
                </a>
                <ul className="dropdown-menu border-0 shadow-lg" style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  marginTop: '8px'
                }}>
                  <li><Link className="dropdown-item py-2 px-3" to="/about" style={{ transition: 'all 0.3s ease' }}>About Us</Link></li>
                </ul>
              </li>

              {/* SERVICES Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium position-relative d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  style={{ 
                    fontSize: '15px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    color: '#333 !important'
                  }}
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu border-0 shadow-lg" style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  marginTop: '8px'
                }}>
                  <li><Link className="dropdown-item py-2 px-3" to="/services" style={{ transition: 'all 0.3s ease' }}>All Services</Link></li>
                  <li><a className="dropdown-item py-2 px-3" href="/industries" style={{ transition: 'all 0.3s ease' }}>Industries we serve</a></li>
                </ul>
              </li>

              {/* PROJECTS Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium position-relative d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  style={{ 
                    fontSize: '15px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    color: '#333 !important'
                  }}
                >
                  VACANCIES
                </a>
                <ul className="dropdown-menu border-0 shadow-lg" style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  marginTop: '8px'
                }}>
                  <li><a className="dropdown-item py-2 px-3" href="/careers" style={{ transition: 'all 0.3s ease' }}>Recent Vacancies</a></li>
                </ul>
              </li>

              {/* PAGES Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium position-relative d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  style={{ 
                    fontSize: '16px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    color: '#333 !important',
                    fontWeight: '600'
                  }}
                >
                  PAGES
                </a>
                <ul className="dropdown-menu border-0 shadow-lg" style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  marginTop: '8px'
                }}>
                  <li><Link className="dropdown-item py-2 px-3" to="/contact" style={{ transition: 'all 0.3s ease' }}>Contact</Link></li>
                  <li><Link className="dropdown-item py-2 px-3" to="/testimonials" style={{ transition: 'all 0.3s ease' }}>Testimonials</Link></li>
                </ul>
              </li>
            </ul>

            {/* CTA Button */}
            <a 
              href="/contact" 
              className="btn text-white fw-semibold px-4 py-2"
              style={{ 
                background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
                borderRadius: '25px',
                border: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '13px',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(30, 86, 49, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(30, 86, 49, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 3px 10px rgba(30, 86, 49, 0.3)';
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .dropdown-toggle::after {
          display: none;
        }
        
        .nav-link:hover {
          color:  #1e5631 !important;
        }
        
        .nav-link:hover .bi-plus-lg {
          color:  #1e5631 !important;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa !important;
          color:  #1e5631 !important;
        }
        
        .hover-opacity:hover {
          opacity: 0.7;
        }
        
        .navbar-light .navbar-nav .nav-link {
          color: #333 !important;
        }
        
        @media (max-width: 991px) {
          .navbar-nav {
            margin: 1rem 0;
          }
          
          .nav-item {
            margin: 0.5rem 0;
          }
          
          .btn {
            margin-top: 1rem;
            align-self: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default Header;