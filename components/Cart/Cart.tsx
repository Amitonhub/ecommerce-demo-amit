import React from "react";
import styles from './Cart.module.css'
import slash from "../../assets/DetalisPage/slash.png";
import totalUnderline from '../../assets/Cart/totalUnderline.png'
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Cart, WishlistItem } from "../types/Types";
import CartItems from "./CartItems/CartItems";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const userId = useSelector((state: RootState) => state.logIn.user?.id);
  const filteredCart = cart.filter(
    (item: Cart) => item.userId === userId
  );
  let totalPrice = 0;
  filteredCart.forEach((item: Cart) => {
    totalPrice += item.product.price;
    // totalPrice += item.product.price * item.quantity;
  });
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
            {filteredCart &&
            filteredCart.map((item: WishlistItem) => (
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
            <div className={styles.updateButton}>
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
            <div className={styles.button3}>
              <div className={styles.viewAllProducts}>{`Procees to checkout`}</div>
            </div>
            <img
              className={styles.underlineIcon}
              alt=""
              src={totalUnderline.src}
            />
            <img
              className={styles.underlineIcon1}
              alt=""
              src={totalUnderline.src}
            />
          </div>
        </div>
      </div>
      <div className={styles.roadmap}>
        <div className={styles.account1}>{`Home`}</div>
        <img className={styles.roadmapChild} alt="" src={slash.src} />
        <div className={styles.english}>{`Cart`}</div>
      </div>
    </div>
  </>;
}
