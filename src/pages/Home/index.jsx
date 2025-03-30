import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import CardContainer from '../../components/CardContainer'
import annonces from '../../data/annonces.json'
import './Home.scss'

function Home() {

  return (
    <div>
      <Header />
      <Banner />
      <CardContainer annonces={annonces} />
      <Footer />
    </div>
  )
}

export default Home
