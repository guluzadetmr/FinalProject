import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Advantages from "../../Components/Advantages/Advantages";
import Dropdowns from "../../Components/Dropdowns/Dropdowns";
import Footer from "../../Components/Footer/Footer";
import styles from "./Catalog.module.scss";
import { FaAngleDown } from "react-icons/fa6";

const Catalog = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "KOMPUTERLƏR",
    "KOMPUTER HİSSƏLƏRİ",
    "ŞƏBƏKƏ AVADANLIQLARI",
    "MƏİŞƏT TEXNİKASI",
    "TELEFONLAR",
    "PLANŞETLƏR",
    "DİGƏR",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <Header />
      <Dropdowns />
      <div className={styles.categoryDropdown}>
        <div className={styles.containerAll}>
          <div className={styles.containerDown} onClick={toggleDropdown}>
            <span className={styles.categoryTitle}>
              Kateqoriyalar
            </span>
            <FaAngleDown className={styles.down} onClick={toggleDropdown} />
          </div>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#">{category}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Advantages />
      <Footer />
    </div>
  );
};

export default Catalog;
