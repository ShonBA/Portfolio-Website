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
                <span><FaRegCopyright className="copyright"/> 2024 Shon Benayoun</span>
            </div>
            <div>
                <CiLinkedin />
                <VscGithub />
                <IoBookOutline />
                <Menu/>
            </div>
        </div>
    );
}

export default Footer;
