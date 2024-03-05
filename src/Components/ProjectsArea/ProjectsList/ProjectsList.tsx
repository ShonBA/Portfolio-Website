import { useEffect, useState } from "react";
import ProjectModel from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataService";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./ProjectsList.scss";

function ProjectsList(): JSX.Element {

    const [feProjects, setFeProject] = useState<ProjectModel[]>([]);

    useEffect(() => {
        dataService.getAllProjects()
            .then(beProjects => setFeProject(beProjects))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="ProjectsList">

            <div className="projectCaption">
                <h1 className="headerLine">Projects</h1>
                <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <div className="projectsContainer">
                {feProjects.map(p => <ProjectsCard key={p.id} project={p} />)}
            </div>
        </div>
    );
}

export default ProjectsList;
