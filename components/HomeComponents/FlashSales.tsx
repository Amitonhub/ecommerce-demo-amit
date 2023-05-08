import React, { useEffect } from "react";
import ProductCard from "./SmallComponents/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/HomeStyles/FlashSales.module.css";
import leftArrow from "../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../assets/HomeAssets/FlashSales/rightArrow.png";
import { RootState } from "@/redux/store";
import { fetchProducts } from "@/pages/api/Api";
import { fetchProductsSuccess } from "@/redux/actions/ProductAction";
import { Product } from "@/components/types/Types";

export default function FlashSales() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductsAsync = async () => {
      const data = await fetchProducts();
      dispatch(fetchProductsSuccess(data));
    };
    fetchProductsAsync();
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                <div className={styles.div}>Today’s</div>
              </div>
              <div className={styles.flashSales}>Flash Sales</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.daysParent}>
                <div className={styles.days1}>Days</div>
                <b className={styles.b}>03</b>
              </div>
              <div className={styles.hoursParent}>
                <div className={styles.hours1}>Hours</div>
                <b className={styles.b1}>23</b>
              </div>
              <div className={styles.minutesParent}>
                <div className={styles.minutes1}>Minutes</div>
                <b className={styles.b2}>19</b>
              </div>
              <div className={styles.secondsParent}>
                <div className={styles.seconds1}>Seconds</div>
                <b className={styles.b1}>56</b>
              </div>
            </div>
          </div>
          <div className={styles.fillWithLeftArrowParent}>
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={leftArrow.src}
            />
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={rightArrow.src}
            />
          </div>
        </div>
        <div className={styles.productContainer}>
          {products &&
            products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
