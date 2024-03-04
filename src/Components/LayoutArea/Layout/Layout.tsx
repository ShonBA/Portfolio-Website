import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Router from "../Router/Router";
import "./Layout.scss";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <nav>
                <Nav />
            </nav>
            <main>
                <Router />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
