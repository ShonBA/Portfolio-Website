import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import dataService from "../../../Service/DataService";
import appConfig from "../../../Utils/AppConfig";
import TechStack from "../../Common/TechStack/TechStack";
import "./About.scss";
import { HashLink } from "react-router-hash-link";

function About(): JSX.Element {

    const [feStack, setFeStack] = useState<string[]>([]);

    useEffect(() => {
        dataService.getAllTechStack()
            .then(beStack => setFeStack(beStack))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="About">
            <div className="aboutPara">
                <h1 className="headerLine">About Me</h1>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="aboutData">
                <div className="aboutSection">
                    <h4 className="headerLine">Get To Know Me!</h4>
                    <p className="aboutContentDetails">
                        I'm a <strong>Frontend Focused Web Developer</strong> building
                        and managing the Front-end of Websites and Web Applications that
                        leads to the success of the overall product. Check out some of
                        my work in the <strong>Projects</strong> section.
                    </p>
                    <p className="aboutContentDetails">
                        I also like sharing content related to the stuff that I have
                        learned over the years in <strong>Web Development</strong> so it
                        can help other people of the Dev Community. Feel free to Connect
                        or Follow me on my
                        <NavLink to={appConfig.linkDinUrl}>Linkedin</NavLink>
                        and
                        <NavLink to={appConfig.gitHubUrl}>Github</NavLink>
                        where I post useful content related to Web Development and
                        Programming
                    </p>
                    <p className="aboutContentDetails">
                        I'm open to <strong>Job</strong> opportunities where I can
                        contribute, learn and grow. If you have a good opportunity that
                        matches my skills and experience then don't hesitate to
                        <strong>contact</strong> me.
                    </p>
                    <HashLink className={"btn-p"} smooth to={"#contactMainSection"}>Contact</HashLink>
                </div>
                <div className="aboutSection">
                    <h4 className="headerLine">My Skills</h4>
                    <div className="techStack">
                        <TechStack stack={feStack} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
