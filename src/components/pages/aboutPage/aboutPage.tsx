/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */
import 'styles/aboutPage.css';
import { AboutContent } from './aboutContent';
import { AboutHeadshot } from './aboutHeader';
import { ContactMe } from './contactMe';

export const AboutPage: React.FC  = () => {
    
    return (
       <div className="about-container">
           <AboutHeadshot/>
           <AboutContent/>
           <ContactMe/>
        </div>
    );
}
