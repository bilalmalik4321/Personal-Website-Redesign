/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { useWindowSize } from "useWindowSize";

interface ContactLinkPropType {
    title:string,
    icon:any,//TODO: close in type
    link:string,
    color: string,
    secondaryColor: string,
    tertiaryColor: string
}

export const ContactLink: React.FC<ContactLinkPropType>  = (props) =>  {
    const { width } = useWindowSize();
    return(
        <a href={props.link} className={` ${width > 750 ? "contact-link-desktop":"contact-link"} ${props.secondaryColor}`}>
            <div className="link-icon-container">{props.icon}</div>
            <h3 style={{display:"inline-block"}} className={`link-title-container ${props.color}`}>{props.title}</h3>
        </a>
    );
}
