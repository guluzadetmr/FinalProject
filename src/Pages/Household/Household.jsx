import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import Advantages from '../../Components/Advantages/Advantages';
import Footer from '../../Components/Footer/Footer';
import styles from './Household.module.scss'; 
import { FaAngleDown, FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Household = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [activeEndirimde, setActiveEndirimde] = useState(false);
  const [products, setProducts] = useState([]);

  const categories = [
    "Kondisioner",
    "Soyuducu",
    "Paltaryuyan",
    "Televizor",
    "Çaydanlar",
    "Kofe üyüdənlər",
    "Şirə çəkənlər",
    "Tozsoran",
    "Digər elektrikli avadanlıqlar",
    "Qaz sobaları",
    "Qaz plitələri",
    "Aspiratorlar",
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
      <div className={styles.house}>
        <div className={styles.containerHouse}>
          <div className={styles.foe}>
            <div className={styles.word}>
              <h1>MƏİŞƏT TEXNİKASI</h1>
            </div>
            <div className={styles.picture}>
              <img
                src="https://mstore.az/upload/category/meiset.png"
                alt="MƏİŞƏT TEXNİKASI"
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

export default Household;

