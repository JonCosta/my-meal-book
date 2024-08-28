import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import AboutPage from "./components/pages/About/About";
import CategoryPage from "./components/pages/Category/Category";
import HomePage from "./components/pages/Home/Home";
import MealPage from "./components/pages/Meal/Meal";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route index Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/meal/:id" Component={MealPage} />
                    <Route path="/category/:category" Component={CategoryPage} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;