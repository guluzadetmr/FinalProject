import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'

const ProductCard = ({ data }) => {
    const [allCategories, setAllCategories] = useState([]);

    const getCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/products');
        console.log(res.data);
  
        if (Array.isArray(res.data)) {
          setAllCategories(res.data);
        } else {
          console.error('API response is not an array:', res.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  
    useEffect(() => {
      getCategories();
    }, []);

   
  
    // const { title, desc, price, img } = data
    let title  = "Test"
    let desc = "test"
    let price =  5
    return (
       <div>
        {allCategories.map(({name,description,images,price})=>(
             <div className={styles.card}>
            
             <div className={styles.card_img}>
                 <img src={images[0]} alt="" />
             </div>
             <div className={styles.card_content}>
                 <div className={styles.card_title}>
                     {name}
                 </div>
                 <div className={styles.card_desc}>
                     {description}
                 </div>
                 <p className={styles.card_price}>
                     <span>
                         {price}$
                     </span>
                     Məhsulun qiyməti
                 </p>
             </div>
         </div>
        ))}
       </div>
    )
}

export default ProductCard