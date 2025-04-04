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