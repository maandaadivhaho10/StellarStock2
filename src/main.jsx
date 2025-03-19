import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main app component

// Get the root element where your app will be rendered
const rootElement = document.getElementById('root');

// Create a root and render the App component inside it
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
