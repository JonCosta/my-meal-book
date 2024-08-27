import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout: React.FC = () => {
    return (
        <div id="layout-body" className="flex flex-col min-h-screen h-full justify-between text-white">
            <div className="grow mx-auto px-8 py-6 bg-gray-900 w-5/6 md:w-2/3 xl:w-7/12">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;