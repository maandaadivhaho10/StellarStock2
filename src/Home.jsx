import React from 'react';
import { Link } from 'react-router-dom';
import ChatBoard from './ChatBoard';
import './Home.css';

function Home({ addToCart, products }) {
  return (
    <div className="home-page">
      <ChatBoard />
      <h1 className="page-title">Our Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-image-container">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="product-image" 
                loading="lazy"
              />
            </Link>

            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">R{product.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Home;
