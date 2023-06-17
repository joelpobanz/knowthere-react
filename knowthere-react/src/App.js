import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import React, { useState } from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import NavBar from './components/Navbar';
import Products from './components/Products'; // Import the Products component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
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
      ) : (
        <div>Welcome to the content delivery platform!</div>
      )}
    </div>
  );
}

export default App;
