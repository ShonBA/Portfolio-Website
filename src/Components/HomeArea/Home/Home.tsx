import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Home.scss";
import Section from "./Section/Section";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div id="homeMainSection">
                <Section />
            </div>
            <div id="aboutMainSection">
                <About />
            </div>
            <div id="projectsMainSection">
                <div>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                    <p>Place Holder ...</p>
                </div>
            </div>
            <div id="contactMainSection">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
