import logo_noir from '../../assets/images/logo_noir.svg';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo_noir} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;