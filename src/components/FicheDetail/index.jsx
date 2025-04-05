// **********************************************
// Composant FicheDetail
// **********************************************
//
// Ce composant affiche le détail complet d'une annonce immobilière.
// Il récupère l'identifiant de l'annonce depuis les paramètres d'URL via useParams.
// Si aucune annonce ne correspond à cet ID, il redirige vers la page 404 (à travers le Router).
// 
// Les éléments affichés incluent :
// - Une galerie d'images (GalleryCarrousel)
// - Le titre, la localisation et les tags associés à l'annonce
// - Les informations de l'hôte (Host) et une évaluation sous forme d'étoiles (Stars)
// - Des sections dépliables pour plus d'informations (CollapseProperty)
// 
import { useParams, Navigate } from 'react-router-dom';
import Gallery from '../Gallery';
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
            <Gallery
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