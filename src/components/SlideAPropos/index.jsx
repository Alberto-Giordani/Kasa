import { useState } from 'react';
import SlideItem from '../SlideItem';
import valeurs from '../../data/valeursAPropos.json'
import './SlideAPropos.scss';


function SlideAPropos() {

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(precedent => ({
            ...precedent,
            [id]: !precedent[id]
        }));
    };

    return (
        <article className="slide">
            {valeurs.map(item => (
                <SlideItem
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

export default SlideAPropos;