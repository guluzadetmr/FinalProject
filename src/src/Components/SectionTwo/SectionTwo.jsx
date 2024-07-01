import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionTwo.module.scss'
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionTwo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Kompüterlər" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Kompüterlər')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionTwo}>
      <div className={styles.sectionHeader}>
        <h2>Kompüterlər</h2>
        <Link to="/computers" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
