import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import React, { useState } from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import Products from './components/Products';
import AuthContext from './utils/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (history) => {
    setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated: isLoggedIn }}>
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
