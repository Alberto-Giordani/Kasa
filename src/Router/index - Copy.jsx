// ****************************************************
// Configuration du routeur de l'application
// ****************************************************
//
// Ce fichier définit la navigation globale de l'application Kasa Giordani.
// Il utilise BrowserRouter et Routes de react-router pour gérer la navigation.
// Les routes suivantes sont configurées :
//   - "/"               : Affiche la page d'accueil avec la liste des annonces.
//   - "/apropos"        : Affiche la page "À propos" avec la présentation des valeurs.
//   - "/propertydetail/:id" : Affiche la page de détail d'une annonce spécifique (paramètre dynamique : id).
//   - "*"               : Affiche la page 404 en cas d'URL non reconnue.
//
// Le Header et le Footer sont affichés en permanence, autour du contenu des routes.
// Les données provenant des fichiers JSON (annonces et valeurs) sont injectées
// en tant que props dans les composants correspondants pour assurer un affichage dynamique.
//
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
