import { useEffect } from 'react';
import favicon from '../../assets/images/kasa.svg';
import logo from '../../assets/images/logo.svg';
import logo_petit from '../../assets/images/logo_petit.svg';
import Nav from '../Nav';
import './Header.scss';

function Header() {

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = favicon;
        document.head.appendChild(link);
    }, []);

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