import { useState } from 'react';
import CollapseItem from '../CollapseItem';
import './CollapseAPropos.scss';


function CollapseAPropos({ valeurs }) {

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(precedent => ({
            ...precedent,
            [id]: !precedent[id]
        }));
    };

    return (
        <article className="collapse">
            {valeurs.map(item => (
                <CollapseItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    isOpen={!!openItems[item.id]}
                    onToggle={toggleItem}
                />
            ))}
        </article>
    );
}

export default CollapseAPropos;