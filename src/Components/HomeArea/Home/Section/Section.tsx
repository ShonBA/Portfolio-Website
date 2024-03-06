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
                    <h1 className="headerLine">Shon Benayoun</h1>
                    <h4>Crafting Digital Experiences with Precision and Passion.</h4>
                    <h6>Fullstack Engineer on a Creative Quest.</h6>
                    <HashLink className="btn-p" smooth to={"#projectsMainSection"}>Explore Projects</HashLink>
                </div>
                <div className="mouseContainer">
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Section;
