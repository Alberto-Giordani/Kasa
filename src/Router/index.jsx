import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import APropos from "../pages/APropos";
import PropertyDetail from "../pages/PropertyDetail";
import NotFound from "../pages/NotFound";
import Header from '../components/Header'
import Footer from '../components/Footer'
import annonces from '../data/annonces.json'
import valeurs from '../data/valeursAPropos.json'


export default function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home annonces={annonces} />} />
                <Route path='/apropos' element={<APropos valeurs={valeurs} />} />
                <Route
                    path='/propertydetail/:id'
                    element={<PropertyDetail annonces={annonces} />}
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
}
