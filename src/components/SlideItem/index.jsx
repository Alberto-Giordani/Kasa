import Arrow from '../Arrow';
import './SlideItem.scss';

function SlideItem({ id, title, content, isOpen, onToggle }) {
    return (
        <div className={`slide__element ${isOpen ? 'open' : ''}`}>
            <div className="slide__element--title" onClick={() => onToggle(id)}>
                <h4>{title}</h4>
                <Arrow isOpen={isOpen} />
            </div>
            <div className="slide__element--definition">
                {content}
            </div>
        </div>
    );
}

export default SlideItem;