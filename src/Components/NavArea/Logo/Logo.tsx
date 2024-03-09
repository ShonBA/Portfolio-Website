import { HashLink } from "react-router-hash-link";
import image from "../../../Assets/Images/Logo.png";
import "./Logo.scss";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <HashLink smooth to={"#top"}>
                <img src={image} alt="Shon" />
            </HashLink>
        </div>
    );
}

export default Logo;
