import './Host.scss'

function Host({ annonce }) {
    const name = annonce.host.name;
    const [prenom, nom] = name.split(" ");
    const photo = annonce.host.picture;

    return (
        <div className='host'>
            <p className='host__name'>{prenom}<span>{nom}</span></p>
            <img
                key={name}
                src={photo}
                alt={`Image ${name}`}
                className='host__img'
            />
        </div>
    )
}

export default Host