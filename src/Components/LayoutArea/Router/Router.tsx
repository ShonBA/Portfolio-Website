import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Home from "../../HomeArea/Home/Home";
import Projects from "../../Projects/Projects";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Home />}></Route>
                <Route path={appConfig.AboutRoute} element={<About />}></Route>
                <Route path={appConfig.ProjectsRoute} element={<Projects />}></Route>
                <Route path={appConfig.ContactRoute} element={<Contact />}></Route>

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
