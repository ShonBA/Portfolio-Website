import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import "./About.scss";

function About(): JSX.Element {
    return (
        <div className="About">
            <div className="aboutPara">
                <h1>About Me</h1>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="aboutData">
                <div className="aboutSection">
                    <h4>Get To Know Me!</h4>
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
                    <NavLink className={"btn-p"} to={"#"}>Contact</NavLink>
                </div>
                <div className="aboutSection">
                    <h4>My Skills</h4>
                    <div className="techStack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SCSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>jQuery</span>
                        <span>AJAX</span>
                        <span>TypeScript</span>
                        <span>OOP</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Angular</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>SQL</span>
                        <span>MySQL</span>
                        <span>MongoDB</span>
                        <span>Mongoose</span>
                        <span>RegEx</span>
                        <span>REST API</span>
                        <span>PHP</span>
                        <span>Microservices</span>
                        <span>Socket.io</span>
                        <span>Git / GitHub</span>
                        <span>Docker</span>
                        <span>Cloud</span>
                        <span>Chrome Extension</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
