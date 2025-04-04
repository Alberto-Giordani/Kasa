import './CardContainer.scss';
import Card from '../Card';

function CardContainer({ annonces }) {
    return (
        <div className="cardContainer">
            <div className="cardContainer__wrapper">
                {annonces.map((annonce) => (
                    <Card key={annonce.id} annonce={annonce} />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;