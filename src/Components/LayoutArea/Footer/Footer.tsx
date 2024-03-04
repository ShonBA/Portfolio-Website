import { FaRegCopyright } from "react-icons/fa6";
import Menu from "../../NavArea/Menu/Menu";
import "./Footer.scss";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";


function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div>
                <FaRegCopyright className="copyright" />
                <span> 2024 Shon Benayoun</span>
            </div>
            <div>
                <Menu />
                <SocialIcons />
            </div>
        </div>
    );
}

export default Footer;
