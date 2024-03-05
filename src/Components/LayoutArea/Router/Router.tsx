import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                {/* Default Routes */}
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
