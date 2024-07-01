import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionFive.module.scss';
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionFive = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Məişət texnikası" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Məişət texnikası')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionFive}>
      <div className={styles.sectionHeader}>
        <h2>Məişət texnikası</h2>
        <Link to="/Household" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;