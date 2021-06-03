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
import { useWindowSize } from 'useWindowSize';
import { ContactLink } from './contactLink';
import { ContactMeDesktop } from './contactMeDesktop';

export const ContactMe: React.FC  = () => {

    const { width } = useWindowSize();
    // width>750 desktop

    const contactLinks = [
        {
            title: "My Github",
            icon: <Github height="40" width="40"/>,
            link:"https://github.com/bilalmalik4321",
            color: "github-primary",
            secondaryColor: "github-secondary",
            tertiaryColor: "githubTertiary"
        },
        {
            title: "My Linkedin",
            icon: <Linkedin height="40" width="40"/>,
            link:"https://www.linkedin.com/in/bilal-malik97/",
            color: "linkedin-primary",
            secondaryColor: "linkedin-secondary",
            tertiaryColor: "linkedinTertiary"
        },
        {
            title: "My Email",
            icon: <EmailIcon style={{color:"#8600b3", fontSize:40}}/>,
            link: "mailto:bilalmalik4321@egmail.com",
            color: "email-primary",
            secondaryColor: "email-secondary",
            tertiaryColor: "emailTertiary"
        }
    ];
    
    if(width > 750){
        return <ContactMeDesktop contactLinkObject={contactLinks}/>;
    }else {
        return (
            <div className="contact-me-container">
                {contactLinks.map((link)=>(
                     <div className="contact-link-container">
                             <ContactLink title={link.title} icon={link.icon} link={link.link} color={link.color} secondaryColor={link.secondaryColor} tertiaryColor={link.tertiaryColor}/>
                     </div>
                     )
                 )}
             </div>
         );
    }
    
}
