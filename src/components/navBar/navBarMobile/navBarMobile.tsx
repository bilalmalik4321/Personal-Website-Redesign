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
import { Link } from "react-router-dom";

export const NavBarMobile: React.FC = () => {
    
    const {hamburgerOpen, setHamburgerOpen} = useNavBarContext();
    
    return(
        <ul className="nav-bar-container">
            <li className="mobile-nav-link-container">
                <Link className="nav-link" to="/" onClick={()=>setHamburgerOpen(false)}>
                    <h2 className="mobile-nav-link">Bilal Malik</h2>
                </Link>
            </li>
            <li>
                { hamburgerOpen ? (
                        <Close className="close-padding" onClick={()=>{setHamburgerOpen(false);console.log("pressed")}}/>
                    ):(
                        <Hamburger className="hamburger-padding" onClick={()=>{setHamburgerOpen(true);console.log("pressed")}}/>
                    )
                }
            </li>
            { hamburgerOpen && 
            <div className={`modal-component-class`}>
                <NavBarModal closeHamburger={()=>setHamburgerOpen(false)}/>
            </div>
            }
        </ul>
    );
}
