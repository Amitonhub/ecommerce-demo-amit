import React from "react";
import styles from "./Services.module.css";
import delivery from "../../../assets/HomeAssets/Services/delivery.png";
import services from "../../../assets/HomeAssets/Services/services.png";
import guarantee from "../../../assets/HomeAssets/Services/guarantee.png";
import upArrow from "../../../assets/HomeAssets/Services/upArrow.png";

export default function Services() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.instanceParent}>
        <div className={styles.servicesParent}>
          <img className={styles.servicesIcon} alt="" src={delivery.src} />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>FREE AND FAST DELIVERY</div>
            <div className={styles.freeDeliveryFor}>
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className={styles.servicesGroup}>
          <img className={styles.servicesIcon} alt="" src={services.src} />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>24/7 CUSTOMER SERVICE</div>
            <div className={styles.friendly247Customer}>
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className={styles.servicesParent}>
          <img className={styles.servicesIcon} alt="" src={guarantee.src} />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>MONEY BACK GUARANTEE</div>
            <div className={styles.friendly247Customer}>
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className={styles.fillWithLeftArrowParent} onClick={scrollToTop}>
          <img className={styles.fillWithLeftArrow} alt="" src={upArrow.src} />
        </div>
      </div>
    </>
  );
}
