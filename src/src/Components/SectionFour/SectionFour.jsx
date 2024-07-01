import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SectionFour.module.scss';
import ProductCard from '../../Pages/ProductCard/ProductCard';

const SectionFour = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend'den "Şəbəkə avadanlıqları" kategorisine ait ürünleri çekmek
    axios.get('/api/products?category=Şəbəkə avadanlıqları')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className={styles.sectionFour}>
      <div className={styles.sectionHeader}>
        <h2>Şəbəkə avadanlıqları</h2>
        <Link to="/Equipment" className={styles.moreLink}>Daha çox</Link>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionFour;