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
import product1Image from './assets/blacket.webp';
import product2Image from './assets/headsets.webp';
import product3Image from './assets/somehood.webp';
import product4Image from './assets/nikeshoe.webp';
import product5Image from './assets/blacket.webp';
import product6Image from './assets/perfume.jpg';
import product7Image from './assets/speaker.jpg';
import product8Image from './assets/charger.jpg';
import './index.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const [products, setProducts] = useState([{ id: 1, name: 'Cozy Blackent Jacket', description: 'A sleek and comfortable blackent perfect for both chilly and stylish days.', price: '25.00', imageUrl: product1Image },
    { id: 2, name: 'Wireless Headsets', description: 'Experience superior sound quality and comfort with these noise-canceling wireless headsets.', price: '40.00', imageUrl: product2Image },
    { id: 3, name: 'Comfortable Hoodie', description: 'Stay warm and stylish with this cozy hoodie, perfect for casual outings and relaxation.', price: '35.00', imageUrl: product3Image },
    { id: 4, name: 'Nike Sports Shoes', description: 'Boost your performance with these lightweight and durable Nike sports shoes.', price: '50.00', imageUrl: product4Image },
    { id: 5, name: 'Portable Charger', description: 'A durable Portable Charger, perfect for travel and daily use.', price: 'R25.00', imageUrl: product8Image },
    { id: 6, name: 'Elegant Perfume', description: 'A fragrance that captures elegance, with a long-lasting scent.', price: 'R40.00', imageUrl: product6Image },
    { id: 7, name: 'Portable Bluetooth Speaker', description: 'Take your music anywhere with this compact and powerful Bluetooth speaker.', price: '35.00', imageUrl: product7Image },
    { id: 8, name: 'Fast Charging Cable', description: 'A durable and fast-charging cable for your devices, built for efficiency.', price: '50.00', imageUrl: product5Image },]);


  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };



  return (
    
      <Router>
      <NavBar cartItemCount={cartItems.length} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} products={products} />} />
          <Route path="/Sell" element={<Sell addProduct={addProduct} />} />
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
