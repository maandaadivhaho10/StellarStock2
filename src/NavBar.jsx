import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaSignInAlt, 
  FaUserPlus, 
  FaShoppingCart, 
  FaSearch,
  FaUserCircle,
  FaDollarSign
} from 'react-icons/fa';

import './NavBar.css';

function NavBar({ cartItemCount }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          StellarStocks
        </NavLink>
        
        <div className="navbar-links">
          {!isLandingPage && (
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
            >
              <FaHome className="nav-icon" /> 
              <span className="nav-text">Home</span>
            </NavLink>
          )}



          <NavLink 
            to="/track-order" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FaSearch className="nav-icon" />
            <span className="nav-text">Track Order</span>
          </NavLink>

          <NavLink
            to="/Sell"
            className={({ isActive }) => (isActive ? "active-link sell-link" : "sell-link")}
          >
            <FaDollarSign className="nav-icon" />
            <span className="nav-text">Sell</span>
          </NavLink>

        

          <NavLink 
            to="/cart" 
            className={({ isActive }) => (isActive ? "active-link cart-link" : "cart-link")}
          >


            <FaShoppingCart className="nav-icon" />
            <span className="nav-text">Cart</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </NavLink>

          <div className="account-dropdown">
            <button className="account-btn">
              <FaUserCircle className="nav-icon" />
              <span className="nav-text">Account</span>
            </button>
            <div className="dropdown-content">
              <NavLink to="/login">
                <FaSignInAlt /> Login
              </NavLink>
              <NavLink to="/signup">
                <FaUserPlus /> Sign Up
              </NavLink>
              <NavLink to="/profile">
                <FaUserCircle /> Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
