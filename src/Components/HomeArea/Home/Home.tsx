import useTitle from "../../../Utils/UseTitle";
import ProjectsList from "../../ProjectsArea/ProjectsList/ProjectsList";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Home.scss";
import Section from "./Section/Section";

function Home(): JSX.Element {
    useTitle("Shon Benayoun | Portfolio");
    return (
        <div className="Home">
            <div id="homeMainSection" className="homeSection">
                <Section />
            </div>
            <div id="aboutMainSection" className="homeSection">
                <About />
            </div>
            <div id="projectsMainSection" className="homeSection">
                <ProjectsList />
            </div>
            <div id="contactMainSection" className="homeSection">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
