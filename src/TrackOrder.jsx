import React from 'react';
import './TrackOrder.css';

function TrackOrder() {
  return (
    <div className="track-order-container">
      <h1>Track Your Order</h1>
      <div className="order-search">
        <input 
          type="text" 
          placeholder="Enter your order ID"
          className="order-input"
        />
        <button className="track-button">Track Order</button>
      </div>
      <div className="order-details">
        {/* Order details will be displayed here */}
        <p>Enter your order ID to view order status</p>
      </div>
    </div>
  );
}

export default TrackOrder;
