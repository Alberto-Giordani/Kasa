import { useState } from 'react';
import Arrow from '../Arrow';
import './Collapse.scss';


function Collapse() {

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(estOuvert => ({
            ...estOuvert,
            [index]: !estOuvert[index]
        }));
    };

    return (
        <article className="collapse">
            <div className={`collapse__element ${openItems[0] ? 'open' : ''}`}>
                <div className="collapse__element--title">
                    <h4>Fiabilité</h4>
                    <Arrow isOpen={!!openItems[0]} onClick={() => toggleItem(0)} />
                </div>
                <p className="collapse__element--definition">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées
                    par nos équipes.
                </p>
            </div>
            <div className={`collapse__element ${openItems[1] ? 'open' : ''}`}>
                <div className="collapse__element--title">
                    <h4>Respect</h4>
                    <Arrow isOpen={!!openItems[1]} onClick={() => toggleItem(1)} />
                </div>
                <p className="collapse__element--definition">
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion
                    de notre plateforme.
                </p>
            </div>
            <div className={`collapse__element ${openItems[2] ? 'open' : ''}`}>
                <div className="collapse__element--title">
                    <h4>Service</h4>
                    <Arrow isOpen={!!openItems[2]} onClick={() => toggleItem(2)} />
                </div>
                <p className="collapse__element--definition">
                    La qualité du service est au cœur de notre engagement chez Kasa.
                    Nous veillons à ce que chaque interaction,
                    que ce soit avec nos hôtes ou nos locataires,
                    soit empreinte de respect et de bienveillance.
                </p>
            </div>
            <div className={`collapse__element ${openItems[3] ? 'open' : ''}`}>
                <div className="collapse__element--title">
                    <h4>Sécurité</h4>
                    <Arrow isOpen={!!openItems[3]} onClick={() => toggleItem(3)} />
                </div>
                <p className="collapse__element--definition">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                    que pour les voyageurs, chaque logement correspond
                    aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </p>
            </div>
        </article>
    );
}

export default Collapse;