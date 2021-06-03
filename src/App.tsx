/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: The is the very top component of the application, with all other components being descendants
* of this, the App.tsx file acts as the brian, by controlling routing throughout the app
 */

import React from 'react';
import './App.css';
import { NavBarContext } from 'components/navBar/navBarContext';
import { Routing } from 'components/routing/routing';

const App: React.FC = () => {

  return (
    <NavBarContext>
      <Routing/>
    </NavBarContext>
  );
}

export default App;
