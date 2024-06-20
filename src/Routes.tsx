import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/pages/About/About";
import HomePage from "./components/pages/Home/Home";
import MealPage from "./components/pages/Meal/Meal";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/about" Component={AboutPage} />
                <Route path="/meal/:id" Component={MealPage} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;