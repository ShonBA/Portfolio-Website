import { CiLinkedin } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import "./SocialIcons.scss";

function SocialIcons(): JSX.Element {
    return (
        <div className="SocialIcons">
            <NavLink to={appConfig.linkDinUrl}>
                <CiLinkedin title="Linkedin" />
            </NavLink>
            <NavLink to={appConfig.gitHubUrl}>
                <VscGithub title="Github" />
            </NavLink>
            <NavLink to={appConfig.CvUrl}>
                <IoBookOutline title="CV" />
            </NavLink>
        </div>
    );
}

export default SocialIcons;
