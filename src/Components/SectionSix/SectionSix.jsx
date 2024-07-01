import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionSix.module.scss';
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionSix = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Mobil Telefonlar" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Mobil Telefonlar')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionSix}>
      <div className={styles.sectionHeader}>
        <h2>Mobil Telefonlar</h2>
        <Link to="/Phones" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionSix;