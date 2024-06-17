import React from "react";
import Header from "../../Components/Header/Header";
import Advantages from "../../Components/Advantages/Advantages";
import styles from "./AboutUs.module.scss";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className={styles.about}>
        <div className={styles.containerAbout}>
          <div className={styles.icons}>
            <img
              src="https://mstore.az/upload/articles/1600853904.jpg"
              alt=""
            />
          </div>
          <div className={styles.texts}>
            <h1>Haqqımızda</h1>
            <div className={styles.mstore}>
 <p>
              Mstore.az M.Electronics mağazası kimi 2013-cü ildən fəaliyyət
              göstərir. Hal hazırda Süleyman Rüstəm 15e-də yerləşir. Əsas
              fəliyyət sahəsinə kompüterlər, telefonlar, printerlər, şəbəkə və
              məişət avadanlıqları və ehtiyyat hissələrinin satışı daxildir.
              Uzun illər bu sahədə fəaliyyət, real mal qalığı , rəsmi satış və
              yaxşı qiymətlər ilə müştəriləri mağazamızdan yararlanmağa dəvət
              edirik . Sizi də, öz müştərilərimizin sırasında görməkdən məmnun
              olarıq.
            </p>
            <p>
              Qeyd : Satışlar nəğd, bank kartları və ya köçürmə (ədv) ilə həyata
              keçirilir.
            </p>
            </div>
           
          </div>
        </div>
      </div>
      <Advantages />
    </div>
  );
};

export default AboutUs;
