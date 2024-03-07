import { HashLink } from "react-router-hash-link";
import "./Menu.scss";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <HashLink smooth to={"Portfolio-Website/#top"}>Home</HashLink>
            <HashLink smooth to={"#aboutMainSection"}>About</HashLink>
            <HashLink smooth to={"#projectsMainSection"}>Projects</HashLink>
            <HashLink smooth to={"#contactMainSection"}>Contact</HashLink>
        </div>
    );
}

export default Menu;
