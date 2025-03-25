import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSignInAlt, FaStore, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

function NavBar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          StellarStock
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <FaSignInAlt /> Login
          </NavLink>
          <NavLink to="/sell" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <FaStore /> Sell on StellarStocks
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <FaUserPlus /> Sign Up
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link cart-link" : "cart-link")}>
            <FaShoppingCart /> Cart ({cartItemCount})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
