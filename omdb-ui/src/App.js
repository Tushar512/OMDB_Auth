import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect
} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import SearchPage from './pages/SearchPage/SearchPage';
// import DetailsPage from './pages/DetailsPage/DetailsPage';

// import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

/**
 * The Router maps a url to a component
 */
function App() {
  return (
    <div className="container-fluid remove-padding">
      <Router>
        {/* <Switch> */}
          {/* <NavBar /> */}
          <br/>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          {/* <Route path="/search" component={SearchPage} /> */}
          {/* <Route path="/details/:imdbID" component={DetailsPage} /> */}
          {/* <Redirect to="/signup" /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
