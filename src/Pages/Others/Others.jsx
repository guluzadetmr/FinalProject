import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import Advantages from '../../Components/Advantages/Advantages';
import Footer from '../../Components/Footer/Footer';
import styles from './Others.module.scss';
import { FaAngleDown, FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Others = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [activeEndirimde, setActiveEndirimde] = useState(false);
  const [products, setProducts] = useState([]);

  const categories = [
    "Monitorlar",
    "Klaviatura və siçanlar",
    "Printer və skanerlər",
    "Web kameralar",
    "Uninterruptible Power",
    "Supply (UPS)",
    "Yaddaş qurğuları",
    "Proyektorlar",
    "Soundbarlar",
    "Mikrofonlar",
    "Kalonkalar",
    "Notebook və Netbook çantaları",
    "Katriclər",
    "Printerlər üçün",
    "Proyektor üçün"
  ];

  const navItems = [
    { label: "Əvvəlcə ucuz", value: "cheap" },
    { label: "Əvvəlcə bahalı", value: "expensive" },
    { label: "Yeni məhsullar", value: "new" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavClick = (value) => {
    setActiveNav(value);
    fetch(`https://api.example.com/products?filter=${value}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleEndirimdeClick = () => {
    setActiveEndirimde(!activeEndirimde);
    fetch(`https://api.example.com/products?discount=true`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <Header />
      <Dropdowns />
      <div className={styles.others}>
        <div className={styles.containerOthers}>
          <div className={styles.foe}>
            <div className={styles.word}>
              <h1>DİGƏR</h1>
            </div>
            <div className={styles.picture}>
              <img
                src="https://mstore.az/upload/category/diger3-1.png"
                alt="Digər"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoryDropdown}>
        <div className={styles.containerAll}>
          <div className={styles.containerDown} onClick={toggleDropdown}>
            <span className={styles.categoryTitle}>Kateqoriyalar</span>
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
          <nav className={styles.nav}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={activeNav === item.value ? styles.active : ""}
                    onClick={() => handleNavClick(item.value)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.endirimdeContainer} onClick={handleEndirimdeClick}>
            {activeEndirimde ? (
              <FaCheckSquare className={styles.checkIcon} />
            ) : (
              <MdCheckBoxOutlineBlank className={styles.blankIcon} />
            )}
            <span className={styles.endirimdeText}>Endirimdə</span>
          </div>
        </div>
      </div>

      <div className={styles.productList}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <Advantages />
      <Footer />
    </div>
  );
};

export default Others;
