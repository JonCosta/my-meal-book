import AppRoutes from "./Routes";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";

function App() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header></Header>
            <div className="mb-auto px-4 py-6">
                <AppRoutes></AppRoutes>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
