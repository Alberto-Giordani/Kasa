import React from 'react';
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