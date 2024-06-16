import React from 'react'
import Header from '../../Components/Header/Header'
import SectionOne from '../../Components/SectionOne/SectionOne'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import SectionThree from '../../Components/SectionThree/SectionThree'
import SectionFour from '../../Components/SectionFour/SectionFour'
import Footer from '../../Components/Footer/Footer'
import Advantages from '../../Components/Advantages/Advantages'

const Home = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Advantages />
      <Footer />
    </div>
  )
}

export default Home
