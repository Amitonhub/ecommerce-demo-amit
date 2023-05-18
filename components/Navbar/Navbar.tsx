import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import cartImg from "../../assets/cart.png";
import navHeart from '../../assets/navheart.png'
import wishBadge from '../../assets/wishBadge.png'
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Cart, WishlistItem } from "../types/Types";
import dropAccount from '../../assets/Navbar/dropAccount.png'
import cancellation from '../../assets/Navbar/cancellation.png'
import logOut from '../../assets/Navbar/logOut.png'
import myOrders from '../../assets/Navbar/myOrders.png'
import reviews from '../../assets/Navbar/reviews.png'
import { setSearchText } from "@/redux/actions/SearchAction";
import { useRouter } from "next/router";
import { logOutAction } from "@/redux/actions/LogInAction";
import { logOutUserDataInLocalStorage } from "@/localstorage/localstorage";
import Swal from "sweetalert2";

export default function Navbar() {
  const dispatch = useDispatch()
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wishlist = useSelector((state: RootState) => state.rootReducer.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state.rootReducer.cart.cart);
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id)
  const filteredWishlist = wishlist.filter((item: WishlistItem) => item.userId === userId);
  const filteredCart = cart.filter((item: Cart) => item.userId === userId);
  const searchText = useSelector((state: RootState) => state.rootReducer.search.searchText);

  useEffect(() => {
    if (searchText === "") {
      router.push('/');
    }
  }, [searchText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
    console.log("Search:", text);
    router.push('/search');
  };

  const handlelogOut = () => {
    Swal.fire({
      title: "Logged Out!",
      text: "You have been Successfully logged Out!",
      icon: "success",
    });
    logOutUserDataInLocalStorage()
    dispatch(logOutAction())
    setIsDropdownOpen(false)
  }

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
              <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="What are you looking for?"
                className={styles.whatAreYou}
              />
              <div>
                <img className={styles.searchIcon} alt="" src={search.src} />
              </div>
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
                  <div className={styles.userParent} onClick={handlelogOut}>
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
