import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Gallery from '../../components/Gallery';
import Host from '../../components/Host';
import Stars from '../../components/Stars';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import './PropertyDetail.scss'

function PropertyDetail({ annonces }) {

    const { id } = useParams();
    const annonce = annonces.find(item => item.id === id);

    const [openItems, setOpenItems] = useState({});

    if (!annonce) {
        return <Navigate to='/404' />;
    }

    const toggleItem = (id) => {
        setOpenItems(precedent => ({
            ...precedent,
            [id]: !precedent[id]
        }));
    };

    return (
        <main className='fiche'>
            <Gallery
                pictures={annonce.pictures}
            />
            <section className='fiche__contenu'>
                <div className='fiche__premierePartie'>
                    <div className='fiche__titreEtTags'>
                        <h1 className='fiche__title'>{annonce.title}</h1>
                        <p className='fiche__location'>{annonce.location}</p>
                        <Tags annonce={annonce} />
                    </div>
                    <div className='fiche__hostEtStars'>
                        <Host annonce={annonce} />
                        <Stars annonce={annonce} />
                    </div>
                </div>
                <div>
                    <article className="collapse-property">
                        <Collapse
                            key={`${annonce.id}-description`}
                            id={`${annonce.id}-description`}
                            title="Description"
                            content={annonce.description}
                            isOpen={!!openItems[`${annonce.id}-description`]}
                            onToggle={toggleItem}
                        />
                        <Collapse
                            key={`${annonce.id}-equipement`}
                            id={`${annonce.id}-equipement`}
                            title="Équipements"
                            content={annonce.equipments.map((item, index) => (
                                <li className="collapse-property__equipement" key={index}>{item}</li>
                            ))}
                            isOpen={!!openItems[`${annonce.id}-equipement`]}
                            onToggle={toggleItem}
                        />
                    </article>
                </div>
            </section>
        </main>
    )
}

export default PropertyDetail