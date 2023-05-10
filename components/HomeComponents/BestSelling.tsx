import { useSelector } from "react-redux";
import styles from "../../styles/HomeStyles/BestSelling.module.css";
import { RootState } from "@/redux/store";
import { Product } from "@/components/types/Types";
import ProductCard from "./SmallComponents/ProductCard";

export default function BestSelling() {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
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
                  <b>This Month</b>
                </div>
              </div>
              <div className={styles.flashSales}>Best Selling Products</div>
            </div>
          </div>
          <div className={styles.viewAllProductsWrapper}>
            <div className={styles.shopNow}>View All</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          {sortedProducts &&
            sortedProducts
              .slice(0, 4)
              .map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
}