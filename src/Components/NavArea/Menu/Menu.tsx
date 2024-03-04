import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to={"#"}>Home</NavLink>
            <NavLink to={"#"}>About</NavLink>
            <NavLink to={"#"}>Contact</NavLink>
        </div>
    );
}

export default Menu;
