import Categories from "@/components/HomeComponents/Categories";
import styles from "../styles/Home.module.css";
import FlashSales from "@/components/HomeComponents/FlashSales";
import BrowseByCategories from "@/components/HomeComponents/BrowseByCategories";
import BestSelling from "@/components/HomeComponents/BestSelling";
import EnhanceMusic from "@/components/HomeComponents/EnhanceMusic";
import ExploreProducts from "@/components/HomeComponents/ExploreProducts";
import Featured from "@/components/HomeComponents/Featured";
import Services from "@/components/HomeComponents/Services";

export default function Home() {
  return (
    <>
      <div className={styles.eCommerceHomepage}>
        <div className={styles.eCommerceHomepageChild} />
        <div className={styles.eCommerceHomepageItem} />
        <div className={styles.eCommerceHomepageInner} />
        <Categories />
        <FlashSales/>
        <BrowseByCategories/>
        <BestSelling/>
        <EnhanceMusic/>
        <ExploreProducts/>
        <Featured/>
        <Services/>
      </div>
    </>
  );
}
