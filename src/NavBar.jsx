import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaStore, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

function NavBar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          StellarStock
        </Link>
        <div className="navbar-links">
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/sell">
            <FaStore /> Sell on StellarStocks
          </Link>
          <Link to="/signup">
            <FaUserPlus /> Sign Up
          </Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart /> Cart ({cartItemCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
