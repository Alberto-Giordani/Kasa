import React from 'react';
import './CardContainer.scss';
import Card from '../Card';

function CardContainer({ annonces }) {
    return (
        <div className="card-container">
            {annonces.map((annonce) => (
                <Card key={annonce.id} annonce={annonce} />
            ))}
        </div>
    );
};

export default CardContainer;