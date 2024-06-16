// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.scss'; 
// import 'slick-carousel/slick/slick-theme.scss';
// import styles from './SectionOne.module.scss';


// const ImageSlider = ({ images }) => {
//   const settings = {
//     dots: true, 
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Otomatik oynatma etkinleştirildi
//     autoplaySpeed: 3000, // 3 saniye aralığında değişim
//   };

// return (
//   <div className={styles.sliderContainer}>
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className={styles.imageContainer}>
//           <img src={image} alt={Slide ${index + 1}} className={styles.image} />
//         </div>
//       ))}
//     </Slider>
//   </div>
// );
// };

// const SectionOne = () => {
//   const images = [
//     'https://mstore.az/upload/slider/1711800530.jpeg',
//     'https://mstore.az/upload/slider/1711800566.jpeg',
//     'https://mstore.az/upload/slider/1711800576.jpeg',
//     'https://mstore.az/upload/slider/1711800592.jpeg',
//     'https://mstore.az/upload/slider/1711800603.jpeg',
//     'https://mstore.az/upload/slider/1711800612.jpeg',
//   ];

//   return (
//     <div className={styles.one}>
//       <div className={styles.containerOne}>
//         <ImageSlider images={images} />
//       </div>
//     </div>
//   );
// };

// export default SectionOne;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.scss'; 
// import 'slick-carousel/slick/slick-theme.scss';
// import styles from './SectionOne.module.scss';

// const ImageSlider = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     appendDots: dots => (
//       <div className={styles.customDots}>
//         <ul> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div className={styles.dot}></div>
//     ),
//   };

//   return (
// <div className={styles.sliderContainer}>
// <Slider {...settings}>
//  {images.map((image, index) => (
//  <div key={index} className={styles.imageContainer}>
// <img src={image} alt={Slide ${index + 1}} className={styles.image}/>
//  </div>
// ))}
// </Slider>
//  </div>
//  );
// };

// const SectionOne = () => {
//   const images = [
//     'https://mstore.az/upload/slider/1711800530.jpeg',
//     'https://mstore.az/upload/slider/1711800566.jpeg',
//     'https://mstore.az/upload/slider/1711800576.jpeg',
//     'https://mstore.az/upload/slider/1711800592.jpeg',
//     'https://mstore.az/upload/slider/1711800603.jpeg',
//     'https://mstore.az/upload/slider/1711800612.jpeg',
//   ];

//   return (
//     <div className={styles.one}>
//       <div className={styles.containerOne}>
//         <ImageSlider images={images} />
//       </div>
//     </div>
//   );
// };

// export default SectionOne;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss'; 
import 'slick-carousel/slick/slick-theme.scss';
import styles from './SectionOne.module.scss';

const ImageSlider = ({ images }) => {
 const settings = {
 dots: true,
 infinite: true,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 appendDots: dots => (
 <div className={styles.customDots}>
 <ul> {dots} </ul>
 </div>
 ),
 customPaging: i => (
 <div className={styles.dot}></div>
 ),
 };

 return (
 <div className={styles.sliderContainer}>
 <Slider {...settings}>
{images.map((image, index) => (
<div key={index} className={styles.imageContainer}>
 <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
 </div>
 ))}
 </Slider>
</div>
);
};

const SectionOne = () => {
const images = [
'https://mstore.az/upload/slider/1711800530.jpeg',
 'https://mstore.az/upload/slider/1711800566.jpeg',
 'https://mstore.az/upload/slider/1711800576.jpeg',
 'https://mstore.az/upload/slider/1711800592.jpeg',
 'https://mstore.az/upload/slider/1711800603.jpeg',
 'https://mstore.az/upload/slider/1711800612.jpeg',
 ];
return (
 <div className={styles.one}>
 <div className={styles.containerOne}>
 <ImageSlider images={images} />
</div>
 </div>
);
};

export default SectionOne;
