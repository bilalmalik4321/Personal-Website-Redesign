import React from "react";
import { Link } from "react-router-dom";

interface PropType {
    closeHamburger:Function,
}

export const NavBarModal = ({closeHamburger}:PropType) => (
        <div className="modal-container">
            <Link className="nav-link" to="experience" onClick={()=>closeHamburger()}>
                <h2 className="mobile-nav-link">Experience</h2>
            </Link>
            <Link className="nav-link" to="about-me" onClick={()=>closeHamburger()}>
                <h2 className="mobile-nav-link">About Me</h2>
            </Link>
            <Link className="nav-link" to="about-me" onClick={()=>closeHamburger()}>
                <h2 className="mobile-nav-link">Projects</h2>
            </Link>
            <Link className="nav-link" to="about-me" onClick={()=>closeHamburger()}>
                <h2 className="mobile-nav-link">Resume</h2>
            </Link>
        </div>
    )
