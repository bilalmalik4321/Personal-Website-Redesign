/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */
import EmailIcon from '@material-ui/icons/Email';
import { ReactComponent as Github } from "images/github.svg";
import { ReactComponent as Linkedin } from "images/linkedin.svg";
import 'styles/aboutPage.css';
import { ContactLink } from './contactLink';

export const ContactMe: React.FC  = () => {

    const contactLinks = [
        {
            title: "My Linkedin",
            icon: <Linkedin height="40" width="40"/>,
            link:"https://www.linkedin.com/in/bilal-malik97/",
            color: "linkedinPrimary",
            secondaryColor: "linkedinSecondary",
            tertiaryColor: "linkedinTertiary"
        },
        {
            title: "My Email",
            icon: <EmailIcon style={{color:"purple", fontSize:40}}/>,
            color: "emailPrimary",
            secondaryColor: "emailSecondary",
            tertiaryColor: "emailTertiary"
        },
        {
            title: "My Github",
            icon: <Github height="40" width="40"/>,
            link:"https://github.com/bilalmalik4321",
            color: "githubPrimary",
            secondaryColor: "githubSecondary",
            tertiaryColor: "githubTertiary"
        },
        {
            title: "My Linkedin",
            icon: <Linkedin height="40" width="40"/>,
            link:"https://www.linkedin.com/in/bilal-malik97/",
            color: "linkedinPrimary",
            secondaryColor: "linkedinSecondary",
            tertiaryColor: "linkedinTertiary"
        }
    ];
    
    return (
       <div className="contact-me-container">
           {contactLinks.map((link)=>(
                <div className="contact-link-container"><ContactLink title={link.title} icon={link.icon} link={link.link} color={link.color} secondaryColor={link.secondaryColor} tertiaryColor={link.tertiaryColor}/></div>)
            )}
        </div>
    );
}
