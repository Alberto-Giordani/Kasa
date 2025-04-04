// **********************************************
// Composant GalleryCarrousel
// **********************************************
//
// Ce composant affiche une galerie d'images sous forme de carrousel.
// Il permet de faire défiler horizontalement les images à l'aide de flèches de navigation.
// 
// Props :
// - pictures : depuis 'data/annonces.json' nous irons ensuite récupérer les images -
// dans le dossier PropertyDetail.
//
import { useState } from 'react';
import './GalleryCarrousel.scss';
import arrow from '../../assets/images/arrow.svg'

function GalleryCarrousel({ pictures }) {

    const [index, setIndex] = useState(0);
    const total = pictures.length;

    const next = () => setIndex((index + 1) % total);
    const prev = () => setIndex((index - 1 + total) % total);

    return (
        <div className='carrousel__gallery'>
            <div
                className='carrousel__gallery--slider'
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {pictures.map((picture, i) => (
                    <img
                        key={i}
                        src={picture}
                        alt={`Image ${i + 1}`}
                        className='carrousel__gallery--img'
                    />
                ))}
            </div>
            {total > 1 && (
                <>
                    <img src={arrow} className='carrousel__gallery--left' onClick={prev} />
                    <div className='carrousel__gallery--counter'>
                        {index + 1}/{total}
                    </div>
                    <img src={arrow} className='carrousel__gallery--right' onClick={next} />
                </>
            )}
        </div>
    )
}

export default GalleryCarrousel