import React from "react";
import styles from "../Checkout.module.css";
import { Cart } from "@/components/types/Types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import paymentIcons from "../../../assets/Checkout/paymentIcons.png";
import underline from "../../../assets/Checkout/underline.png";

export default function CheckoutBill() {
  const cart = useSelector((state: RootState) => state.rootReducer.cart.cart);
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id);
  const filteredCart = cart.filter((item: Cart) => item.userId === userId);
  let totalPrice = 0;
  filteredCart.forEach((item: Cart) => {
    totalPrice += item.product.price * item.quantity;
  });

  return (
    <>
      <div className={styles.frameParent5}>
        {filteredCart &&
          filteredCart.map((item: Cart) => (
            <div className={styles.frameParent6}>
              <div className={styles.gamepadCartSmallParent}>
                <div className={styles.gamepadCartSmall}>
                  <img
                    className={styles.g922500x5001Icon}
                    alt=""
                    src={item.product.thumbnail}
                  />
                </div>
                <div className={styles.lcdMonitorParent}>
                  <div className={styles.title}>{item.product.title}</div>
                  <div className={styles.price}>
                    ${item.product.price} * {item.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className={styles.frameParent7}>
          <div className={styles.frameParent7}>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent7}>
                <div className={styles.subtotalParent}>
                  <div className={styles.saveThisInformation}>Subtotal:</div>
                  <div className={styles.saveThisInformation}>
                    ${totalPrice}
                  </div>
                </div>
                <img
                  className={styles.underlineIcon1}
                  alt=""
                  src={underline.src}
                />
              </div>
              <div className={styles.shippingParent}>
                <div className={styles.saveThisInformation}>Shipping:</div>
                <div className={styles.saveThisInformation}>Free</div>
              </div>
            </div>
            <img className={styles.underlineIcon1} alt="" src={underline.src} />
          </div>
          <div className={styles.totalParent}>
            <div className={styles.saveThisInformation}>Total:</div>
            <div className={styles.saveThisInformation}>${totalPrice}</div>
          </div>
        </div>
        <div className={styles.frameParent11}>
          <label className={styles.iconCheckboxParent}>
            <input type="radio" name="paymentMethod" value="bank" />
            <div className={styles.bank}>Bank</div>
          </label>
          <div className={styles.bkashParent}>
            <div className={styles.bkash}>
              <img
                className={styles.image32Icon}
                alt=""
                src={paymentIcons.src}
              />
            </div>
          </div>
        </div>
        <div className={styles.iconCheckboxParent}>
          <label>
            <input type="radio" name="paymentMethod" value="cashOnDelivery" />
            <div className={styles.cod}>Cash on delivery</div>
          </label>
        </div>

        <div className={styles.couponCode}>
          <input
            className={styles.couponCodeWrapper}
            type="text"
            placeholder="Coupon Code"
          />
          <div className={styles.button}>
            <div className={styles.viewAllProducts}>Apply Coupon</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.viewAllProducts}>Place Order</div>
        </div>
      </div>
    </>
  );
}
