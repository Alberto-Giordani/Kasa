// **********************************************
// Composant CollapseItem
// **********************************************
//
// Ce composant est utilisé pour afficher un élément dépliable (collapse).
// Il affiche un titre cliquable qui, lorsqu'il est activé, déclenche une fonction de basculement (onToggle)
// permettant d'afficher ou de masquer le contenu associé.
// 
// Props attendues :
// - id       : identifiant unique de l'élément, utilisé pour la gestion de l'état ouvert/fermé.
// - title    : le titre affiché dans l'en-tête de l'élément collapsible.
// - content  : le contenu à afficher lorsque l'élément est déplié.
// - isOpen   : booléen indiquant si l'élément est actuellement ouvert (true) ou fermé (false).
// - onToggle : fonction appelée lors du clic, qui reçoit l'id de l'élément à basculer.
//
import Arrow from '../Arrow';
import './CollapseItem.scss';

function CollapseItem({ id, title, content, isOpen, onToggle }) {
    return (
        <div className={`collapse__element ${isOpen ? 'open' : ''}`}>
            <div className="collapse__element--title" onClick={() => onToggle(id)}>
                <h4>{title}</h4>
                <Arrow isOpen={isOpen} />
            </div>
            <div className="collapse__element--definition">
                {content}
            </div>
        </div>
    );
}

export default CollapseItem;