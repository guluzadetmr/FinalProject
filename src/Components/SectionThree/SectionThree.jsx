import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionThree.module.scss'
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionThree = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Kompüterlər" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Kompüter hissələri')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionThree}>
      <div className={styles.sectionHeader}>
        <h2>Kompüter Hissələri</h2>
        <Link to="/ComputerParts" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionThree;