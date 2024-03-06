import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import dataService from "../../../Service/DataService";
import appConfig from "../../../Utils/AppConfig";
import TechStack from "../../Common/TechStack/TechStack";
import "./About.scss";

function About(): JSX.Element {

    const [frontendStack, setFrontendStack] = useState<string[]>([]);

    useEffect(() => {
        dataService.getAllTechStack()
            .then(backendStack => setFrontendStack(backendStack))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="About">
            <div className="aboutPara">
                <h1 className="headerLine">About Me</h1>
                <p>Welcome! I'm excited to share more about myself, my work, and my current skills, primarily focused on programming and technology.</p>
            </div>
            <div className="aboutData">
                <div className="aboutSection">
                    <h4 className="headerLine">Get To Know Me!</h4>
                    <p className="aboutContentDetails">
                        I'm a <strong>Frontend Web Developer</strong> dedicated to crafting and managing the frontend of websites and web applications, contributing to the overall success of the products. Explore some of my projects in the <strong>Projects</strong> section.
                    </p>
                    <p className="aboutContentDetails">
                        Sharing knowledge is a passion of mine. I regularly post content related to my experiences and insights in <strong>Web Development</strong>. Connect or follow me on <NavLink to={appConfig.linkDinUrl}>LinkedIn</NavLink> and <NavLink to={appConfig.gitHubUrl}>GitHub</NavLink>, where I share valuable insights into web development and programming.
                    </p>
                    <p className="aboutContentDetails">
                        I'm currently open to <strong>job opportunities</strong> that align with my skills and experiences. If you have an exciting opportunity, matching my profile, feel free to <strong>reach out</strong>.
                    </p>
                    <HashLink className={"btn-p"} smooth to={"#contactMainSection"}>Contact</HashLink>
                </div>
                <div className="aboutSection">
                    <h4 className="headerLine">My Skills</h4>
                    <div className="techStack">
                        <TechStack stack={frontendStack} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
