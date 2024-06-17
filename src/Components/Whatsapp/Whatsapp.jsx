import React from "react";
import styles from "./Whatsapp.module.scss";
import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {
  return (
    <div className={styles.network}>
      <div className={styles.containerNetwork}>
        <button>
          <a href="+994 77 244 71 00">
            Bizə yazın <FaWhatsapp />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Whatsapp;