/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: The is the very top component of the application, with all other components being descendants
* of this, the App.tsx file acts as the brian, by controlling routing throughout the app
 */

import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from 'components/navBar/navBar';
import { HomePage } from 'components/pages/homePage/homePage';
import { NavBarContext } from 'components/navBar/navBarContext';

const App: React.FC = () => {

  return (
    <Router>
      <NavBarContext>
        <NavBar/>
      </NavBarContext>
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
