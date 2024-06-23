import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Dropdowns from "../../Components/Dropdowns/Dropdowns";
import Advantages from "../../Components/Advantages/Advantages";
import Footer from "../../Components/Footer/Footer";
import { FaAngleDown, FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./Computers.module.scss";

const Computers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [activeEndirimde, setActiveEndirimde] = useState(false);
  const [products, setProducts] = useState([]);

  const categories = [
    "Masaüstü kompüterlər",
    "Notebook və netbooklar",
    "MacBooklar",
    "Monobloklar",
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
      <div className={styles.comp}>
        <div className={styles.containerComp}>
          <div className={styles.foe}>
            <div className={styles.word}>
              <h1>KOMPÜTERLƏR</h1>
            </div>
            <div className={styles.picture}>
              <img
                src="https://mstore.az/upload/category/Komp%C3%BCterl%C9%99r%201.png"
                alt="Kompüterlər"
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
         <span className={styles.endirimdeText}>Endirim</span>  
          {activeEndirimde ? (
              <FaCheckSquare className={styles.checkIcon} />
            ) : (
              <MdCheckBoxOutlineBlank className={styles.blankIcon} />
            )}
            
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

export default Computers;
