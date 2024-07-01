import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import SectionOne from '../../Components/SectionOne/SectionOne';
import Footer from '../../Components/Footer/Footer';
import Advantages from '../../Components/Advantages/Advantages';
import Carousel from '../../Components/Carousel/Carousel';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import ProductCategories from '../../Components/ProductCategories/ProductCategories';
import ProductTabs from '../../Components/ProductTab/ProductTab';
import SectionTwo from '../../Components/SectionTwo/SectionTwo';
import SectionThree from '../../Components/SectionThree/SectionThree';
import SectionFour from '../../Components/SectionFour/SectionFour';
import SectionFive from '../../Components/SectionFive/SectionFive';
import SectionSix from '../../Components/SectionSix/SectionSix';
import SectionSeven from '../../Components/SectionSeven/SectionSeven';
// import ProductTabs from '../../Components/ProductTabs/ProductTabs'; // ProductTabs bileşenini doğru yolu

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Yeni ürünleri ve popüler ürünleri backend'den fetch etmek
    fetch('/api/new-products')
      .then(response => response.json())
      .then(data => setNewProducts(data));

    fetch('/api/popular-products')
      .then(response => response.json())
      .then(data => setPopularProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <Dropdowns />
      <SectionOne />
      <Carousel />
      <ProductTabs newProducts={newProducts} popularProducts={popularProducts} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <ProductCategories />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Home;
