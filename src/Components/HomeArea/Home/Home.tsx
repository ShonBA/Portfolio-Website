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
            <div id="homeMainSection">
                <Section />
            </div>
            <div id="aboutMainSection">
                <About />
            </div>
            <div id="projectsMainSection">
                <ProjectsList/>
            </div>
            <div id="contactMainSection">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
