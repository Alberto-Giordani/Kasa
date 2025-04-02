import Banner from '../../components/Banner'
import BannerAPropos from '../../assets/images/Banner_2.png'
import CollapseAPropos from '../../components/CollapseAPropos'

function Apropos({ valeurs }) {

    return (
        <div>
            <Banner image={BannerAPropos} showText={false} brightness={0.7} />
            <CollapseAPropos valeurs={valeurs} />
        </div>
    )
}

export default Apropos