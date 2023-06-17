import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ProfileCard } from './ProfileCard';

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/community">Community</Link>
        </li>
        <li>
          <ProfileCard /> 
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
