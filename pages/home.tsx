import Categories from "@/components/HomeComponents/Categories";
import styles from "../styles/Home.module.css";
import FlashSales from "@/components/HomeComponents/FlashSales";

export default function Home() {
  return (
    <>
      <div className={styles.eCommerceHomepage}>
        <div className={styles.eCommerceHomepageChild} />
        <div className={styles.eCommerceHomepageItem} />
        <div className={styles.eCommerceHomepageInner} />
        <Categories />
        <FlashSales/>
      </div>
    </>
  );
}
