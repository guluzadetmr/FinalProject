import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Dropdowns from "../../Components/Dropdowns/Dropdowns";
import Advantages from "../../Components/Advantages/Advantages";
import Footer from "../../Components/Footer/Footer";
import { FaAngleDown, FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./Others.module.scss";
import ProductCard from "../ProductCard/ProductCard";

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
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (activeNav) {
      handleNavClick(activeNav);
    }
  }, [activeNav]);

  const handleEndirimdeClick = () => {
    setActiveEndirimde(!activeEndirimde);
    fetch(`https://api.example.com/products?discount=true`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
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
          <div className={styles.container} onClick={toggleDropdown}>
            <div className={styles.containerDown}>
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
            <div className={styles.search_btn}>
              <button>Axtar</button>
            </div>
          </div>

          <div className={styles.left}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                <span className={styles.endirimdeText}>Endirimdə</span>
                {activeEndirimde ? (
                  <FaCheckSquare className={styles.checkIcon} />
                ) : (
                  <MdCheckBoxOutlineBlank className={styles.blankIcon} />
                )}
              </div>
            </div>
            <div className={styles.productList}>
              {products?.map((product) => (
                <ProductCard data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Advantages />
      <Footer />
    </div>
  );
};

export default Others;
