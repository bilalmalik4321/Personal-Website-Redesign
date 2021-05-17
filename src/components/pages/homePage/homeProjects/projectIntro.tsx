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
    
    return (
        <div className="project-home-box">
            <div style={{display: "flex",flexDirection:"column"}}>
                <h1>{props.title}</h1>
                <h3>{props.organization}</h3>
                <h6>{props.description}</h6>
                <button className="check-out-project">explore</button>
            </div>
        </div>
    );
}
