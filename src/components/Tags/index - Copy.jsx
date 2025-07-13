import './Tags.scss';

function Tags({ annonce }) {
    return (
        <div className='tags'>
            {annonce.tags.map((tag) => (
                <button key={tag} className='tags--btn'>
                    {tag}
                </button>
            ))}
        </div>
    )
}

export default Tags;