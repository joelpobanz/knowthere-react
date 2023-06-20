import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignIn } from '@fortawesome/free-solid-svg-icons';
import '../styles/LoginCard.css';

const buttonStyle = {
    padding: '5px 5px',
    margin: '2px',
    fontSize: '1em',
    backgroundColor: '##FDD835', /* Blue background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    cursor: 'pointer', /* Mouse pointer on hover */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block'
};

const cardStyle = {
    maxWidth: '350px',
    borderRadius: '50px',
    background: '#FDD835',
    boxShadow: '20px 20px 60px #d7b82d, -20px -20px 60px #fff83d',
    margin: '10px',  // Added margin for better view 
};

const LoginCard = () => {
    return (
        <div style={cardStyle}>
            <Link to="/signup" >
                <button class="Btn">
                    <div class="sign"><FontAwesomeIcon icon={faUserPlus} /></div>
                    <div class="text">Signup</div>
                </button>
            </Link>
            <Link to="/login" >
                <button class="Btn">
                    <div class="sign"><FontAwesomeIcon icon={faSignIn} /></div>
                    <div class="text">Login</div>
                </button>
            </Link>
        </div>
    );
};

export { LoginCard };
