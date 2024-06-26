// import React from 'react'
// import Header from '../../Components/Header/Header'
// import SectionOne from '../../Components/SectionOne/SectionOne'
// import Footer from '../../Components/Footer/Footer'
// import Advantages from '../../Components/Advantages/Advantages'
// import Carousel from '../../Components/Carousel/Carousel'
// import Dropdowns from '../../Components/Dropdowns/Dropdowns'
// import ProductCategories from '../../Components/ProductCategories/ProductCategories'
// import SectionFour from '../../Components/SectionFour/SectionFour'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Dropdowns />
//       <SectionOne />
//       <Carousel />
//  <SectionFour />
//       <ProductCategories />
//       <Advantages />
//       <Footer />
//     </div>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import SectionOne from '../../Components/SectionOne/SectionOne';
import Footer from '../../Components/Footer/Footer';
import Advantages from '../../Components/Advantages/Advantages';
import Carousel from '../../Components/Carousel/Carousel';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import ProductCategories from '../../Components/ProductCategories/ProductCategories';
import ProductTabs from '../../Components/ProductTab/ProductTab';
// import ProductTabs from '../../Components/ProductTabs/ProductTabs'; // ProductTabs bileşenini doğru yolu

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Yeni ürünleri ve popüler ürünleri backend'den fetch edin
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
      <ProductCategories />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Home;
