import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../../Redux/Slices/WishlistSlice';
import Header from '../../Components/Header/Header';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Wishlist.module.scss'
const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Dropdowns />
      <div className={styles.wishlist}> 
        {wishlist.map(product => (
          <div key={product.id} className={styles.product}> 
            <ProductCard data={product} />
            <div className={styles.product_buttons}> 
              <button onClick={() => dispatch(removeFromWishlist(product.id))}>Sil</button>
              <button onClick={() => dispatch(addToCart(product))}>Səbətə at</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
