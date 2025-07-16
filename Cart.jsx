import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f5f5f5' }}>
    
      <div className="text-center pt-4">
        <h2 style={{ fontWeight: 'bold', color: '#232a37' }}>SHOPPING CART</h2>
      </div>

      
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="text-center">
          
          <img
            src="https://cdn2.nutrabay.com/images/emptyCartImage.svg"
            alt="Empty Cart Illustration"
            className="img-fluid mb-4"
            style={{ maxWidth: '300px' }}
          />

          <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            YOUR CART IS EMPTY
          </h3>

          <p className="mb-4" style={{ fontSize: '16px', color: '#666' }}>
            Looks like you haven't added any items to the cart yet. Start shopping to fill it up!
          </p>

          
          <div className="d-flex flex-column align-items-center gap-3">
            <button
              className="btn text-white px-4 py-2"
              style={{ borderRadius: '5px', width: '200px', backgroundColor: '#f38b58' }}
              onClick={() => navigate('/login')}
            >
              Login / Sign Up
            </button>

            <button
              className="btn btn-warning text-white px-4 py-2"
              style={{ borderRadius: '5px', width: '200px' }}
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
