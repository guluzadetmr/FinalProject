import React from 'react'
import Header from '../../Components/Header/Header'
import SectionOne from '../../Components/SectionOne/SectionOne'
import SectionThree from '../../Components/SectionThree/SectionThree'
import SectionFour from '../../Components/SectionFour/SectionFour'
import Footer from '../../Components/Footer/Footer'
import Advantages from '../../Components/Advantages/Advantages'
import Carousel from '../../Components/Carousel/Carousel'
import Dropdowns from '../../Components/Dropdowns/Dropdowns'

const Home = () => {
  return (
    <div>
      <Header />
      <Dropdowns />
      <SectionOne />
      <Carousel />
      <SectionThree />
      <SectionFour />
      <Advantages />
      <Footer />
    </div>
  )
}

export default Home
