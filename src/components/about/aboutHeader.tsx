/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */
import headshot from "images/headshot.jpeg";


export const AboutHeadshot: React.FC  = () => {
    
    return (
       <div className="headshot-container">
           <img src={headshot} className="headshot-image" alt="Bilal Malik Headshot"/>
        </div>
    );
}
