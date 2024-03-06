import { useEffect, useState } from "react";
import ProjectModel from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataService";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./ProjectsList.scss";

function ProjectsList(): JSX.Element {

    const [frontendProjects, setFrontendProjects] = useState<ProjectModel[]>([]);

    useEffect(() => {
        dataService.getAllProjects()
            .then(backendProjects => setFrontendProjects(backendProjects))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="ProjectsList">

            <div className="projectCaption">
                <h1 className="headerLine">Projects</h1>
                <p>Embark on a journey through the Code Canvas: Showcasing my digital odyssey.</p>
            </div>
            <div className="projectsContainer">
                {frontendProjects.map(project => <ProjectsCard key={project.id} project={project} />)}
            </div>
        </div>
    );
}

export default ProjectsList;
