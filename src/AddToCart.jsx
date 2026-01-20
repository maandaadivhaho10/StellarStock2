import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function AddToCart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Function to safely convert price
  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return Number(price.replace(/[^0-9.]/g, '')); // Remove non-numeric characters
    }
    return Number(price);
  };

  // Calculate total price safely
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parsePrice(item.price);
    return isNaN(price) ? total : total + price;
  }, 0);

  // Handle Payment Navigation
  const handlePaymentNavigation = () => {
    if (isLoggedIn) {
      navigate('/payment');
    } else {
      alert('You need to log in before proceeding to payment.');
      navigate('/login');
    }
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item, index) => {
              const itemPrice = parsePrice(item.price);

              return (
                <div key={index} className="cart-item">
                  <img src={item.images[0]} alt={item.name} className="cart-image" />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>R{isNaN(itemPrice) ? '0.00' : itemPrice.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <h3>Total: R{totalPrice.toFixed(2)}</h3>
            <button onClick={handlePaymentNavigation}>Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
