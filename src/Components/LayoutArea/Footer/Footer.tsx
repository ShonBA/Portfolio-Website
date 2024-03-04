import { CiLinkedin } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import "./Footer.scss";
import Menu from "../../NavArea/Menu/Menu";


function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div>
                <FaRegCopyright className="copyright" />
                <span> 2024 Shon Benayoun</span>
            </div>
            <div>
                <Menu />
                <CiLinkedin />
                <VscGithub />
                <IoBookOutline />
            </div>
        </div>
    );
}

export default Footer;
