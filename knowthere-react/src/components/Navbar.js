import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ProfileCard } from './ProfileCard';
import { LoginCard } from './LoginCard';
import AuthContext from '../utils/AuthContext'

const NavBar = () => {
  // Use useContext hook to access the isAuthenticated value from AuthContext
  const { isAuthenticated } = useContext(AuthContext);

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
          { isAuthenticated ? <ProfileCard /> : <LoginCard /> }
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
