import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import "./Menu.scss";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to={appConfig.HomeRoute}>Home</NavLink>
            <NavLink to={appConfig.AboutRoute}>About</NavLink>
            <NavLink to={appConfig.ProjectsRoute}>Projects</NavLink>
            <NavLink to={appConfig.ContactRoute}>Contact</NavLink>
        </div>
    );
}

export default Menu;
