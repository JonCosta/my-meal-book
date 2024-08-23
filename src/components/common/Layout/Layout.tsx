import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
    return (
        <div id="layout-body" className="flex flex-col min-h-screen h-full justify-between">
            <Header />
            <div className="outlet-container ml-20vw grow max-w-6xl px-4 py-6 bg-gray-900">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;