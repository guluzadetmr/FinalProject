import React, { useState } from "react";
import styles from "./Header.module.scss";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return <div></div>;
};

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.first}>
      <div className={styles.containerfirst}>
        <div className={styles.containerup}>
          <nav>
            <ul>
              <li>
                <a href="" onClick={() => navigation("/")}>
                  Ana Səhifə
                </a>
              </li>
              <li>
                <a href="">Kataloq</a>
              </li>
              <li>
                <a href="" onClick={() => navigation("/About Us")}>
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="" onClick={() => navigation("/Contact")}>
                  Əlaqə
                </a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
            </ul>
          </nav>
          <div className={styles.icons}>
            <div className={styles.iconsborder}>
              <GrFacebookOption />
            </div>
            <div className={styles.iconsborder}>
              <FaInstagram />
            </div>
            <div className={styles.iconsborder}>
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className={styles.containerbottom}>
          <div className={styles.logo}>
            <img src="https://mstore.az/public/img/newLogohead.png" alt="" />
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="axtar" />
            <FaSearch  className={styles.searchinput}/>
          </div>
          <div className={styles.images}>
            <img src="https://mstore.az/public/img/icon/like.svg" alt="" />
            <div className={styles.except}>
              <h1>Səbətim</h1>
              <img src="https://mstore.az/public/img/icon/cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
