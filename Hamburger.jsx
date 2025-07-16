import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Login';

const Hamburger = ({ showButton = true }) => {
  const [activeTab, setActiveTab] = useState('categories'); 

  return (
    <div>
      
      {showButton && (
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidePanel"
          aria-controls="sidePanel"
          aria-label="Toggle Menu"
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </button>
      )}

    
      <div
        className="offcanvas offcanvas-start bg-light text-dark"
        tabIndex="-1"
        id="sidePanel"
        aria-labelledby="sidePanelLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidePanelLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* Login / Register Section */}
          <div className="mb-3">
            <button
              className="btn bg-light text-dark w-100"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login / Register
            </button>
          </div>

          {/* Navigation Icons in Table */}
          <table className="table table-borderless mb-3">
            <tbody>
              <tr>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-person me-2"></i> My Account
                  </button>
                </td>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-box me-2"></i> My Orders
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-shield-check me-2"></i> Authenticity
                  </button>
                </td>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-calendar me-2"></i> Nutrabay Products
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-percent me-2"></i> Offers
                  </button>
                </td>
                <td className="p-1" style={{ border: '1px solid #ddd' }}>
                  <button className="btn bg-light text-dark w-100 d-flex align-items-center justify-content-start">
                    <i className="bi bi-heart me-2"></i> Support
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Categories and Brands Tabs */}
          <div className="d-flex justify-content-between px-2 mb-3">
            <span
              onClick={() => setActiveTab('categories')}
              style={{
                color: activeTab === 'categories' ? '#f38b58' : 'black',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              CATEGORIES
            </span>
            <span
              onClick={() => setActiveTab('brands')}
              style={{
                color: activeTab === 'brands' ? '#f38b58' : 'black',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              BRANDS
            </span>
          </div>

          {/* Content List Based on Active Tab */}
          <ul className="list-group mb-3">
            {activeTab === 'categories' ? (
              <>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Sports Nutrition <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Vitamins & Supplements <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Health Food & Drinks <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Workout Equipment <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Tshirts <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  Nutrabay Top 10 <i className="bi bi-chevron-right"></i>
                </li>
              </>
            ) : (
              <>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/nutrabay" className="text-dark text-decoration-none">
                    Nutrabay
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/optimum-nutrition" className="text-dark text-decoration-none">
                    Optimum Nutrition
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/ultimate-nutrition" className="text-dark text-decoration-none">
                    Ultimate Nutrition
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/muscleblaze" className="text-dark text-decoration-none">
                    MuscleBlaze
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/dymatize" className="text-dark text-decoration-none">
                    Dymatize
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="list-group-item bg-light text-dark border-0 d-flex justify-content-between align-items-center">
                  <a href="https://nutrabay.com/brand/gnc" className="text-dark text-decoration-none">
                    GNC
                  </a>
                  <i className="bi bi-chevron-right"></i>
                </li>
              </>
            )}
          </ul>

          {/* Download App Section */}
          <div className="text-center">
            <p className="mb-2">Download App</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-dark">
                <i className="bi bi-apple" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-android2" style={{ fontSize: '2rem' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login / Register</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;