import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

const Carousel = () => {
  const images = [
    'https://mstore.az/upload/marka/1686983556.jpeg',
    'https://mstore.az/upload/marka/1685741842.png',
    'https://mstore.az/upload/marka/1686520616.png',
    'https://mstore.az/upload/marka/1685742482.png',
    'https://mstore.az/upload/marka/1685742501.png',
    'https://mstore.az/upload/marka/1702652641.png',
    'https://mstore.az/upload/marka/1698675195.png',
    'https://mstore.az/upload/marka/1709237305.png',
    'https://mstore.az/upload/marka/1709237305.png',
    'https://mstore.az/upload/marka/1685690096.png',
    'https://mstore.az/upload/marka/1686511362.png',
    'https://mstore.az/upload/marka/1685742654.png',
    'https://mstore.az/upload/marka/1686510911.png',
    'https://mstore.az/upload/marka/1685690242.png',
    'https://mstore.az/upload/marka/1685690270.png',
    'https://mstore.az/upload/marka/1717738282.png',
    'https://mstore.az/upload/marka/1687901185.png',
    'https://mstore.az/upload/marka/1685742326.png',
    'https://mstore.az/upload/marka/1688758571.png',
    'https://mstore.az/upload/marka/1705326553.png',
    'https://mstore.az/upload/marka/1685743059.png',
    'https://mstore.az/upload/marka/1685690367.jpg',
    'https://mstore.az/upload/marka/1701356492.png',
    'https://mstore.az/upload/marka/1685690385.png',
    'https://mstore.az/upload/marka/1685690412.png',
    'https://mstore.az/upload/marka/1685690450.png',
    'https://mstore.az/upload/marka/1686511186.png',
    'https://mstore.az/upload/marka/1685743497.png',
    'https://mstore.az/upload/marka/1685743932.png',
    'https://mstore.az/upload/marka/1685744154.png',
    'https://mstore.az/upload/marka/1685742137.png',
    'https://mstore.az/upload/marka/1686174562.png',
    'https://mstore.az/upload/marka/1685690761.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * (100 / 7)}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
