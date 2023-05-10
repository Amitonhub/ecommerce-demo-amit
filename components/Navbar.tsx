import React from "react";
import styles from "../styles/Navbar.module.css";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import navHeart from '../assets/navheart.png'
import wishBadge from '../assets/wishBadge.png'
import Link from "next/link";

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
            <Link className={styles.link} href={`/`}>
              <div className={styles.home}>Home</div>
              </Link>
            </div>
            <div className={styles.header2}>
              <div className={styles.home}>Contact</div>
            </div>
            <div className={styles.header1}>
              <div className={styles.home}>About</div>
            </div>
            <div className={styles.header4}>
            <Link className={styles.link} href={`/login`}>
              <div className={styles.home}>Log In</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.searchComponentSetParent}>
          <div className={styles.searchComponentSet}>
            <div className={styles.whatAreYouLookingForParent}>
              <div className={styles.whatAreYou}>What are you looking for?</div>
              <img className={styles.dropdownIcon} alt="" src={search.src} />
            </div>
          </div>
          <div className={styles.wishlistParent}>
            <div className={styles.wishlist}>
              <img className={styles.vectorIcon} alt="" src={navHeart.src} />
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src={wishBadge.src}
                />
                <div className={styles.div}>0</div>
              </div>
            </div>
            <img className={styles.cart1WithBuy} alt="" src={cart.src} />
            <img className={styles.wishlistIcon} alt="" src={user.src} />
          </div>
        </div>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}
