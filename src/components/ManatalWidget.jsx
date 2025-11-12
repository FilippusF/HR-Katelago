import React from 'react';

const ManatalWidget = ({ companyId }) => {
  return (
    <div className="manatal-widget">
      <iframe
        src={`https://www.manatal.com/career-page/${companyId}`}
        width="100%"
        height="600"
        frameBorder="0"
        title="Career Opportunities"
      />
    </div>
  );
};

export default ManatalWidget;