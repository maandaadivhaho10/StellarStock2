import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>
      
      <div className="product-details-container">
        <div className="product-images-section">
          <div className="main-image-container">
            <img src={mainImage} alt={product.name} className="main-product-image" />
          </div>
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} ${index + 1}`} 
                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-section">
          <p className="product-category">{product.category}</p>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">R{product.price}</p>
          
          <div className="product-description-container">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="delivery-info">
            <p><strong>Shipping:</strong> {product.delivery}</p>
            <p><strong>Returns:</strong> 30-day easy returns</p>
          </div>

          <button 
            className="add-to-cart-large-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
