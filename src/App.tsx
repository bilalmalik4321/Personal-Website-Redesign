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
import { AboutPage } from 'components/pages/aboutPage/aboutPage';
import { Footer } from 'footer';
import { Experience } from 'components/experience/experience';

const App: React.FC = () => {

  return (
    <Router>
      <NavBarContext>
        <NavBar/>
      </NavBarContext>
      <Switch>
        <Route path="/about-me">
          <AboutPage/>
        </Route>
        <Route path="/experience">
          <Experience/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route>
          404 Not Found
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
