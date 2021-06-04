import { useHomeContext } from "../homeContext";
import { ProjectModal } from "./projectModal/projectModal";

/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */
interface ProjectIntroProps {
    title: String,
    organization: String,
    description: String,
}

export const ProjectIntro: React.FC<ProjectIntroProps>  = (props) => {

    const {projectModal, setProjectModal}=useHomeContext();
    
    return (
        <div className="project-home-box">
            {
                projectModal && <ProjectModal setProjectModal={setProjectModal}/>
            }
            
            <div className="project-content-container">
                <h1>{props.title}</h1>
                <h2>{props.organization}</h2>
                <h3>{props.description}</h3>
                <button className="check-out-project" onClick={()=>setProjectModal(true)}>Learn More</button>
            </div>
        </div>
    );
}
