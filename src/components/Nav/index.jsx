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