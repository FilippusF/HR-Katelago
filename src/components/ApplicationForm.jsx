import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:careers@katelago.com?subject=Job Application - ${formData.position}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APosition: ${formData.position}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white rounded-4 p-4 shadow-sm">
      <h3 className="fw-bold mb-4">Apply Now</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Position of Interest"
            value={formData.position}
            onChange={(e) => setFormData({...formData, position: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="btn text-white fw-semibold w-100 py-3"
          style={{
            background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
            borderRadius: '25px',
            border: 'none'
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;