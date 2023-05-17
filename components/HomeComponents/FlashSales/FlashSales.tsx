import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./FlashSales.module.css";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";
import FlashProductCard from "@/components/Common/FlashProductCard/FlashProductCard";
import { Product } from "@/components/types/Types";
import { RootState } from "@/redux/store";
import Link from "next/link";

const COUNTDOWN_INTERVAL = 1000;

export default function FlashSales() {
  const [index, setIndex] = useState(0);
  const { products, loading, error } = useSelector((state: RootState) => state.rootReducer.products);
  const sortedProducts = products.slice().sort((a, b) => b.discountPercentage - a.discountPercentage);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endTime = new Date("2023-06-01T00:00:00");
      const now = new Date();
      const timeLeft = endTime.getTime() - now.getTime();

      if (timeLeft <= 0) {
        clearInterval(timer);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, COUNTDOWN_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickLeft = () => setIndex((index - 1 + products.length) % products.length);
  const handleClickRight = () => setIndex((index + 1) % products.length);
  const flahProducts = [...sortedProducts.slice(index), ...sortedProducts.slice(0, index),];

  return (
    <>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.instanceParent}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.instanceChild} />
                </div>
                <div className={styles.div}>
                  <b>Today’s</b>
                </div>
              </div>
              <div className={styles.flashSales}>Flash Sales</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.daysParent}>
                <div className={styles.days1}>Days</div>
                <b className={styles.b}>{countdown.days}</b>
              </div>
              <div className={styles.hoursParent}>
                <div className={styles.hours1}>Hours</div>
                <b className={styles.b1}>{countdown.hours}</b>
              </div>
              <div className={styles.minutesParent}>
                <div className={styles.minutes1}>Minutes</div>
                <b className={styles.b2}>{countdown.minutes}</b>
              </div>
              <div className={styles.secondsParent}>
                <div className={styles.seconds1}>Seconds</div>
                <b className={styles.b1}>{countdown.seconds}</b>
              </div>
            </div>
          </div>
          <div className={styles.fillWithLeftArrowParent}>
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={leftArrow.src}
              onClick={handleClickLeft}
            />
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={rightArrow.src}
              onClick={handleClickRight}
            />
          </div>
        </div>
        <div className={styles.productContainer}>
          {flahProducts &&
            flahProducts.map((product: Product) => (
              <FlashProductCard key={product.id} product={product} />
            ))}
        </div>
        <Link href={"/flash-sales"}>
          <div className={styles.viewAllProductsWrapper}>
            <div className={styles.shopNow}>View All Products</div>
          </div>
        </Link>
      </div>
    </>
  );
}
