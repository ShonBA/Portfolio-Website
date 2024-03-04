import { NavLink } from "react-router-dom";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import arrow from "../../../Assets/Images/ArrowDown.svg"
import "./Home.scss";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div className="homeIconsContainer">
                <SocialIcons />
            </div>
            <div className="homeParaContainer">
                <h1>Hey, I'M SHON BENAYOUN</h1>
                <h6>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h6>
                <NavLink to={"#"}>Project</NavLink>
                <div>
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
