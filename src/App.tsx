import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";

function App() {
    return (
        <>
            <AppRoutes />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                draggable
                theme="colored"
            />
        </>
    );
}

export default App;
