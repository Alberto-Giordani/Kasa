import Banner_1 from '../../assets/images/Banner_1.png';
import './Banner.scss';

function Banner() {
    return (
        <section className="banner">
            <img src={Banner_1} alt="Banner" />
            <div className="banner__text">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
}

export default Banner;