import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function AddToCart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  // Function to safely convert price
  const parsePrice = (price) => {
    if (typeof price === "string") {
      return Number(price.replace(/[^0-9.]/g, "")); // Remove non-numeric characters
    }
    return Number(price);
  };

  // Calculate total price safely
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parsePrice(item.price);
    return isNaN(price) ? total : total + price;
  }, 0);

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
              console.log("Item:", item);
              console.log("Parsed Price:", itemPrice);

              return (
                <div key={index} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} className="cart-image" />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>R{isNaN(itemPrice) ? "0.00" : itemPrice.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <h3>Total: R{totalPrice.toFixed(2)}</h3>
            <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
