import logo from '../../assets/images/logo.svg';
import logo_petit from '../../assets/images/logo_petit.svg';
import Nav from '../Nav';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <picture>
                <source media="(max-width: 576px)" srcSet={logo_petit} />
                <source media="(min-width: 577px)" srcSet={logo} />
                <img src={logo} alt="Logo" />
            </picture>
            <Nav />
        </header>
    );
}

export default Header;