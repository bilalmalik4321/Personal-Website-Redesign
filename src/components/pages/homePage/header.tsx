/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { ReactComponent as DownArrow } from "../../../images/down-arrow.svg";

export const Header: React.FC  = () => {
    return (
        <div className="header-wrapper">
            <div className="home-text-wrapper">
                <div className="heading-small position-heading">Full Stack Developer</div>
                <div className="name-heading">Bilal Malik</div>
                <div className="heading-small">Previously @ WSIB Innovation Lab</div>
                <DownArrow style={{height:82, paddingTop: "2vh"}}/>
            </div>
        </div>
    );
}
