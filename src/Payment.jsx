import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51R4l4QHfRZXCihntCfAejyxd6KPuNC5hNiYu9onrHgV5ZHLDkoIhhVCtbPOXTV1mIuSsSBckggDduHFxlPpuBtA2008u8vEoOY');

function CheckoutForm({ clearCart }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!stripe || !elements) {
      setError('Stripe is not properly initialized.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card details not entered.');
      setLoading(false);
      return;
    }

    try {
      const paymentMethodResponse = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: name,
          email: email,
          address: {
            postal_code: zip,
          },
        },
      });

      if (paymentMethodResponse.error) {
        setError(paymentMethodResponse.error.message);
      } else {
        alert('Payment Successful!');
        clearCart(); // Clear the cart
        navigate('/');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        placeholder="John Doe"
      />

      <label>Email</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        placeholder="johndoe@example.com"
      />

      <label>ZIP Code</label>
      <input 
        type="text" 
        value={zip} 
        onChange={(e) => setZip(e.target.value)} 
        required 
        placeholder="12345"
      />

      <label>Card Details</label>
      <CardElement className="card-input" />

      {error && <p className="error">{error}</p>}
      
      <button type="submit" disabled={!stripe || loading} className="pay-button">
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

function Payment({ clearCart }) {
  return (
    <Elements stripe={stripePromise}>
      <div className="payment-page">
        <h2>Payment Page</h2>
        <p>Enter your card details below.</p>
        <CheckoutForm clearCart={clearCart} />
      </div>
    </Elements>
  );
}

export default Payment;
