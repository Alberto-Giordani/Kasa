import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import NotFound from "../pages/NotFound";
import PropertyDetail from "../pages/PropertyDetail";


export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/propertydetail" element={<PropertyDetail />} />
            </Routes>
        </BrowserRouter>
    );
}