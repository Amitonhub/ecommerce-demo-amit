import Categories from "@/components/HomeComponents/Categories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.eCommerceHomepage}>
        <div className={styles.eCommerceHomepageChild} />
        <div className={styles.eCommerceHomepageItem} />
        <div className={styles.eCommerceHomepageInner} />
        <Categories />
      </div>
    </>
  );
}
