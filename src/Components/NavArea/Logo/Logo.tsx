import { NavLink } from "react-router-dom";
import image from "../../../Assets/Images/nav.jpeg";
import "./Logo.scss";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <NavLink to={"#"}>
                <img src={image} alt="Shon" />
                <span>Shon Benayoun</span>
            </NavLink>
        </div>
    );
}

export default Logo;
