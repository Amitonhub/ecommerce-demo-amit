import { Product } from "@/components/types/Types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./CategoryPage.module.css";
import ProductCard from "@/components/Common/ProductCard/ProductCard";
import leftArrow from "../../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../../assets/HomeAssets/FlashSales/rightArrow.png";
import { fetchProducts } from "@/redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CategoryPage() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { category } = router.query;
  const products = useSelector((state: RootState) => state.rootReducer.category.products)
 
  useEffect(() => {
    const fetchData = async () => {
      if (typeof category === "string") {
        dispatch(await fetchProducts(category));
      }
    };
    fetchData();
  }, [category, dispatch]);

  const handleClickLeft = () => setIndex((index - 1 + products.length) % products.length);
  const handleClickRight = () => setIndex((index + 1) % products.length);
  const categoryProducts = [...products.slice(index), ...products.slice(0, index),];

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
                <b>Category</b>
              </div>
            </div>
            <div className={styles.browseByCategory}>{category}</div>
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
          {categoryProducts &&
            categoryProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
