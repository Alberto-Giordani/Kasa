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