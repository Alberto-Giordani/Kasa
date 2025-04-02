import Banner from '../../components/Banner'
import BannerHome from '../../assets/images/Banner_1.png'
import CardContainer from '../../components/CardContainer'
import './Home.scss'

function Home({ annonces }) {

  return (
    <div>
      <Banner image={BannerHome} showText={true} brightness={0.4} />
      <CardContainer annonces={annonces} />
    </div>
  )
}

export default Home
