import React from "react";
import styles from './Cart.module.css'

export default function Cart() {
  return <>
   <div className={styles.cart}>
      <img className={styles.cartChild} alt="" src="/line-3.svg" />
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
            <div className={styles.cartSection}>
              <div className={styles.div2}>{`$650`}</div>
              <div className={styles.div3}>{`$650`}</div>
              <div className={styles.quantity1}>
                <div className={styles.parent}>
                  <div className={styles.product}>{`01`}</div>
                  <div className={styles.dropUpSmallParent}>
                    <img
                      className={styles.dropUpSmallIcon}
                      alt=""
                      src="/dropupsmall.svg"
                    />
                    <img
                      className={styles.dropUpSmallIcon}
                      alt=""
                      src="/dropdownsmall.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.productCartSmall}>
                <img
                  className={styles.gIcon}
                  alt=""
                  src="/g27cq4500x500-11@2x.png"
                />
              </div>
              <div className={styles.productTitle}>{`LCD Monitor`}</div>
              <img className={styles.iconCancel} alt="" src="/iconcancel.svg" />
            </div>
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
              <div className={styles.product}>{`$1750`}</div>
            </div>
            <div className={styles.shippingParent}>
              <div className={styles.product}>{`Shipping:`}</div>
              <div className={styles.product}>{`Free`}</div>
            </div>
            <div className={styles.totalParent}>
              <div className={styles.product}>{`Total:`}</div>
              <div className={styles.product}>{`$1750`}</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.viewAllProducts}>{`Procees to checkout`}</div>
            </div>
            <img
              className={styles.underlineIcon}
              alt=""
              src="/underline6.svg"
            />
            <img
              className={styles.underlineIcon1}
              alt=""
              src="/underline6.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.roadmap}>
        <div className={styles.account1}>{`Home`}</div>
        <img className={styles.roadmapChild} alt="" src="/line-13.svg" />
        <div className={styles.english}>{`Cart`}</div>
      </div>
    </div>
  </>;
}
