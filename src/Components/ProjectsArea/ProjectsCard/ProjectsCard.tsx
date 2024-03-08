import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import ProjectModel from "../../../Models/ProjectModel";
import TechStack from "../../Common/TechStack/TechStack";
import "./ProjectsCard.scss";

interface ProjectCardProps {
    project: ProjectModel;
}

function ProjectsCard(props: ProjectCardProps): JSX.Element {

    const [screenSize, setScreenSize] = useState<number>(null);

    useEffect(() => {
        setScreenSize(window.innerWidth)
    }, [useInView]);

    const [ref, inView] = useInView({
        triggerOnce: screenSize <= 768 ? true : false
    });
    const animationRef = useRef<HTMLDivElement>(null);

    function handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        if (entry.isIntersecting) {
            animationRef.current?.classList.add("animate");
            animationRef.current?.classList.remove("slideOut");
        } else {
            animationRef.current?.classList.remove("animate");
            animationRef.current?.classList.add("slideOut");
        }
    }

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    return (
        <div className={`ProjectsCard ${inView ? "visible" : ""}`} ref={ref} onClick={() => observer.observe(animationRef.current)}>
            <div className="projectCardImage" ref={animationRef}>
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
