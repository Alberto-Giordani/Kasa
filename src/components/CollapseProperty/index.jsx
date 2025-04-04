import './CollapseProperty.scss';
import { useState } from 'react';
import CollapseItem from '../CollapseItem';

function CollapseProperty({ annonce }) {

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(precedent => ({
            ...precedent,
            [id]: !precedent[id]
        }));
    };

    return (
        <article className="collapse-property">
            <CollapseItem
                key={`${annonce.id}-description`}
                id={`${annonce.id}-description`}
                title="Description"
                content={annonce.description}
                isOpen={!!openItems[`${annonce.id}-description`]}
                onToggle={toggleItem}
            />
            <CollapseItem
                key={`${annonce.id}-equipement`}
                id={`${annonce.id}-equipement`}
                title="Équipements"
                content={annonce.equipments.map((item, index) => (
                    <li className="collapse-property__equipement" key={index}>{item}</li>
                ))}
                isOpen={!!openItems[`${annonce.id}-equipement`]}
                onToggle={toggleItem}
            />
        </article>
    )
}

export default CollapseProperty;