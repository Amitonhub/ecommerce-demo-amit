import React from "react";
import styles from '../Cart.module.css'
import dropUpSmall from '../../../assets/Cart/dropUpSmall.png'
import dropDownSmall from '../../../assets/Cart/dropDownSmall.png'
import deleteCart from '../../../assets/Cart/deleteCart.png'
import { CartItemsProps } from "@/components/types/Types";
import { Inter, Montserrat } from 'next/font/google';

const CartItems: React.FC<CartItemsProps> = ({ product, item }) => {
      const { price, rating, thumbnail, title, discountPercentage } = product;
  return <>
  <div className={styles.cartSection}>
              <div className={styles.price}>{price}</div>
              <div className={styles.subTotal}>{price}</div>
              <div className={styles.quantity1}>
                <div className={styles.parent}>
                  <div className={styles.product}>{`01`}</div>
                  <div className={styles.dropUpSmallParent}>
                    <img
                      className={styles.dropUpSmallIcon}
                      alt=""
                      src={dropUpSmall.src}
                    />
                    <img
                      className={styles.dropUpSmallIcon}
                      alt=""
                      src={dropDownSmall.src}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.productCartSmall}>
                <img
                  className={styles.gIcon}
                  alt=""
                  src={thumbnail}
                />
              </div>
              <div className={styles.productTitle}>{title}</div>
              <img className={styles.iconCancel} alt="" src={deleteCart.src} />
            </div>
  </>;
}

export default CartItems;