// **********************************************
// Composant Stars
// **********************************************
//
// Ce composant affiche une notation sous forme d'étoiles pour une annonce.
//
// La logique consiste à créer un tableau de 5 éléments et, pour chaque position,
// afficher une étoile active (colorée) si l'indice est inférieur à la note, sinon une étoile inactive.
// Cela permet d'afficher visuellement la note sur une échelle de 5 étoiles.
//
import starActive from '../../assets/images/star-active.svg';
import starInactive from '../../assets/images/star-inactive.svg';
import './Stars.scss';

function Stars({ annonce }) {
    const rating = annonce.rating;
    const stars = new Array(5).fill(null);

    return (
        <div className='stars'>
            {stars.map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? starActive : starInactive}
                    alt="star"
                    className="stars__icon"
                />
            ))}
        </div>
    );
}

export default Stars;