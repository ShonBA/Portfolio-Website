import ProjectModel from "../../../Models/ProjectModel";
import TechStack from "../../Common/TechStack/TechStack";
import "./ProjectsCard.scss";

interface ProjectCardProps {
    project: ProjectModel;
}

function ProjectsCard(props: ProjectCardProps): JSX.Element {
    return (
        <div className="ProjectsCard">
            <div className="projectCardImage">
                <img src={require("../../../Assets/Images/" + props.project.imageName)} />
            </div>
            <div className="projectCardData">
                <h2>{props.project.name}</h2>
                <p>{props.project.description} </p>
                <hr />
                <TechStack stack={props.project.skills} />
                <button className="btn-p">Explore</button>
            </div>
        </div>
    );
}

export default ProjectsCard;
