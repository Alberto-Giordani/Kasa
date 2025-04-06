import Banner from '../../components/Banner'
import BannerHome from '../../assets/images/Banner_1.png'
import Card from '../../components/Card'
import './Home.scss'

function Home({ annonces }) {

  return (
    <main>
      <Banner image={BannerHome} showText={true} brightness={0.4} />
      <section className="cardContainer">
        <div className="cardContainer__wrapper">
          {annonces.map((annonce) => (
            <Card key={annonce.id} annonce={annonce} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
