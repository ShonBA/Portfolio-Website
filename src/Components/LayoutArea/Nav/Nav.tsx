import Logo from "../../NavArea/Logo/Logo";
import Menu from "../../NavArea/Menu/Menu";
import "./Nav.scss";

function Nav(): JSX.Element {
    return (
        <div className="Nav">
            <div className="logoContainer">
                <Logo />
            </div>
            <div>
                <Menu />
            </div>
        </div>
    );
}

export default Nav;
