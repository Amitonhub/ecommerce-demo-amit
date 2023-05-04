import React from "react";
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return <>
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
              <div className={styles.whatAreYou}>What are you looking for?</div>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/component-2.svg"
              />
            </div>
          </div>
          <div className={styles.wishlistParent}>
            <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
            <img
              className={styles.cart1WithBuy}
              alt=""
              src="/cart1-with-buy.svg"
            />
            <img className={styles.wishlistIcon} alt="" src="/user.svg" />
          </div>
        </div>
      </div></>;
}
