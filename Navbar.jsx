import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'font-awesome/css/font-awesome.min.css';
// Importing Hamburger component
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#232a37' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Hamburger icon */}
          <span className="navbar-toggler" style={{ color: 'white', marginRight: '8px' }}>
            <Hamburger />
          </span>
          {/* PROTEINBAY clickable brand name */}
          <Link to="/" className="navbar-brand fw-bolder fs-2 fst-italic text-light" style={{ display: 'inline-block' }}>
            PROTEINBAY
          </Link>
        </div>

        <form className="d-flex mx-auto" style={{ width: '60%' }}>
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Products, Category, Brands, And More"
              aria-label="Search"
              style={{
                minWidth: '300px',
                padding: '12px 15px',
                fontSize: '16px',
                height: '50px'
              }}
            />
            <button className="btn btn-outline-light" type="submit" style={{ height: '50px' }}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>

        <div className="d-flex align-items-center">
          <div className="btn-group me-2">
            {/* Corrected Link to navigate to /login */}
            <Link
              to="/login"
              className="btn dropdown-toggle"
              style={{
                border: 'none',
                color: 'white',
                backgroundColor: 'transparent',
                fontSize: '18px',
                padding: '10px 15px'
              }}
            >
              <i className="fa fa-user me-1"></i> Login
            </Link>
          </div>

          <div
            style={{
              height: '30px',
              width: '1px',
              backgroundColor: 'white',
              margin: '0 10px'
            }}
          />

          {/* Link the Cart component to the cart button */}
          <Link
            to="/cart"
            className="btn"
            style={{
              border: 'none',
              color: 'white',
              backgroundColor: 'transparent',
              fontSize: '18px',
              padding: '10px 15px'
            }}
          >
            <i className="fa fa-shopping-cart me-1"></i> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
