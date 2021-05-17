/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the mobile Nav bar, implemented through a hamburger
 */

import { ReactComponent as Hamburger } from "images/hamburger.svg";
import { ReactComponent as Close } from "images/close.svg";
import { useNavBarContext } from "../navBarContext";
import { NavBarModal } from "./navBarModal";
import "styles/navBarMobile.css";

export const NavBarMobile: React.FC = () => {
    
    const {hamburgerOpen, setHamburgerOpen} = useNavBarContext();
    
    return(
        <ul className="nav-bar-container">
            <li>
                <h2>Bilal Malik</h2>
            </li>
            <li>
                { hamburgerOpen ? (
                        <Close className="close-padding" onClick={()=>setHamburgerOpen(false)}/>
                    ):(
                        <Hamburger className="hamburger-padding" onClick={()=>setHamburgerOpen(true)}/>
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
