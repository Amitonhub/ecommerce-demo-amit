import { useSelector } from "react-redux";
import styles from "../../styles/HomeStyles/ExploreProducts.module.css";
import leftArrow from "../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../assets/HomeAssets/FlashSales/rightArrow.png";
import { RootState } from "@/redux/store";
import { Product } from "@/components/types/Types";
import ProductCard from "./SmallComponents/ProductCard";

export default function ExploreProducts() {

  const {products, loading, error} = useSelector((state: RootState) => state.products);

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
                <div className={styles.div}><b>Our Products</b></div>
              </div>
              <div className={styles.flashSales}>Explore Our Products</div>
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
            products.slice(0, 8).map((product: Product) => (
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
