import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Google } from 'react-bootstrap-icons';
import {
  auth,
  googleProvider
} from './firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert('Account created and logged in!');
        } catch (createErr) {
          console.error('Signup failed:', createErr.message);
          alert(createErr.message);
        }
      } else {
        console.error('Login failed:', error.message);
        alert(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google sign-in successful!');
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-uppercase" style={{ color: '#333' }}>PROTEINBAY</h1>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="bg-warning text-dark px-3 py-1 me-2" style={{ borderRadius: '5px' }}>
              NEW USER OFFER
            </div>
            <div className="bg-light border border-secondary px-3 py-1" style={{ borderRadius: '5px' }}>
              Use Code <span className="fw-bold">PROTEINBAY5</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mx-auto" style={{ maxWidth: '400px' }}>
          <h3 className="text-center mb-4">LOGIN / REGISTER</h3>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: '5px' }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: '5px' }}
            />
          </div>

          <button
            className="btn btn-warning w-100 mb-3"
            style={{ borderRadius: '5px', color: 'white' }}
            onClick={handleEmailLogin}
          >
            Continue
          </button>

          <div className="text-center mb-3">or</div>

          <button
            className="btn btn-light w-100 d-flex align-items-center justify-content-center"
            style={{ borderRadius: '5px', border: '1px solid #ccc' }}
            onClick={handleGoogleLogin}
          >
            <Google className="me-2" />
            Login With Google
          </button>

          <div className="mt-4 text-center">
            <small>
              By continuing, you agree to PROTEINBAY's{' '}
              <a href="#" className="text-primary">Terms of Use</a> and{' '}
              <a href="#" className="text-primary">Privacy Policy</a>.
            </small>
            <p className="mt-2">
              Facing issue with Login? Email us at{' '}
              <a href="mailto:friends@PROTEINBAY.com" className="text-primary">friends@PROTEINBAY.com</a>
            </p>
            <ul className="list-unstyled text-start mt-3">
              <li className="mb-2"><span className="text-success me-2">✔</span> Check your past orders</li>
              <li className="mb-2"><span className="text-success me-2">✔</span> Track your orders</li>
              <li className="mb-2"><span className="text-success me-2">✔</span> Access saved products</li>
            </ul>
          </div>
        </div>

        <div className="position-fixed bottom-0 end-0 p-3">
          <div className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '40px', height: '40px' }}>
            E
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
