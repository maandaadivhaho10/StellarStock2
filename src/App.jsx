import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './Home';
import LoginPage from './Login';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import Sell from './Sell';
import SignupPage from './SignupPage';
import Cart from './AddToCart';
import Payment from './Payment';
import TrackOrder from './TrackOrder';

import product1Image from './assets/blanket.webp';
import product1Image2 from './assets/blanket2.webp';
import product1Image3 from './assets/blanket3.webp';
import product1Image4 from './assets/blacket.webp';

import product2Image from './assets/headsets.webp';
import product2Image2 from './assets/headset1.webp';
import product2Image3 from './assets/headset2.webp';
import product2Image4 from './assets/head3.webp';

import product3Image from './assets/somehood.webp';
import product3Image2 from './assets/hoodie2.webp';
import product3Image3 from './assets/hood3.webp';
import product3Image4 from './assets/hood4.webp';

import product4Image from './assets/nikeshoe.webp';
import product4Image2 from './assets/nike1.jfif';
import product4Image3 from './assets/nike2.webp';
import product4Image4 from './assets/nike3.jfif';

import product6Image from './assets/perfume.jpg';
import product6Image2 from './assets/perfumer1.webp';
import product6Image3 from './assets/perfume2.webp';
import product6Image4 from './assets/perfume 3.webp';

import product7Image from './assets/speaker.jpg';
import product7Image2 from './assets/speaker1.jpg';
import product7Image3 from './assets/speaker2.jfif';
import product7Image4 from './assets/speaker3.jfif';

import product8Image from './assets/charger.jpg';
import product8Image2 from './assets/charger1.jpg';
import product8Image3 from './assets/changer2.jpg';
import product8Image4 from './assets/charger3.jpg';

import product9Image from './assets/tv.jpg';
import product9Image2 from './assets/tv1.jfif';
import product9Image3 from './assets/tv3.jpg';
import product9Image4 from './assets/tv4.webp';

import ProductDetails from './ProductDetails';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Cozy Premium Blanket', 
      category: 'Home & Living',
      description: 'A sleek and comfortable premium blanket perfect for both chilly and stylish days. Made with premium materials for maximum warmth and comfort.', 
      price: '250.00', 
      images: [product1Image, product1Image2, product1Image3, product1Image4],
      delivery: 'Est. delivery: 3-5 business days'
    },
    { 
      id: 2, 
      name: 'Professional Wireless Headsets', 
      category: 'Electronics',
      description: 'Experience superior sound quality and comfort with these noise-canceling wireless headsets. Perfect for high-fidelity music and gaming.', 
      price: '400.00', 
      images: [product2Image, product2Image2, product2Image3, product2Image4],
      delivery: 'Est. delivery: 2-4 business days'
    },
    { 
      id: 3, 
      name: 'Premium Stylish Hoodie', 
      category: 'Clothing',
      description: 'Stay warm and stylish with this cozy hoodie, perfect for casual outings and relaxation. Available in various sizes and modern colors.', 
      price: '350.00', 
      images: [product3Image, product3Image2, product3Image3, product3Image4],
      delivery: 'Est. delivery: 3-5 business days'
    },
    { 
      id: 4, 
      name: 'Nike Sports Elite Shoes', 
      category: 'Footwear',
      description: 'Boost your performance with these lightweight and durable Nike sports shoes. Designed for professional athletes and daily runners.', 
      price: '780.00', 
      images: [product4Image, product4Image2, product4Image3, product4Image4],
      delivery: 'Est. delivery: 4-6 business days'
    },
    { 
      id: 5, 
      name: 'Smart UHD 4K TV', 
      category: 'Electronics',
      description: 'Enjoy crystal clear visuals with this Smart UHD TV. Featuring the latest display technology, HDR support, and smart home integration.', 
      price: '4550.00', 
      images: [product9Image, product9Image2, product9Image3, product9Image4],
      delivery: 'Est. delivery: 5-7 business days'
    },
    { 
      id: 6, 
      name: 'Elegant Luxury Perfume', 
      category: 'Accessories',
      description: 'A fragrance that captures elegance, with a long-lasting scent that leaves a lasting impression wherever you go.', 
      price: '400.00', 
      images: [product6Image, product6Image2, product6Image3, product6Image4],
      delivery: 'Est. delivery: 2-3 business days'
    },
    { 
      id: 7, 
      name: 'Portable Bluetooth Speaker', 
      category: 'Electronics',
      description: 'Take your music anywhere with this compact and powerful Bluetooth speaker. Waterproof, durable, and long-lasting battery.', 
      price: '350.00', 
      images: [product7Image, product7Image2, product7Image3, product7Image4],
      delivery: 'Est. delivery: 2-4 business days'
    },
    { 
      id: 8, 
      name: 'Fast Charging Power Kit', 
      category: 'Electronics',
      description: 'A durable and fast-charging cable and adapter set for your devices, built for efficiency and long-lasting use with reinforced connectors.', 
      price: '555.00', 
      images: [product8Image, product8Image2, product8Image3, product8Image4],
      delivery: 'Est. delivery: 1-2 business days'
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
      <Router>
        <NavBar cartItemCount={cartItems.length} />
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <div className="search-container">
                    <input
                      type="text"
                      className="main-search-input"
                      placeholder="Search for products, brands, and more..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Home addToCart={addToCart} products={filteredProducts} />
                </>
              } 
            />
            <Route 
              path="/Sell" 
              element={
                <Sell 
                  addProduct={addProduct} 
                  products={products} 
                  setProducts={setProducts} 
                />
              } 
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/products/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
            <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/payment" element={<Payment clearCart={clearCart} />} />
            <Route path="/track-order" element={<TrackOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
