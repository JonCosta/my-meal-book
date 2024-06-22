import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <div className="mb-auto px-4 py-6">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;