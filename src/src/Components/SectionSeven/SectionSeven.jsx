import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionSeven.module.scss';
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionSeven = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Digər" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Digər')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionSeven}>
      <div className={styles.sectionHeader}>
        <h2>Digər</h2>
        <Link to="/Others" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionSeven;