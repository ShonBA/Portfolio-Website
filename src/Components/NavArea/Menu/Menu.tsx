import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import "./Menu.scss";
import { HashLink } from "react-router-hash-link";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <HashLink smooth to={"#homeMainSection"}>Home</HashLink>
            <HashLink smooth to={"#aboutMainSection"}>About</HashLink>
            <HashLink smooth to={"#projectsMainSection"}>Projects</HashLink>
            <HashLink smooth to={"#contactMainSection"}>Contact</HashLink>
        </div>
    );
}

export default Menu;
