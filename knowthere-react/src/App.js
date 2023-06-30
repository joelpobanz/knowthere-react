import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import React, { useState } from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import Products from './components/Products';
import AuthContext from './utils/AuthContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe:
const stripePromise = loadStripe('your_stripe_public_key');

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (history) => {
    setIsLoggedIn(true);
    history.push("/");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Also remove token or any user data stored when user logged in
    localStorage.removeItem('authToken');
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated: isLoggedIn,  logout: handleLogout }}>
        <Elements stripe={stripePromise}>
          <Router>
            <>
              <NavBar />
              <Switch>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/login">
                  <Login onLoginSuccess={handleLoginSuccess} />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/">
                  <LandingPage />
                </Route>
              </Switch>
            </>
          </Router>
        </Elements>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
