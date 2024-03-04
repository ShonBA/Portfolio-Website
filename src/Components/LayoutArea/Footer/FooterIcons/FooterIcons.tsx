import { CiLinkedin } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import "./FooterIcons.scss";

function FooterIcons(): JSX.Element {
    return (
        <div className="FooterIcons">
            <NavLink to={"https://www.linkedin.com/in/shonbenayoun/"}>
                <CiLinkedin />
            </NavLink>
            <NavLink to={"https://github.com/ShonBA"}>
                <VscGithub />
            </NavLink>
            <NavLink to={"https://drive.google.com/file/d/1RWPiDFizusmxvm7KZPK986HwlgciwAYK/view?usp=sharing"}>
                <IoBookOutline />
            </NavLink>
        </div>
    );
}

export default FooterIcons;
