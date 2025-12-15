import React, { useState, useEffect } from 'react';

// Manatal Service
const API_KEY = import.meta.env.VITE_MANATAL_API_KEY;
const BASE_URL = import.meta.env.VITE_MANATAL_BASE_URL || 'https://api.manatal.com/v3';

class ManatalService {
  async getJobs() {
    try {
      const response = await fetch(`${BASE_URL}/jobs/`, {
        headers: {
          'Authorization': `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return { results: [] };
    }
  }

  async submitApplication(applicationData) {
    try {
      const formData = new FormData();
      
      // Add candidate data
      formData.append('first_name', applicationData.firstName);
      formData.append('last_name', applicationData.lastName);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone || '');
      formData.append('cover_letter', applicationData.message || '');
      
      // Add job if selected
      if (applicationData.jobId) {
        formData.append('job', applicationData.jobId);
      }
      
      // Add resume if provided
      if (applicationData.resume) {
        formData.append('resume', applicationData.resume);
      }

      const response = await fetch(`${BASE_URL}/candidates/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${API_KEY}`,
        },
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }
}

const manatalService = new ManatalService();

// Main Component
const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoadingJobs(true);
    try {
      const data = await manatalService.getJobs();
      setJobs(data.results || []);
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoadingJobs(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const fullName = formData.get('name').trim();
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    try {
      await manatalService.submitApplication({
        firstName,
        lastName,
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        jobId: selectedJob || null,
        resume: resume,
      });

      setSubmitStatus({ type: 'success', message: 'Application submitted successfully!' });
      e.target.reset();
      setSelectedJob('');
      setResume(null);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit application. Please try again or contact us directly.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section position-relative d-flex align-items-center"
        style={{
          background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
          height: '60vh',
          minHeight: '500px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <div className="mb-4">
                <span 
                  className="text-uppercase fw-medium"
                  style={{ 
                    fontSize: '14px',
                    letterSpacing: '2px',
                    opacity: 0.9
                  }}
                >
                  CAREERS
                </span>
              </div>
              
              <h1 
                className="display-4 fw-bold mb-4"
                style={{
                  fontSize: '3.5rem',
                  lineHeight: '1.2',
                  fontWeight: '700'
                }}
              >
                Explore Career Opportunities
              </h1>
              
              <p 
                className="lead mb-0"
                style={{
                  fontSize: '1.2rem',
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Discover open positions across leading organisations partnered with Katelago HR Consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Jobs Section */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>
                Available Positions
              </h2>

      <div style={{ 
        minHeight: '800px', 
        height: '80vh',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>
        <iframe 
          src="https://katelago-hr-consultants.careers-page.com/" 
          style={{
            width: '100%', 
            height: '100%', 
            border: 'none'
          }}
          title="Katelago HR Consultants Careers"
        />
      </div>              

              
              
              {/* {loadingJobs ? (
                <div className="text-center py-5">
                  <div className="spinner-border" style={{ color: '#1e5631' }} role="status">
                    <span className="visually-hidden">Loading jobs...</span>
                  </div>
                </div>
              ) : jobs.length > 0 ? (
                <div className="row g-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm hover-card">
                        <div className="card-body p-4">
                          <h5 className="card-title fw-bold mb-3" style={{ color: '#1e5631' }}>
                            {job.position_name}
                          </h5>
                          {job.department && (
                            <p className="text-muted mb-2">
                              <small>📍 {job.department}</small>
                            </p>
                          )}
                          {job.employment_type && (
                            <p className="text-muted mb-3">
                              <small>💼 {job.employment_type}</small>
                            </p>
                          )}
                          {job.description && (
                            <p className="card-text text-muted small mb-3">
                              {job.description.substring(0, 150)}...
                            </p>
                          )}
                          <button
                            onClick={() => {
                              setSelectedJob(job.id);
                              document.getElementById('application-form').scrollIntoView({ 
                                behavior: 'smooth' 
                              });
                            }}
                            className="btn btn-sm text-white"
                            style={{
                              backgroundColor: '#1e5631',
                              borderRadius: '20px',
                              padding: '8px 20px'
                            }}
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">No positions currently available. Check back soon!</p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Section */}
      {/* <section id="application-form" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>
                Apply for a Position
              </h2>
              
              {submitStatus && (
                <div 
                  className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}
                  role="alert"
                >
                  {submitStatus.message}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </div>
              )}

              <div className="bg-white rounded-4 p-4 shadow-sm" style={{ border: '1px solid #e9ecef' }}>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name *"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address *"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-select"
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        style={{ borderRadius: '10px', padding: '12px' }}
                      >
                        <option value="">Select Position (Optional)</option>
                        {jobs.map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.position_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-muted small">Upload Resume/CV</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ borderRadius: '10px', padding: '12px' }}
                    />
                    <small className="text-muted">Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                  </div>
                  
                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Tell us about yourself and why you're interested in this position..."
                      style={{ borderRadius: '10px', padding: '12px' }}
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn text-white fw-semibold px-5 py-3"
                      style={{
                        background: submitting 
                          ? '#ccc' 
                          : 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
                        borderRadius: '25px',
                        border: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '14px',
                        cursor: submitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
              
              <p className="text-center text-muted mt-3" style={{ fontSize: '12px' }}>
                Applications are processed securely through Manatal ATS
              </p>
            </div>
          </div>
        </div>
      </section> */}

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
            zIndex: 1000
          }}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            height: 50vh !important;
            min-height: 400px !important;
          }
          
          .hero-section h1 {
            font-size: 2.5rem !important;
          }
        }
        
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        .btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 86, 49, 0.3);
        }
      `}</style>
    </>
  );
};

export default Careers;