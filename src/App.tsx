import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from 'components/navBar/navBar';
import { HomePage } from 'components/pages/homePage/homePage';

const App: React.FC = () => {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/about-me">
          About Me
        </Route>
        <Route>
          404 Not Found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
