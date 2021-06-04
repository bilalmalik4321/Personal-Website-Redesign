/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { ProjectIntro } from "./projectIntro";

export const HomeProjects: React.FC  = () => {
    const projectContents = [
        {
            title: "Safe@Work",
            organization:"WSIB Innovation Lab",
            description:"Protecting WSIB employees from COVID-19, as they return to work. "
        },
        {
            title: "Safe@Lab",
            organization:"WSIB Innovation Lab",
            description:"Protecting WSIB employees from COVID-19, as they return to work. "
        },{
            title: "Passport",
            organization:"WSIB Innovation Lab",
            description:"Protecting WSIB employees from COVID-19, as they return to work. "
        },{
            title: "WinHacks",
            organization:"WinHacks Organization",
            description:"Protecting WSIB employees from COVID-19, as they return to work. "
        }
    ]
    return (
        <div className="project-home-container">
            {   projectContents.map((project)=>(
                <div style={{paddingBottom: '2vh'}}>
                    <ProjectIntro title={project.title} organization={project.organization} description={project.description}/>
                </div>
            ))
            } 
        </div>
    );
}

