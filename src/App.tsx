import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router,Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          Home
          <Link to='/about-me'>go to about me</Link>
        </Route>
        <Route exact path="/about-me">
          About Me
          <Link to='/'>go to home page</Link>
        </Route>
        <Route>
          404 Not Found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
