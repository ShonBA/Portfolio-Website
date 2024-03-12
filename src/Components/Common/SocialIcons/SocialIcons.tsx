import { NavLink } from "react-router-dom";
import CV from "../../../Assets/Images/CV.png";
import Github from "../../../Assets/Images/Github.png";
import Linkedin from "../../../Assets/Images/Linkdin.png";
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
        </div>
    );
}

export default SocialIcons;
