import Categories from "@/components/HomeComponents/Categories/Categories";
import FlashSales from "@/components/HomeComponents/FlashSales/FlashSales";
import BrowseByCategories from "@/components/HomeComponents/BrowseByCategory/BrowseByCategories";
import BestSelling from "@/components/HomeComponents/BestSelling/BestSelling";
import EnhanceMusic from "@/components/HomeComponents/EnhanceMusic/EnhanceMusic";
import ExploreProducts from "@/components/HomeComponents/ExploreProducts/ExploreProducts";
import Featured from "@/components/HomeComponents/Featured/Featured";
import Services from "@/components/HomeComponents/Services/Services";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { fetchWishlist } from "@/pages/api/Api";
import { setWishlistItems } from "@/redux/actions/WishlistAction";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWishlist()
      .then((data) => {
        dispatch(setWishlistItems(data));
      })
      .catch((error) => {
        console.log("Error setting data to wishlist:", error);
      });
  }, []);
  return (
    <>
      <div className={styles.eCommerceHomepage}>
        <div className={styles.eCommerceHomepageChild} />
        <div className={styles.eCommerceHomepageItem} />
        <div className={styles.eCommerceHomepageInner} />
        <Categories />
        <FlashSales />
        <BrowseByCategories />
        <BestSelling />
        <EnhanceMusic />
        <ExploreProducts />
        <Featured />
        <Services />
      </div>
    </>
  );
}
