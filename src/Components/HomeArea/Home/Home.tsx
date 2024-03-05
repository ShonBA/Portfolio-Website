import { NavLink } from "react-router-dom";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import "./Home.scss";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div className="homeIconsContainer">
                <SocialIcons />
            </div>
            <div className="homeParaContainer">
                <div className="paraContainer">
                    <h1>Hey, I'm Shon Benayoun</h1>
                    <h6>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h6>
                    <NavLink to={"#"}>Projects</NavLink>
                </div>
                <div className="mouseContainer">
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
