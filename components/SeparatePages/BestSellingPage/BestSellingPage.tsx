import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../SeparatePages.module.css";
import { RootState } from "@/redux/store";
import { Product } from "@/components/types/Types";
import ProductCard from "@/components/Common/ProductCard/ProductCard";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";

export default function BestSellingPage() {
    const [index, setIndex] = useState(0);
  const { products, loading, error } = useSelector((state: RootState) => state.rootReducer.products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
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
                <b>This Month</b>
              </div>
            </div>
            <div className={styles.browseByCategory}>Best Selling Products</div>
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
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
