import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './Login';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import Sell from './Sell';
import SignupPage from './SignupPage';
import './index.css';


function App() {


  return (
    
      <Router>
      <NavBar />  {/* Add NavBar here */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
