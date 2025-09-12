import React, { useState } from 'react';
import contactImage from '../assets/images/9.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contactImage})`,
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
                  CONTACT US
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
                Let's Start a Conversation
                <br />
                About Your HR Needs
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
                Ready to transform your HR processes? Get in touch with our experts for a personalized consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-8 mb-5">
          <h2 className="mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn text-white fw-semibold px-4 py-2"
              style={{
                background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
                borderRadius: '25px',
                border: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '13px'
              }}
            >
              Get a Quotation
            </button>
          </form>
        </div>

        {/* Direct Details */}
        <div className="col-lg-4">
          <h2 className="mb-4">Contact Details</h2>
          <div className="contact-info">
            <div className="mb-4">
              <h5><i className="bi bi-geo-alt-fill me-2"></i>Address</h5>
              <p className="mb-0">44 Sigma Street, Windhoek, Namibia</p>
            </div>
            <div className="mb-4">
              <h5><i className="bi bi-telephone-fill me-2"></i>Phone</h5>
              <p className="mb-0">+264 81 393 44 31</p>
            </div>
            <div className="mb-4">
              <h5><i className="bi bi-envelope-fill me-2"></i>Email</h5>
              <p className="mb-0">info@katelago.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;