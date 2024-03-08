import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";
import SocialIcons from "../../../Common/SocialIcons/SocialIcons";
import "./Section.scss";

function Section(): JSX.Element {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className="Section">
            <div className="homeIconsContainer">
                <SocialIcons />
            </div>
            <div className="homeParaContainer">
                <div className="paraContainer" ref={ref}>
                    <h1 className={`headerLine ${inView ? "visible" : ""}`}>Shon Benayoun</h1>
                    <h4 className={`fadeIn ${inView ? "visible" : ""}`}>Crafting Digital Experiences with Precision and Passion.</h4>
                    <h6 className={`fadeIn ${inView ? "visible" : ""}`}>Fullstack Engineer on a Creative Quest.</h6>
                    <HashLink className={`btn-p ${inView ? "visible" : ""}`} smooth to={"#projectsMainSection"}>
                        Explore Projects
                    </HashLink>
                </div>
                <div className="mouseContainer">
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Section;
