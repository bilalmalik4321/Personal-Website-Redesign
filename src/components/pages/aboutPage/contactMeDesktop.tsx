/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { ContactLink } from "./contactLink";
import React from "react";

interface ContactMeDesktopPropType {
    contactLinkObject: {
        title: string;
        icon: any;
        link: string;
        color: string;
        secondaryColor: string;
        tertiaryColor: string;
    }[]
}

export const ContactMeDesktop: React.FC<ContactMeDesktopPropType>  = ({contactLinkObject}) =>  (
    <div className="contact-me-container contact-me-mobile-container">
        {/* {   contactLinkObject.map((link,index)=>{
            if(){

            }
            return (<></>);
        })
        } */}
        {/* TODO: need to rewrite this to be reuseable */}
        <div className="contact-me-desktop-row">
            <div className="contact-link-container">
                    <ContactLink title={contactLinkObject[0].title} icon={contactLinkObject[0].icon} link={contactLinkObject[0].link} color={contactLinkObject[0].color} secondaryColor={contactLinkObject[0].secondaryColor} tertiaryColor={contactLinkObject[0].tertiaryColor}/>
            </div>
            <div className="contact-link-container">
                    <ContactLink title={contactLinkObject[1].title} icon={contactLinkObject[1].icon} link={contactLinkObject[1].link} color={contactLinkObject[1].color} secondaryColor={contactLinkObject[1].secondaryColor} tertiaryColor={contactLinkObject[1].tertiaryColor}/>
            </div>
        </div>
        <div className="contact-me-desktop-row">
            <div className="contact-link-container">
                    <ContactLink title={contactLinkObject[2].title} icon={contactLinkObject[2].icon} link={contactLinkObject[2].link} color={contactLinkObject[2].color} secondaryColor={contactLinkObject[2].secondaryColor} tertiaryColor={contactLinkObject[2].tertiaryColor}/>
            </div>
        </div>
 </div>
)
