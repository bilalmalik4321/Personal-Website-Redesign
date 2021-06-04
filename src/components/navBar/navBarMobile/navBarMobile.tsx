/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the mobile Nav bar, implemented through a hamburger
 */

import { ReactComponent as Hamburger } from "images/hamburger.svg";
import { ReactComponent as Close } from "images/close.svg";
import { useAppContext } from "appContext";
import { NavBarModal } from "./navBarModal";
import { Link } from "react-router-dom";
import "styles/navBarMobile.css";

export const NavBarMobile: React.FC = () => {
    
    const {hamburgerOpen, setHamburgerOpen} = useAppContext();
    
    return(
        <ul className="nav-bar-container">
            <li className="mobile-nav-link-container">
                <Link className="nav-link" to="/">
                    <h2 className="mobile-nav-link">Bilal Malik</h2>
                </Link>
            </li>
            <li>
                { hamburgerOpen ? (
                        <div className="hamburger-icon-padding">
                            <Close className="hamburger-icon"/>
                        </div>
                    ):(
                        <div className="hamburger-icon-padding">
                            <Hamburger className="hamburger-icon" onClick={(e)=>{e.stopPropagation();setHamburgerOpen(true);}}/>
                        </div>
                    )
                }
            </li>
            { hamburgerOpen && 
            <div className="modal-component-class">
                <NavBarModal/>
            </div>
            }
        </ul>
    );
}
