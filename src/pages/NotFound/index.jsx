import './NotFound.scss'
import { Link } from 'react-router-dom'

function NotFound() {

    return (
        <section className='notFound'>
            <h1 className='notFound__title' >404</h1>
            <p className='notFound__text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            <Link to="/" className='notFound__link'>Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default NotFound