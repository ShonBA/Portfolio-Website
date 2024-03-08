import { HashLink } from "react-router-hash-link";
import image from "../../../Assets/Images/nav.jpeg";
import "./Logo.scss";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <HashLink smooth to={"#top"}>
                <img src={image} alt="Shon" />
                <span>Shon Benayoun</span>
            </HashLink>
        </div>
    );
}

export default Logo;
