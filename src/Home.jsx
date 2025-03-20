import React from 'react';
import product1Image from './assets/blacket.webp';
import product2Image from './assets/headsets.webp';
import product3Image from './assets/somehood.webp';
import product4Image from './assets/nikeshoe.webp';
import product5Image from './assets/blacket.webp';
import product6Image from './assets/perfume.jpg';
import product7Image from './assets/speaker.jpg';
import product8Image from './assets/charger.jpg';
import './Home.css';

function Home({ addToCart }) {
  // Sample product data
  const products = [
    { id: 1, name: 'Cozy Blackent Jacket', description: 'A sleek and comfortable blackent perfect for both chilly and stylish days.', price: 'R25.00', imageUrl: product1Image },
    { id: 2, name: 'Wireless Headsets', description: 'Experience superior sound quality and comfort with these noise-canceling wireless headsets.', price: 'R40.00', imageUrl: product2Image },
    { id: 3, name: 'Comfortable Hoodie', description: 'Stay warm and stylish with this cozy hoodie, perfect for casual outings and relaxation.', price: 'R35.00', imageUrl: product3Image },
    { id: 4, name: 'Nike Sports Shoes', description: 'Boost your performance with these lightweight and durable Nike sports shoes.', price: 'R50.00', imageUrl: product4Image },
    { id: 5, name: 'Portable Charger', description: 'A durable Portable Charger, perfect for travel and daily use.', price: 'R25.00', imageUrl: product8Image },
    { id: 6, name: 'Elegant Perfume', description: 'A fragrance that captures elegance, with a long-lasting scent.', price: 'R40.00', imageUrl: product6Image },
    { id: 7, name: 'Portable Bluetooth Speaker', description: 'Take your music anywhere with this compact and powerful Bluetooth speaker.', price: 'R35.00', imageUrl: product7Image },
    { id: 8, name: 'Fast Charging Cable', description: 'A durable and fast-charging cable for your devices, built for efficiency.', price: 'R50.00', imageUrl: product5Image },
  ];

  return (
    <div className="home-page">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
