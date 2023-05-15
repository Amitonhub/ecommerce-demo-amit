import React, { useEffect, useState } from "react";
import styles from "../Checkout.module.css";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { getUserData } from "@/pages/api/Api";
import { Person } from "@/components/types/Types";

export default function CheckoutForm() {
  const userId = useSelector((state: RootState) => state.logIn.user?.id);
  const [user, setUser] = useState<Person>();

  useEffect(() => {
    async function fetchData() {
      const user = await getUserData(userId);
      setUser(user);
    }
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>First Name</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.firstName}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>Company Name</div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.company.name}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Street Address</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.address.address}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>Postal Code</div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.address.postalCode}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Town/City</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.address.city}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Phone Number</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.phone}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Email Address</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              value={user?.email}
            />
          </div>
        </div>
        <div className={styles.iconCheckboxParent}>
          <img className={styles.iconCheckbox} alt="" src="/iconcheckbox.svg" />
          <div className={styles.saveThisInformation}>
            Save this information for faster check-out next time
          </div>
        </div>
      </div>
    </>
  );
}
