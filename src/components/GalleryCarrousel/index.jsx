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
            <img src={pictures[index]} alt="Image actuelle" />
        </div>

        {
        total > 1 && (
            <>
                <button>
                    <img src={arrow} className='carrousel__gallery--left' onClick={prev} />
                </button>
                <button>

                </button>
                <img src={arrow} className='carrousel__gallery--right' onClick={next} />
            </>
        )

    }
    )
}

export default GalleryCarrousel