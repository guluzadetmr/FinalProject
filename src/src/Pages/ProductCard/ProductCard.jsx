import React from 'react'
import styles from './styles.module.scss'

const ProductCard = ({ data }) => {

    const { title, desc, price, img } = data
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    {title}
                </div>
                <div className={styles.card_desc}>
                    {desc}
                </div>
                <p className={styles.card_price}>
                    <span>
                        {price}$
                    </span>
                    Məhsulun qiyməti
                </p>
            </div>
        </div>
    )
}

export default ProductCard