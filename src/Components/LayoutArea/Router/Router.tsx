import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Home />}></Route>

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
