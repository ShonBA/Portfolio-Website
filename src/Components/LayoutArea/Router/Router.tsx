import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";
import appConfig from "../../../Utils/AppConfig";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                {/* Default Routes */}
                <Route path={appConfig.baseRoute} element={<Home />} />
                <Route path={appConfig.baseRoute + "*"} element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
