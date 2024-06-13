import React, { useState } from "react";
import styles from "./Header.module.scss";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform search logic here (e.g., fetch data based on searchTerm)
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.first}>
      <div className={styles.container}>
        <div className={styles.containerup}>
          <nav>
            <ul>
              <li>
                <a href="">ANA SƏHİFƏ</a>
              </li>
              <li>
                <a href="">Kataloq</a>
              </li>
              <li>
                <a href="">Haqqımızda</a>
              </li>
              <li>
                <a href="">Əlaqə</a>
              </li>
            </ul>
          </nav>
          <div className={styles.icons}>
            <GrFacebookOption />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className={styles.containerbottom}>
          <div className={styles.logo}>
            <img src="https://mstore.az/public/img/newLogohead.png" alt="" />
          </div>
          <div className={styles.search}>
            <SearchBox />
          </div>
          <div className={styles.images}>
            <img src="https://mstore.az/public/img/icon/like.svg" alt="" />
            <div className={styles.except}>
           <h1>Səbətim</h1> <img src="https://mstore.az/public/img/icon/cart.svg" alt="" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
