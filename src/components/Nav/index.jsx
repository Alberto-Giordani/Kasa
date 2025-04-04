// **********************************************
// Composant Nav
// **********************************************
//
// Ce composant gère la navigation principale de l'application.
// Il utilise NavLink de react-router-dom pour créer des liens de navigation
// qui sont stylisés en fonction de leur état actif.
// Deux liens principaux sont définis :
// - "Accueil" qui redirige vers la page d'accueil ("/")
// - "À propos" qui redirige vers la page À propos ("/apropos")
//
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Accueil
            </NavLink>
            <NavLink
                to="/apropos"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                À propos
            </NavLink>
        </nav>
    );
}

export default Nav;