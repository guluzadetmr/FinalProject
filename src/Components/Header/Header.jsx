import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaRegUser } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { fetchCartItems, fetchUserProfile } from '../../Redux/Actions';
import { removeFromCart } from '../../Redux/Slices/CartSlice';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux'tan gerekli bilgileri almak
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.items);
  const isAdmin = useSelector((state) => state.isAdmin);

  useEffect(() => {
    // Kullanıcı profili ve sepet bilgilerini getirme
    dispatch(fetchUserProfile())
      .then(() => console.log('User profile fetched successfully'))
      .catch((err) => console.error('Failed to fetch user profile:', err));

    dispatch(fetchCartItems())
      .then(() => console.log('Cart items fetched successfully'))
      .catch((err) => console.error('Failed to fetch cart items:', err));
  }, [dispatch]);

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  const handleWishlistClick = () => {
    navigate('/Wishlist');
  };

  const handleCartClick = () => {
    setShowBasket(!showBasket);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/www.mstore.az', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mstore.az/', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileNavigation = (path) => {
    navigate(path);
    setShowProfileDropdown(false);
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch remove from cart action

  };

 
  const totalCartValue = cartItems ? 
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0) :
  0;

 

  return (
    <div className={styles.first}>
      <div className={styles.containerfirst}>
        <div className={styles.containerup}>
          <nav className={`${styles.nav}`}>
            <ul>
              <li>
                <a href="#" onClick={() => navigate('/')}>
                  Ana Səhifə
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigate('/Catalog')}>
                  Kataloq
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigate('/About Us')}>
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigate('/Contact')}>
                  Əlaqə
                </a>
              </li>
              {!user && (
                <>
                  <li>
                    <a href="#" onClick={() => navigate('/Login')}>
                      Daxil ol
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => navigate('/Register')}>
                      Qeydiyyatdan keç
                    </a>
                  </li>
                </>
              )}
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
            <div className={styles.iconsborder} onClick={handleProfileClick}>
              {user && user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className={styles.profilePicture}
                />
              ) : (
                <FaRegUser />
              )}
            </div>
            {showProfileDropdown && (
              <div className={styles.profileDropdown}>
                <p onClick={() => handleProfileNavigation('/profile')}>
                  Profil
                </p>
                <p onClick={() => handleProfileNavigation('/change-password')}>
                  Şifrəni dəyiş
                </p>
                {isAdmin && (
                  <p onClick={() => handleProfileNavigation('/dashboard')}>
                    Admin panel
                  </p>
                )}
              </div>
            )}
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
              <div className={styles.wishlistCount}>
                {user && user.wishlist ? user.wishlist.length : 0}
              </div>
            </div>
            <div className={styles.except} onClick={handleCartClick}>
              <h1>Səbətim</h1>
              <img
                src="https://mstore.az/public/img/icon/cart.svg"
                alt="Cart"
                className={styles.cartIcon}
              />
              <div className={styles.cartCount}>
                {cartItems ? cartItems.length : 0}
              </div>
              {showBasket && (
                <div className={styles.basket}>
                  <div className={styles.widget_shopping_cart_content}>
                    <p className={styles.basketText}>Səbətiniz</p>
                    <ul className={styles.cartList}>
                      {cartItems &&
                        cartItems.map((item) => (
                          <li key={item.id} className={styles.miniCartItem}>
                            <a href="#">
                              <img src={item.imageUrl} alt={item.name} />
                              {item.name}
                              <span className={styles.quantity}>
                                {item.quantity} × {item.price}₼
                              </span>
                            </a>
                            <button
                              className={styles.removeFromCartButton}
                              onClick={() => handleRemoveFromCart(item.id)}
                            >
                              ×
                            </button>
                          </li>
                        ))}
                    </ul>
                    <div className={styles.cartTotal}>
                      Toplam: {totalCartValue}₼
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
