import React from "react";
import styles from './Cart.module.css'
import slash from "../../assets/DetalisPage/slash.png";
import totalUnderline from '../../assets/Cart/totalUnderline.png'
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../types/Types";
import CartItems from "./CartItems/CartItems";
import { setCartItems } from "@/redux/actions/CartAction";
import { fetchCart } from "@/pages/api/Api";
import Link from "next/link";

export default function Cart() {
  let totalPrice = 0;
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.rootReducer.cart.cart);
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id);
  const filteredCart = cart.filter((item: Cart) => item.userId === userId);
  filteredCart.forEach((item: Cart) => { totalPrice += item.product.price * item.quantity; });

  const handleUpdateCart = () => {
    fetchCart().then((data) => {
      dispatch(setCartItems(data));
    })
      .catch((error) => {
        console.log("Error setting data to Cart:", error);
      });
  }

  return <>
    <div className={styles.cart}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.cartMainSectionParent}>
            <div className={styles.cartMainSection}>
              <div className={styles.productParent}>
                <div className={styles.product}>{`Product`}</div>
                <div className={styles.product}>{`Price`}</div>
                <div className={styles.product}>{`Quantity`}</div>
                <div className={styles.product}>{`Subtotal`}</div>
              </div>
            </div>
            {filteredCart && filteredCart.map((item: Cart) => (
              <CartItems
                key={item.product.id}
                product={item.product}
                item={item}
              />
            ))}
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.returnButton}>
              <div className={styles.viewAllProducts}>{`Return To Shop`}</div>
            </div>
            <div className={styles.updateButton} onClick={() => handleUpdateCart()}>
              <div className={styles.viewAllProducts}>{`Update Cart`}</div>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameDiv}>
            <div className={styles.couponCodeWrapper}>
              <div className={styles.couponCode}>{`Coupon Code`}</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.viewAllProducts}>{`Apply Coupo`}n</div>
            </div>
          </div>
          <div className={styles.cartTotalParent}>
            <div className={styles.cartTotal}>{`Cart Total`}</div>
            <div className={styles.subtotalParent}>
              <div className={styles.product}>{`Subtotal:`}</div>
              <div className={styles.product}>{`$ `}{totalPrice}</div>
            </div>
            <div className={styles.shippingParent}>
              <div className={styles.product}>{`Shipping:`}</div>
              <div className={styles.product}>{`Free`}</div>
            </div>
            <div className={styles.totalParent}>
              <div className={styles.product}>{`Total:`}</div>
              <div className={styles.product}>{`$ `}{totalPrice}</div>
            </div>
            <Link href={'/checkout'}>
              <div className={styles.button3}>
                <div className={styles.viewAllProducts}>{`Procees to checkout`}</div>
              </div>
            </Link>
            <img className={styles.underlineIcon} alt="" src={totalUnderline.src} />
            <img className={styles.underlineIcon1} alt="" src={totalUnderline.src} />
          </div>
        </div>
      </div>
      <div className={styles.roadmap}>
        <Link href={'/'} className={styles.link}>
          <div className={styles.account1}>{`Home`}</div>
        </Link>
        <img className={styles.roadmapChild} alt="" src={slash.src} />
        <div className={styles.english}>{`Cart`}</div>
      </div>
    </div>
  </>;
}
