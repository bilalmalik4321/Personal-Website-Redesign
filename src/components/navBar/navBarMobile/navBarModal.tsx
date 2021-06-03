import { Link } from "react-router-dom";

export const NavBarModal = () => (
        <div className="modal-container">
            <Link className="nav-link" to="experience">
                <h2 className="mobile-nav-link">Experience</h2>
            </Link>
            <Link className="nav-link" to="about-me">
                <h2 className="mobile-nav-link">About Me</h2>
            </Link>
            <Link className="nav-link" to="about-me">
                <h2 className="mobile-nav-link">Projects</h2>
            </Link>
            <Link className="nav-link" to="about-me">
                <h2 className="mobile-nav-link">Resume</h2>
            </Link>
        </div>
    )
