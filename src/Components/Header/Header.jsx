import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigate();

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleWishlistClick = () => {
    navigation("/Wishlist");
  };

  const handleCartClick = () => {
    navigation("/Cart");
  };
  const handleLogoClick = () => {
    navigation("/");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/www.mstore.az", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/mstore.az/", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <div className={styles.first}>
      <div className={styles.containerfirst}>
        <div className={styles.containerup}>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => navigation("/")}>
                  Ana Səhifə
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigation("/Catalog")}>
                  Kataloq
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigation("/About Us")}>
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigation("/Contact")}>
                  Əlaqə
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigation("/Login")}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigation("/Register")}>
                  Register
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.icons}>
            <div className={styles.iconsborder} onClick={handleFacebookClick}>
              <GrFacebookOption />
            </div>
            <div className={styles.iconsborder} onClick={handleInstagramClick}>
              <FaInstagram />
            </div>
            <div className={styles.iconsborder} onClick={handleYoutubeClick}>
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className={styles.containerbottom}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <img
              src="https://mstore.az/public/img/newLogohead.png"
              alt="Logo"
            />
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Axtar.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.searchIcn} onClick={handleSearch}>
              <FaSearch className={styles.searchIcon} />
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.likeContainer} onClick={handleWishlistClick}>
              <img
                src="https://mstore.az/public/img/icon/like.svg"
                alt="Like"
                className={styles.likeIcon}
              />
              <div className={styles.wishlistCount}>{wishlistCount}</div>
            </div>
            <div className={styles.except} onClick={handleCartClick}>
              <h1>Səbətim</h1>
              <img
                src="https://mstore.az/public/img/icon/cart.svg"
                alt="Cart"
                className={styles.cartIcon}
              />
              <div className={styles.cartCount}>{cartCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
