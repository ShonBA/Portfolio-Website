import { NavLink } from "react-router-dom";
import About from "../../About/About";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
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
        </div>
    );
}

export default Home;
