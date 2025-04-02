import { useParams } from "react-router-dom";
//import GalleryCarrousel from "../GalleryCarrousel"
import './FicheDetail.scss'

function FicheDetail({ annonces }) {
    const { id } = useParams();
    const annonce = annonces.find(item => item.id === id);

    return (
        <div className='fiche'>
            {/*<GalleryCarrousel
                pictures={annonce.pictures}
            />*/}
            <img src={annonce.cover} alt="Image provisoire" />
            <h1 className='fiche__title'>{annonce.title}</h1>
            <p className='fiche__location'>{annonce.location}</p>
        </div>
    )
}

export default FicheDetail;