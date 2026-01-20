import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatBoard from './ChatBoard';
import './Home.css';

function Home({ addToCart, products }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="home-page">
      <ChatBoard />
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to StellarStocks</h1>
          <p>Find the best deals on premium products.</p>
        </div>
      </div>

      <div className="categories-bar">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card-simple">
            <Link to={`/products/${product.id}`} className="product-link">
              <div className="product-image-wrapper">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="product-image" 
                  loading="lazy"
                />
                <div className="product-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="product-info-minimal">
                <h3 className="product-name-minimal">{product.name}</h3>
                <span className="product-price-minimal">R{product.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
