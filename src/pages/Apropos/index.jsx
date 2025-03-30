import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerAPropos from '../../assets/images/Banner_2.png'
import Collapse from '../../components/Collapse'

function Apropos() {

    return (
        <div>
            <Header />
            <Banner image={BannerAPropos} showText={false} brightness={0.7} />
            <Collapse />
            <Footer />
        </div>
    )
}

export default Apropos