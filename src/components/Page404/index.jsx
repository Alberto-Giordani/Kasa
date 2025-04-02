import './Page404.scss'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <section className='page404'>
            <h1 className='page404__title' >404</h1>
            <p className='page404__text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            <Link to="/" className='page404__link'>Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Page404