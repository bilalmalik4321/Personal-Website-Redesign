/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { ReactComponent as Close } from "images/close.svg";
import "styles/projectModal.css";

interface ProjectModalProps {
    setProjectModal: Function
}

export const ProjectModal: React.FC<ProjectModalProps>  = ({setProjectModal}) => {
    return (
        <div className="project-modal-container" onClick={(e)=>e.stopPropagation()}>
            <div className="project-modal-content-container">
            <Close className="project-modal-close-icon" onClick={()=>setProjectModal(false)}/>
            <h1>modal</h1>
            </div>
        </div>
    );
}

