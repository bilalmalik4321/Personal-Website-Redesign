/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { Header } from "./header";
import { HeaderProjects } from "./homeProjects/homeProjects";
import 'styles/homePage.css';

export const HomePage: React.FC  = () => {
    return (
        <>
            <Header/>
            <HeaderProjects/>
        </>
    );
}