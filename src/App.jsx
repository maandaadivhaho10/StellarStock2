import React ,{useState}from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './Login';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import Sell from './Sell';
import SignupPage from './SignupPage';
import Cart from './AddToCart';
import Payment from './Payment';
import './index.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };


  return (
    
      <Router>
      <NavBar cartItemCount={cartItems.length} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}  />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
