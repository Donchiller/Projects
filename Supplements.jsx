import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Supplements.css'; // We'll define styles here
import CardRow from './CardRow';

const supplements = [
  {
    id: 1,
    name: 'Nutrabay Wellness Fish Oil Omega 3',
    price: 402,
    originalPrice: 599,
    discount: 'Upto 32% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Bone & Joints',
  },
  {
    id: 2,
    name: 'Nutrabay Pro Fish Oil Omega 3 (Triple Strength)',
    price: 767,
    originalPrice: 1129,
    discount: 'Upto 32% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Bone & Joints',
  },
  {
    id: 3,
    name: 'Neuherbs Deep Sea Omega 3 Fish Oil',
    price: 664,
    originalPrice: 1099,
    discount: 'Upto 39% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Vitality',
  },
  {
    id: 4,
    name: 'Now Foods Omega-3 Fish Oil',
    price: 1749,
    originalPrice: 2500,
    discount: 'Upto 30% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Bone & Joints',
  },
  {
    id: 5,
    name: 'HealthAid Magnesium Orotate 500mg',
    price: 1149,
    originalPrice: 1750,
    discount: 'Upto 34% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Skin & Hair',
  },
  {
    id: 6,
    name: 'Pole Nutrition Joint Support',
    price: 1299,
    originalPrice: 2499,
    discount: 'Upto 48% OFF',
    image: 'https://via.placeholder.com/150',
    category: 'Bone & Joints',
  },
];

const Supplements = () => {
  const [activeTab, setActiveTab] = useState('Bone & Joints');
  const navigate = useNavigate();

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleViewAll = () => {
    navigate('/supplements/all');
  };

  const filteredSupplements = supplements.filter(item => item.category === activeTab);

  return (
    <Container className="my-5">
      

      <ul className="nav nav-tabs mb-4 gap-3">
        {['Bone & Joints', 'Skin & Hair', 'Vitality', 'Sleep'].map((category) => (
          <li className="nav-item" key={category}>
            <span
              className={`nav-link ${activeTab === category ? 'active' : ''}`}
              onClick={() => handleTabClick(category)}
              style={{ cursor: 'pointer' }}
            >
              {category}
            </span>
          </li>
        ))}
      </ul>

      {/* Render the CardRow component and pass the filtered supplements */}
      <CardRow supplements={filteredSupplements} />

      <div className="text-center mt-4">
        <span
          onClick={handleViewAll}
          style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
        >
          View all
        </span>
      </div>
    </Container>
  );
};

export default Supplements;
