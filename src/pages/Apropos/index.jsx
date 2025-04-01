import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerAPropos from '../../assets/images/Banner_2.png'
import SlideAPropos from '../../components/SlideAPropos'

function Apropos() {

    return (
        <div>
            <Header />
            <Banner image={BannerAPropos} showText={false} brightness={0.7} />
            <SlideAPropos />
            <Footer />
        </div>
    )
}

export default Apropos