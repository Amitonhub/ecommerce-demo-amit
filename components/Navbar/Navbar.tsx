import React from "react";
import styles from "./Navbar.module.css";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import navHeart from '../../assets/navheart.png'
import wishBadge from '../../assets/wishBadge.png'
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { WishlistItem } from "../types/Types";

export default function Navbar() {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const userId = useSelector((state: RootState) => state.logIn.user?.id)
  const filteredWishlist = wishlist.filter((item: WishlistItem) => item.userId === userId);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoParent}>
        <Link className={styles.link} href={`/`}>
          <div className={styles.logo}>
            <b className={styles.exclusive}>{`Exclusive`}</b>
          </div>
          </Link>
          <div className={styles.headerParent}>
            <div className={styles.header1}>
            <Link className={styles.link} href={`/`}>
              <div className={styles.home}>{`Home`}</div>
              </Link>
            </div>
            <div className={styles.header2}>
              <div className={styles.home}>{`Contact`}</div>
            </div>
            <div className={styles.header1}>
              <div className={styles.home}>{`About`}</div>
            </div>
            <div className={styles.header4}>
            <Link className={styles.link} href={`/login`}>
              <div className={styles.home}>{`Log In`}</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.searchComponentSetParent}>
          <div className={styles.searchComponentSet}>
            <div className={styles.whatAreYouLookingForParent}>
              <div className={styles.whatAreYou}>{`What are you looking for?`}</div>
              <img className={styles.dropdownIcon} alt="" src={search.src} />
            </div>
          </div>
          <div className={styles.wishlistParent}>
            <div className={styles.wishlist}>
            <Link href={`/wishlist`}>
              <img className={styles.vectorIcon} alt="" src={navHeart.src} />
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src={wishBadge.src}
                />
                <div className={styles.div}>{filteredWishlist.length}</div>
              </div>
              </Link>
            </div>
            <Link className={styles.link} href={`/cart`}>
            <img className={styles.cart1WithBuy} alt="" src={cart.src} />
            </Link>
            <img className={styles.wishlistIcon} alt="" src={user.src} />
          </div>
        </div>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}
