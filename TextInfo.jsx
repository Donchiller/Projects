import React, { useState } from 'react';

const TextInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="py-4"
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '0',
        width: '100%',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Always visible sections */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#333',
            marginBottom: '15px',
          }}
        >
          Authentic Online Supplement Store in India for Whey Protein, Health, Nutrition & Bodybuilding
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          Nutrabay is India’s trusted and fastest growing nutrition and online supplement store with a wide range of products for health, wellness, fitness & bodybuilding, making them easy to purchase & accessible all over India.
        </p>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#333',
            marginBottom: '15px',
          }}
        >
          Our Speciality
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
         You get all products delivered directly from us, without any middlemen or 3rd party sellers. Additionally, we are certified by all the brands or their official Indian supplement importers for authentic supplements. This ensures that you always get an authentic supplement as the entire supply chain is controlled by us. Customer satisfaction and happiness is our number 1 priority, we deliver this by ensuring a great user experience, fast delivery, and high-quality products. Nutrabay is not only a multi-brand store with many top International and Indian brands but since April 2019, we have launched our own supplement range with a huge level of success and customer appreciation. Committed to providing you genuine products at price points that are fair and affordable by all. We often run a lot of freebie offers with top products like samples, gym gloves, shakers, gym bags, t-shirts and more to keep customers satisfied. A company run by young and enthusiastic people whose mission is to help India become a fitter and stronger nation and are committed to bringing quality products to support this cause.
        </p>

        {/* Conditional content */}
        {isExpanded && (
          <>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: '#333', marginBottom: '15px' }}>
              Products we offer
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
              We offer products for Bodybuilding, Weight Loss, Wellness and Accessories. Our best seller products and categories include Whey Proteins, Mass Gainers, Vitamins, BCAAs, Creatine, Pre Workouts. We list and fulfil all popular and top supplement brands in India. Our best seller brands include Nutrabay, Optimum Nutrition, Ultimate Nutrition, MuscleBlaze, Dymatize, GNC, Universal Nutrition, GAT Sport, MuscleTech, MusclePharm and many more.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: '#333', marginBottom: '15px' }}>
              Authenticity Guarantee
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
              Nutrabay is the only online supplement store in India that can truly guarantee authenticity. When purchasing from our website, you never have to worry about getting a harmful substance and be 100% confident on what you get.
            </p>
          </>
        )}

        {/* Toggle Button - Centered */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={toggleContent}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '0',
            }}
          >
            {isExpanded ? 'View less' : 'View all'} <span>{isExpanded ? '▲' : '▼'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInfo;
