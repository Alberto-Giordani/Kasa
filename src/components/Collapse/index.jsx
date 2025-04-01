import './Collapse.scss'
import { Link } from 'react-router-dom'

function Collapse() {
    return (
        <section className='collapse'>
            <h1 className='collapse__title' >404</h1>
            <p className='collapse__text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            <Link to="/" className='collapse__link'>Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Collapse