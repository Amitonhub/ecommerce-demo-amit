import React from "react";
import styles from "../styles/Navbar.module.css";
import search from '../assets/search.png'
import user from '../assets/user.png'
import cart from '../assets/cart.png'
import wishlist from '../assets/wishlist.png'
import underline from '../assets/underline2.png'

export default function Navbar() {
  return (
    <>
        <div className={styles.header}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <b className={styles.exclusive}>Exclusive</b>
            </div>
            <div className={styles.headerParent}>
              <div className={styles.header1}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.header2}>
                <div className={styles.home}>Contact</div>
              </div>
              <div className={styles.header1}>
                <div className={styles.home}>About</div>
              </div>
              <div className={styles.header4}>
                <div className={styles.home}>Sign Up</div>
              </div>
            </div>
          </div>
          <div className={styles.searchComponentSetParent}>
            <div className={styles.searchComponentSet}>
              <div className={styles.whatAreYouLookingForParent}>
                <div className={styles.whatAreYou}>
                  What are you looking for?
                </div>
                <img
                  className={styles.dropdownIcon}
                  alt=""
                  src={search.src}
                />
              </div>
            </div>
            <div className={styles.wishlistParent}>
              <img className={styles.wishlistIcon} alt="" src={wishlist.src} />
              <img
                className={styles.cart1WithBuy}
                alt=""
                src={cart.src}
              />
              <img className={styles.wishlistIcon} alt="" src={user.src} />
            </div>
          </div>
        </div>
        <div className={styles.underline}></div>
    </>
  );
}
