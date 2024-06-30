import React from "react";
import styles from "./Advantages.module.scss";
const Advantages = () => {
  return (
    <div className={styles.advantageSec}>
      <div className={styles.containerAd}>
        <div className={styles.sections}>
          <div className={styles.delivery}>
            <div className={styles.deliveryPic}>
              <img src="https://mstore.az/public/img/icon/icon10.svg" alt="" />
            </div>
            <div className={styles.deliveryText}>
              <h3> Sürətli çatdırılma</h3>
            </div>
          </div>
          <div className={styles.sales}>
            <div className={styles.salesPic}>
              <img src="https://mstore.az/public/img/icon/icon1.svg" alt="" />
            </div>
            <div className={styles.salesText}>
              <h3>Tam zəmanətli satış və servis</h3>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.pricePic}>
              <img src="https://mstore.az/public/img/icon/icon8.svg" alt="" />
            </div>
            <div className={styles.priceText}>
              <h3>Hissə Hissə ödəniş imkanı</h3>
            </div>
          </div>
          <div className={styles.payment}>
            <div className={styles.paymentPic}>
              <img src="https://mstore.az/public/img/icon/icon6.svg" alt="" />
            </div>
            <div className={styles.paymentText}>
              <h3>Onlayn ödəniş</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
