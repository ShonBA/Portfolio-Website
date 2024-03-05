import { HashLink } from "react-router-hash-link";
import SocialIcons from "../../../Common/SocialIcons/SocialIcons";
import "./Section.scss";

function Section(): JSX.Element {
    return (
        <div className="Section">
            <div className="homeIconsContainer">
                <SocialIcons />
            </div>
            <div className="homeParaContainer">
                <div className="paraContainer">
                    <h1 className="headerLine">Hey, I'm Shon Benayoun</h1>
                    <h6>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h6>
                    <HashLink className="btn-p" smooth to={"#projectsMainSection"}>Projects</HashLink>
                </div>
                <div className="mouseContainer">
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Section;
