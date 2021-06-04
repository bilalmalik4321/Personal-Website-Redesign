/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { Header } from "./header";
import { HomeProjects } from "./homeProjects/homeProjects";
import { useHomeContext } from "./homeContext";
import 'styles/homePage.css';

export const HomePage: React.FC  = () => {

    const {projectModal,setProjectModal} = useHomeContext();

    return (
        <div onClick={()=>{
        if(projectModal)setProjectModal(false);
        }}>
            <Header/>
            <HomeProjects/>

        </div>
    );
}