import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CardsNav from '../pages/CardsNavigate'
import Gallery from './Gallery'
import AboutPage from './About'
import ContactPage from './Contact'

const Home = () => {
  return (
    <div>
       
        <Banner/>
         <CardsNav/>
        <AboutPage/>
       
        <ContactPage/>
         <Gallery/>
       
    </div>
  )
}

export default Home