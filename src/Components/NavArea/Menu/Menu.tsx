import { HashLink } from "react-router-hash-link";
import "./Menu.scss";
import appConfig from "../../../Utils/AppConfig";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <HashLink smooth to={`${appConfig.baseRoute}#top`}>Home</HashLink>
            <HashLink smooth to={`${appConfig.baseRoute}#aboutMainSection`}>About</HashLink>
            <HashLink smooth to={`${appConfig.baseRoute}#projectsMainSection`}>Projects</HashLink>
            <HashLink smooth to={`${appConfig.baseRoute}#contactMainSection`}>Contact</HashLink>
        </div>
    );
}

export default Menu;
