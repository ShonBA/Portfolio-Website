import Copyright from "../../../Assets/Images/CopyRights.png";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import Menu from "../../NavArea/Menu/Menu";
import "./Footer.scss";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="cpContainer">
                <img src={Copyright} alt="Copyright" />
                <span> 2024 Shon Benayoun</span>
            </div>
            <div className="menuContainer">
                <SocialIcons />
                <Menu />
            </div>
        </div>
    );
}

export default Footer;
