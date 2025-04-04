// **********************************************
// Composant CollapseAPropos
// **********************************************
//
// Ce composant affiche une liste d'éléments dépliables ("CollapseItem").
// Il reçoit en prop un tableau "valeurs" contenant les données (id, title, content)
// de chaque élément à afficher - que nous irons ensuite récupérer depuis 'data/valeursAPropos.json'.
//
// Le composant utilise un état local (openItems) pour suivre quels éléments sont ouverts.
// La fonction toggleItem met à jour cet état en inversant la valeur associée à un id donné.
// Chaque élément du tableau "valeurs" est rendu via le composant CollapseItem,
// auquel sont passées les données et la fonction de basculement (onToggle).
//
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