import React from 'react'
import Header from '../../Components/Header/Header'
import SectionOne from '../../Components/SectionOne/SectionOne'
import Footer from '../../Components/Footer/Footer'
import Advantages from '../../Components/Advantages/Advantages'
import Carousel from '../../Components/Carousel/Carousel'
import Dropdowns from '../../Components/Dropdowns/Dropdowns'
import ProductCategories from '../../Components/ProductCategories/ProductCategories'
import SectionFour from '../../Components/SectionFour/SectionFour'

const Home = () => {
  return (
    <div>
      <Header />
      <Dropdowns />
      <SectionOne />
      <Carousel />
 <SectionFour />
      <ProductCategories />
      <Advantages />
      <Footer />
    </div>
  )
}

export default Home
