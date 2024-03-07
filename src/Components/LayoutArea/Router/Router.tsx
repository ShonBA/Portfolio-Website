import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                {/* Default Routes */}
                <Route path="/Portfolio-Website/" element={<Home />} />
                <Route path="/Portfolio-Website/*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
