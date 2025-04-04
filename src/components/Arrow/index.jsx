import arrow from '../../assets/images/arrow.svg';
import './Arrow.scss';

function Arrow({ isOpen }) {
    return (
        <img
            src={arrow}
            alt={isOpen ? 'Flèche ouverte' : 'Flèche fermée'}
            className={`arrow ${isOpen ? 'open' : ''}`}
        />
    );
}

export default Arrow;