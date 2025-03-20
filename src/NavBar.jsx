import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ cartItemCount }) {
    return (
      <>
      <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">StellarStock</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Sell">Sell on StellarStocks</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart" className="cart-link">🛒 Cart ({cartItemCount})</Link>
        </div>
      </div>
    </nav>
      </>
    )
  }
  
  export default NavBar;
