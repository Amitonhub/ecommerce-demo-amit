import React, { useState } from "react";
import styles from "./Navbar.module.css";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import cartImg from "../../assets/cart.png";
import navHeart from '../../assets/navheart.png'
import wishBadge from '../../assets/wishBadge.png'
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Cart, WishlistItem } from "../types/Types";
import dropAccount from '../../assets/Navbar/dropAccount.png'
import cancellation from '../../assets/Navbar/cancellation.png'
import logOut from '../../assets/Navbar/logOut.png'
import myOrders from '../../assets/Navbar/myOrders.png'
import reviews from '../../assets/Navbar/reviews.png'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const userId = useSelector((state: RootState) => state.logIn.user?.id)
  const filteredWishlist = wishlist.filter((item: WishlistItem) => item.userId === userId);
  const filteredCart = cart.filter((item: Cart) => item.userId === userId);
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
                <div className={styles.wishCount}>{filteredWishlist.length}</div>
              </div>
              </Link>
            </div>
            <div>
            <Link className={styles.link} href={`/cart`}>
            <img className={styles.cart} alt="" src={cartImg.src} />
            <img
                  className={styles.cartBadge}
                  alt=""
                  src={wishBadge.src}
                />
                <div className={styles.cartCount}>{filteredCart.length}</div>
                </Link>
            </div>
            <img
              className={styles.dropdownIcon}
              alt=""
              src={user.src}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
             <div className={styles.accountDropdown}>
             <div className={styles.frameParent}>
               <div className={styles.userParent}>
                 <img className={styles.userIcon} alt="" src={dropAccount.src} />
                 <div className={styles.myAccountDrop}>Manage My Account</div>
               </div>
               <div className={styles.userParent}>
                 <img className={styles.iconMallbag} alt="" src={myOrders.src} />
                 <div className={styles.dropDownOptions}>My Order</div>
               </div>
               <div className={styles.userParent}>
                 <img className={styles.iconMallbag} alt="" src={cancellation.src} />
                 <div className={styles.dropDownOptions}>My Cancellations</div>
               </div>
               <div className={styles.userParent}>
                 <img className={styles.iconReviews} alt="" src={reviews.src} />
                 <div className={styles.dropDownOptions}>My Reviews</div>
               </div>
               <div className={styles.userParent}>
                 <img className={styles.iconMallbag} alt="" src={logOut.src} />
                 <div className={styles.dropDownOptions}>Logout</div>
               </div>
             </div>
           </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}
