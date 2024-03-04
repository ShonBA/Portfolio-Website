import image from "../../../Assets/Images/nav.jpeg";
import "./Logo.scss";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <img src={image} alt="Shon" />
            <span>Shon Benayoun</span>
        </div>
    );
}

export default Logo;
