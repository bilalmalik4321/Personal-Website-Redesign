/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { useWindowSize } from "useWindowSize";

export const AboutContent: React.FC  = () => {

    const { width } = useWindowSize();
    
    return (
        <div className={`${width>750 ? "about-content-container":"about-content-container-mobile"}`}>
            <h1>
                Hi, I'm Bilal. A <span className="about-position-text">Full Stack Developer</span> and student at the University of Windsor, for Honours Computer Science.
            </h1>
            <h1>
                I started my development journey over <span className="about-secondary-text">3 years ago</span>, in September 2018.
            </h1>
            <h1>
                I've worked with <span  className="about-secondary-text">4 organizations</span>, and have built 20+ projects on my spare time.
            </h1>
            <h1>
                I've finished up my latest internship for 12 months at the <span className="about-position-text">WSIB Innovation Lab</span> as a Full Stack Developer.
            </h1>
            <h1>
                In my freetime, I play basketball, football, and baseball.
            </h1>
        </div>
    );
}
