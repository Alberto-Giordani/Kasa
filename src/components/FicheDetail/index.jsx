import { useParams, Navigate } from 'react-router-dom';
import GalleryCarrousel from '../GalleryCarrousel';
import Host from '../Host';
import Stars from '../Stars';
import CollapseProperty from '../CollapseProperty';
import Tags from '../Tags';
import './FicheDetail.scss';

function FicheDetail({ annonces }) {
    const { id } = useParams();
    const annonce = annonces.find(item => item.id === id);

    if (!annonce) {
        return <Navigate to='/404' />;
    }

    return (
        <div className='fiche'>
            <GalleryCarrousel
                pictures={annonce.pictures}
            />
            <section className='fiche__contenu'>
                <div className='fiche__premierePartie'>
                    <div className='fiche__titreEtTags'>
                        <h1 className='fiche__title'>{annonce.title}</h1>
                        <p className='fiche__location'>{annonce.location}</p>
                        <Tags annonce={annonce} />
                    </div>
                    <div className='fiche__hostEtStars'>
                        <Host annonce={annonce} />
                        <Stars annonce={annonce} />
                    </div>
                </div>
                <div>
                    <CollapseProperty annonce={annonce} />
                </div>

            </section>
        </div>
    )
}

export default FicheDetail;