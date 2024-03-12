import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.scss";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <nav>
                <Nav />
            </nav>
            <main>
                <Home />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
