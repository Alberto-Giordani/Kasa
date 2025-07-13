import './Banner.scss';

function Banner({ image, showText = true, brightness = 0.4 }) {
    return (
        <section className="banner">
            <img style={{ filter: `brightness(${brightness})` }} src={image} alt="Banner" />
            {showText && (
                <div className="banner__text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            )}

        </section>
    );
}

export default Banner;