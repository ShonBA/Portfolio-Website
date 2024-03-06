import { HashLink } from "react-router-hash-link";
import "./PageNotFound.scss";
import useTitle from "../../../Utils/UseTitle";

function PageNotFound(): JSX.Element {
    useTitle("Page Not Found | 404")
    return (
        <div className="PageNotFound">
            <div className="notFoundContainer">
                <header className="header">
                    <h1 className="headerLine">Page Not Found - 404</h1>
                </header>
                <div className="content">
                    <h4>Sorry, the page you are looking for does not exist.</h4>
                    <h4>Click the button below to go back home</h4>
                </div>
                <HashLink smooth to={"/#top"} className="btn-p">Home</HashLink>
            </div>
        </div>
    );
}

export default PageNotFound;
