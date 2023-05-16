import { useSelector } from "react-redux";
import styles from "./ExploreProducts.module.css";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";
import { RootState } from "@/redux/store";
import { Product } from "@/components/types/Types";
import ProductCard from "@/components/Common/ProductCard/ProductCard";
import { useState } from "react";

export default function ExploreProducts() {
  const [index, setIndex] = useState(0);
  const { products, loading, error } = useSelector((state: RootState) => state.rootReducer.products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickLeft = () => setIndex((index - 1 + products.length) % products.length);
  const handleClickRight = () => setIndex((index + 1) % products.length);
  const exploreProducts = [...products.slice(index), ...products.slice(0, index)];

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
                  <b>Our Products</b>
                </div>
              </div>
              <div className={styles.flashSales}>Explore Our Products</div>
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
          {exploreProducts &&
            exploreProducts
              .slice(0, 8)
              .map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
        <div className={styles.viewAllProductsWrapper}>
          <div className={styles.shopNow}>View All Products</div>
        </div>
      </div>
    </>
  );
}
