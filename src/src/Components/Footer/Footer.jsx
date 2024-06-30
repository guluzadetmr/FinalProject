import React from "react";
import styles from "./Footer.module.scss";
import Whatsapp from "../Whatsapp/Whatsapp";
const Footer = () => {
  return (
    <div className={styles.last}>
      <div className={styles.containerlast}>
        <div className={styles.left}>
          <div className={styles.text}>
            <img src="https://mstore.az/public/img/newLogofooter.png" alt="" />
          </div>
          <h3>Mstore.az © 2024. Bütün hüquqlar qorunur.</h3>
        </div>

        <div className={styles.middle}>
          <h4>Şirkət</h4>
          <p>Haqqımızda</p>
        </div>
        <div className={styles.right}>
          <h4>Bizimlə əlaqə</h4>
          <div className={styles.numbers}>
            <span>+994 77 244 71 00</span>
            <span>+994 12 493 64 04</span>
          </div>

          <div className={styles.mail}>
            <p>office@mstore.az</p>
          </div>
          <div className={styles.address}>
            <p>Bakı, Süleyman Rüstəm 15e</p>
          </div>
        </div>
      </div>
      <Whatsapp />
    </div>
  );
};

export default Footer;
