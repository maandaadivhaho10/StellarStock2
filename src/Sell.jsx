import React, { useState } from 'react';
import './Sell.css';

function Sell({ addProduct }) {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productDescription || !productPrice || !productImage) {
      setError('All fields are required');
      return;
    }

    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      imageUrl: URL.createObjectURL(productImage), // Create a URL for the uploaded image
    };

    // Pass the new product to the parent component (Home page)
    addProduct(newProduct);

    // Clear the form fields after submission
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImage(null);
    setError('');
  };

  return (
    <div className="sell-page">
      <h2>Sell on StellarStock</h2>
      <form onSubmit={handleSubmit} className="sell-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}

export default Sell;
