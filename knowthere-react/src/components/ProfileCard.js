import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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

const ProfileCard = () => {
    return (
        <div style={cardStyle}>
            <Link to="/profile" style={buttonStyle}>
                <Button as="a" variant="primary">
                    <FontAwesomeIcon icon={faUser} />
                </Button>
            </Link>
            <Link to="/shopping-cart" style={buttonStyle}>
                <Button as="a" variant="primary">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
            </Link>
            <Link to="/login" style={buttonStyle}>
                <Button as="a" variant="secondary">
                    Sign Out
                </Button>
            </Link>
        </div>
    );
};

export { ProfileCard };
