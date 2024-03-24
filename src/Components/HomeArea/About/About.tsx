import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import dataService from "../../../Service/DataService";
import appConfig from "../../../Utils/AppConfig";
import TechStack from "../../Common/TechStack/TechStack";
import "./About.scss";

function About(): JSX.Element {
    const [frontendStack, setFrontendStack] = useState<string[]>([]);
    const [aboutHeaderRef, aboutHeaderInView] = useInView({ triggerOnce: true });
    const [aboutSectionRef, aboutSectionInView] = useInView({ triggerOnce: true });
    const [aboutSkillsRef, aboutSkillsInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        dataService.getAllTechStack()
            .then(backendStack => setFrontendStack(backendStack))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className={`About`} >
            <div className={`aboutPara  ${aboutHeaderInView ? 'visible' : ''}`} ref={aboutHeaderRef}>
                <h1 className="headerLine">About Me</h1>
                <p>Welcome! I'm excited to share more about myself, my work, and my current skills, primarily focused on programming and technology.</p>
            </div>
            <div className="aboutData">
                <div className={`aboutSection ${aboutSectionInView ? 'visible_left' : ''}`} ref={aboutSectionRef} >
                    <h4 className="headerLine">Discover My Passion for Frontend Development!</h4>
                    <p className="aboutContentDetails">
                        As a dedicated <strong>Fullstack WEB Developer</strong>, I thrive on the art of shaping and managing the visual aspects of websites and web applications. My commitment extends to enhancing overall product success through meticulous frontend craftsmanship. Delve into my portfolio in the <strong>Projects</strong> section to witness the impact of my work.
                    </p>
                    <p className="aboutContentDetails">
                        Fueling my passion for web development, I actively share my experiences and insights in the dynamic field. Engage with my content covering a spectrum of topics in <strong>Web Development</strong>. Join me on the journey of continuous learning and growth by connecting on <NavLink to={appConfig.linkDinUrl}>LinkedIn</NavLink> and exploring my code on <NavLink to={appConfig.gitHubUrl}>GitHub</NavLink>. Your presence in these spaces is an opportunity to dive into the world of programming wisdom.
                    </p>
                    <p className="aboutContentDetails">
                        Currently, my professional horizons are open to exciting <strong>job opportunities</strong> aligned with my skill set and experiences. If you have an enticing prospect that matches my profile, I welcome you to <strong>reach out</strong>. Let's explore how we can create something extraordinary together.
                    </p>
                    <HashLink className={"btn-p"} smooth to={"#contactMainSection"}>Contact</HashLink>
                </div>
                <div className={`aboutSection ${aboutSkillsInView ? 'visible_right' : ''}`} ref={aboutSkillsRef}>
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
