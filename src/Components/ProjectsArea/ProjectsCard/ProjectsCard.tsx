import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import ProjectModel from "../../../Models/ProjectModel";
import TechStack from "../../Common/TechStack/TechStack";
import "./ProjectsCard.scss";

interface ProjectCardProps {
    project: ProjectModel;
}

function ProjectsCard(props: ProjectCardProps): JSX.Element {

    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div className={`ProjectsCard ${inView ? "visible" : ""}`} ref={ref}>
            <div className="projectCardImage" >
                <img src={require("../../../Assets/Images/" + props.project.imageName)} />
            </div>
            <div className="projectCardData">
                <h2>{props.project.name}</h2>
                <p className="headerLine">{props.project.description} </p>
                <TechStack stack={props.project.skills} />
                <NavLink className="btn-p" to={props.project.siteUrl}>
                    {props.project.name}
                </NavLink>
            </div>
        </div>
    );
}

export default ProjectsCard;
