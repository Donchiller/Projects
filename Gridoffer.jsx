import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gridoffer = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase mb-2" style={{ fontSize: '28px', color: '#333' }}>
          TOP OFFERS
        </h2>
        <p className="text-muted" style={{ fontSize: '16px' }}>
          Explore our best deals
        </p>
      </div>
    </div>
  );
};

export default Gridoffer;