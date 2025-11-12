import React from 'react';

const JobCard = ({ job, onApply }) => {
  return (
    <div className="bg-white rounded-4 p-4 shadow-sm mb-4" style={{ border: '1px solid #e9ecef' }}>
      <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>
        {job.position_name}
      </h5>
      <p className="text-muted mb-2" style={{ fontSize: '14px' }}>
        {job.department?.name} • {job.location}
      </p>
      <p className="mb-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {job.description?.substring(0, 150)}...
      </p>
      <button
        onClick={() => onApply(job)}
        className="btn text-white fw-semibold"
        style={{
          background: 'linear-gradient(135deg, #1e5631 0%, #2d7d32 100%)',
          borderRadius: '20px',
          border: 'none',
          fontSize: '12px',
          padding: '8px 20px'
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;