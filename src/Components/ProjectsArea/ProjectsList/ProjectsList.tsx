import ProjectModel from "../../../Models/ProjectModel";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./ProjectsList.scss";

function ProjectsList(): JSX.Element {

    const projects: ProjectModel[] = [
        {
            id: 1,
            name: "Explore Ease",
            description: "My vacation project is more than just a search engine, it's a comprehensive platform designed to redefine the way users plan their vacations. With features like the ability to like and unlike vacations, real-time status tracking, and an intelligent auto-complete system during vacation creation and editing, the project aims to deliver a seamless user experience.",
            skills: ["React", "Axios", "Redux", "Leaflet", "Notyf", "Node.js", "Express", "JOI", "Chai", "Mocha", "Supertest", "JWT Token"],
            imageName: "ExploreEase.png"
        }, {
            id: 1,
            name: "Shon Benayoun Portfolio",
            description: "My Personal Portfolio Website",
            skills: ["React", "Axios"],
            imageName: "Portfolio.png"
        }
    ]
    return (
        <div className="ProjectsList">
            <div className="projectsContainer">

                <div className="projectCaption">

                    <h1>Projects</h1>
                    <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                </div>
                <div>
                    {projects.map(p => <ProjectsCard key={p.id} project={p} />)}
                </div>
            </div>
        </div>
    );
}

export default ProjectsList;
