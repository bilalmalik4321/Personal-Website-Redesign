/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

interface ContactLinkPropType {
    title:string,
    icon:any,//TODO: close in type
    link:string|undefined,
    color: string,
    secondaryColor: string,
    tertiaryColor: string
}

export const ContactLink: React.FC<ContactLinkPropType>  = (props) => {
    
    return (
       <a href={props.link} target="_blank" className="contact-link">
           <div style={{display:"inline-block"}}>{props.icon}</div>
           <h3 style={{display:"inline-block"}}>{props.title}</h3>
        </a>
    );
}
