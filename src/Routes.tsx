import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import AboutPage from "./components/pages/About/About";
import HomePage from "./components/pages/Home/Home";
import MealPage from "./components/pages/Meal/Meal";

function AppRoutes() {
    return (
        <Router basename="/my-meal-book">
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route index Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/meal/:id" Component={MealPage} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;