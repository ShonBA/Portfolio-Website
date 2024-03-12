import { NavLink } from "react-router-dom";
import CV from "../../../Assets/Images/CV.png";
import Github from "../../../Assets/Images/Github.png";
import Linkedin from "../../../Assets/Images/Linkdin.png";
import Phone from "../../../Assets/Images/Telephone.png";
import Whatsapp from "../../../Assets/Images/Whatsapp.png";
import Mail from "../../../Assets/Images/Email.png";
import appConfig from "../../../Utils/AppConfig";

function SocialIcons(): JSX.Element {
    return (
        <div className="SocialIcons">
            <NavLink to={appConfig.linkDinUrl}>
                <img src={Linkedin} alt="Linkedin" />
            </NavLink>
            <NavLink to={appConfig.gitHubUrl}>
                <img src={Github} alt="Github" />
            </NavLink>
            <NavLink to={appConfig.CvUrl}>
                <img src={CV} alt="CV" />
            </NavLink>
            <NavLink to={appConfig.phoneUrl}>
                <img src={Phone} alt="Phone" />
            </NavLink>
            <NavLink to={appConfig.whatsappUrl}>
                <img src={Whatsapp} alt="Whatsapp" />
            </NavLink>
            <NavLink to={appConfig.emailUrl}>
                <img src={Mail} alt="Mail" />
            </NavLink>
        </div>
    );
}

export default SocialIcons;
