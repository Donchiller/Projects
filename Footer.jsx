import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Instagram, Youtube, GooglePlay, Apple } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Nutrabay</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://nutrabay.com/help-center" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/authenticity" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Authenticity
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/authentic-product" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Authentic Product
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/importers" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Importers
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/brands" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Brands
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/athlab" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Athlab
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/careers" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/affiliate-program" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://nutrabay.com/account" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Your Account
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/orders" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Your Orders
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/track-order" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Track Order
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/sitemap" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Connect with Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://instagram.com/nutrabay" className="text-white text-decoration-none d-flex align-items-center" style={{ fontSize: '14px' }}>
                  <Instagram className="me-2" /> Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="https://youtube.com/nutrabay" className="text-white text-decoration-none d-flex align-items-center" style={{ fontSize: '14px' }}>
                  <Youtube className="me-2" /> Youtube
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Policies</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://nutrabay.com/terms-of-use" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/privacy-policy" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/return-policy" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Return Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="https://nutrabay.com/security-policy" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                  Security Policy
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Download Mobile App</h5>
            <div className="d-flex flex-column gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.nutrabay"
                className="btn btn-dark d-flex align-items-center justify-content-between"
                style={{ borderRadius: '25px', padding: '10px 15px' }}
              >
                <div className="d-flex align-items-center">
                  <GooglePlay size={24} className="me-2" />
                  <div className="text-start">
                    <small style={{ fontSize: '10px', display: 'block' }}>GET IT ON</small>
                    <span style={{ fontSize: '14px' }}>Google Play</span>
                  </div>
                </div>
              </a>
              <a
                href="https://apps.apple.com/app/nutrabay/id123456789"
                className="btn btn-dark d-flex align-items-center justify-content-between"
                style={{ borderRadius: '25px', padding: '10px 15px' }}
              >
                <div className="d-flex align-items-center">
                  <Apple size={24} className="me-2" />
                  <div className="text-start">
                    <small style={{ fontSize: '10px', display: 'block' }}>Available on the</small>
                    <span style={{ fontSize: '14px' }}>App Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <img
              src="https://cdn2.nutrabay.com/images/visa.png"
              alt="Visa"
              style={{ height: '40px', margin: '0 10px' }}
            />
            <img
              src="https://cdn2.nutrabay.com/images/mastercard.png"
              alt="RuPay"
              style={{ height: '40px', margin: '0 10px' }}
            />
            <img
              src="https://cdn2.nutrabay.com/images/rupay.png"
              alt="MasterCard"
              style={{ height: '40px', margin: '0 10px' }}
            />
            <img
              src="https://cdn2.nutrabay.com/images/mestro.png"
              alt="American Express"
              style={{ height: '40px', margin: '0 10px' }}
            />
            <img
              src="https://cdn2.nutrabay.com/images/bank.png"
              alt="Diners Club"
              style={{ height: '40px', margin: '0 10px' }}
            />
            <img
              src="https://cdn2.nutrabay.com/images/chash.png"
              alt="Discover"
              style={{ height: '40px', margin: '0 10px' }}
            />
          </div>
        </div>

        {}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p className="mb-0" style={{ fontSize: '12px' }}>
              © 2016-2025 nutrabay.com, all rights reserved
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;