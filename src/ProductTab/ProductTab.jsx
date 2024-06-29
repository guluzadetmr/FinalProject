import React, { useState } from 'react';
import styles from './ProductTab.module.scss';
import ProductCard from '../../Pages/ProductCard/ProductCard';

const ProductTabs = ({ newProducts, popularProducts }) => {
    const [activeTab, setActiveTab] = useState('new');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.tabs}>
            <div className={styles.tabHeaders}>
                <button 
                    className={activeTab === 'new' ? styles.active : ''} 
                    onClick={() => handleTabClick('new')}
                >
                    Yeni məhsullar
                </button>
                <button 
                    className={activeTab === 'popular' ? styles.active : ''} 
                    onClick={() => handleTabClick('popular')}
                >
                    Populyar məhsullar
                </button>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'new' ? (
                    <div className={styles.productList}>
                        {newProducts.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.productList}>
                        {popularProducts.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;
