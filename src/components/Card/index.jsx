// **********************************************
// Composant Card
// **********************************************
//
// Ce composant affiche une carte représentant une annonce immobilière.
// Il utilise le composant Link de react-router pour naviguer vers la page de détail de l'annonce.
// Les informations affichées incluent une image, le titre et la localisation de l'annonce.
//
// Le composant reçoit en prop un objet "annonce" qui contient les informations nécessaires -
// que nous irons ensuite récupérer depuis 'data/annonces.json'.
//
import { Link } from 'react-router';
import './Card.scss';

function Card({ annonce }) {
    return (
        <Link to={`/propertydetail/${annonce.id}`} className="card">
            <img src={annonce.cover} alt={annonce.title} />
            <div className="card__text">
                <h2>{annonce.title}</h2>
                <p>{annonce.location}</p>
            </div>
        </Link>
    );
}

export default Card;