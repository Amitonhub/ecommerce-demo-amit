import React from "react";
import styles from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutBill from "./CheckoutBill/CheckoutBill";
import slash from "../../assets/DetalisPage/slash.png";
import Link from "next/link";

export default function Checkout() {
  return (
    <>
      <div className={styles.checkout}>
        <div className={styles.roadmap}>
          <Link href={"/cart"} className={styles.link}>
            <div className={styles.account}>Cart</div>
          </Link>
          <img className={styles.roadmapChild} alt="" src={slash.src} />
          <div className={styles.account}>CheckOut</div>
        </div>
        <div className={styles.billingDetailsWrapper}>
          <div className={styles.billingDetails}>Billing Details</div>
        </div>
        <CheckoutForm />
        <CheckoutBill />
      </div>
    </>
  );
}
