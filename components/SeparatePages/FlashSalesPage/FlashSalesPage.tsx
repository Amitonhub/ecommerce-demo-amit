import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./FlashSalesPage.module.css";
import { RootState } from "@/redux/store";
import { Product } from "@/components/types/Types";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";
import FlashProductCard from "@/components/Common/FlashProductCard/FlashProductCard";

export default function FlashSalesPage() {
    const [index, setIndex] = useState(0);
  const { products, loading, error } = useSelector((state: RootState) => state.rootReducer.products);
  const sortedProductsforFlash = products.slice().sort((a, b) => b.discountPercentage - a.discountPercentage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedProducts = [...sortedProductsforFlash.slice(index), ...sortedProductsforFlash.slice(0, index)];
  const handleClickLeft = () => setIndex((index - 1 + products.length) % products.length);
  const handleClickRight = () => setIndex((index + 1) % products.length);
  const bestSellingProducts = [...sortedProducts.slice(index), ...sortedProducts.slice(0, index),];
  return (
    <>
       <div className={styles.frameParent}>
        <div className={styles.wishlist4Parent}>
          <div className={styles.frameParent3}>
            <div className={styles.instanceParent}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.instanceChild} />
              </div>
              <div>
                <b>Today's</b>
              </div>
            </div>
            <div className={styles.browseByCategory}>Flash Sales</div>
          </div>
          <div className={styles.arrowDiv}>
            <img
              className={styles.arrows}
              alt=""
              src={leftArrow.src}
              onClick={handleClickLeft}
            />
            <img
              className={styles.arrows}
              alt=""
              src={rightArrow.src}
              onClick={handleClickRight}
            />
          </div>
        </div>
        <div className={styles.productContainer}>
          {bestSellingProducts &&
            bestSellingProducts.map((product: Product) => (
              <FlashProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
