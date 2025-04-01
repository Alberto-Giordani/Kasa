import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerAPropos from '../../assets/images/Banner_2.png'
import CollapseAPropos from '../../components/CollapseAPropos'

function Apropos() {

    return (
        <div>
            <Header />
            <Banner image={BannerAPropos} showText={false} brightness={0.7} />
            <CollapseAPropos />
            <Footer />
        </div>
    )
}

export default Apropos