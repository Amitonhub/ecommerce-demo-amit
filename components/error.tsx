import { FunctionComponent } from "react";
import styles from "../styles/Error1.module.css";
const Error: FunctionComponent = () => {
  return (
    <div className={styles.error}>
      
      <img className={styles.errorChild} alt="" src="/line-3.svg" />
      <div className={styles.roadmap}>
        <div className={styles.account}>Home</div>
        <img className={styles.roadmapChild} alt="" src="/line-131.svg" />
        <div className={styles.english}>404 Error</div>
        <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
        <div className={styles.nothing1}>Nothing</div>
        <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
        <div className={styles.nothing1}>Nothing</div>
        <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
        <div className={styles.nothing1}>Nothing</div>
      </div>
      <div className={styles.notFoundParent}>
        <div className={styles.notFound}>404 Not Found</div>
        <div className={styles.yourVisitedPage}>
          Your visited page not found. You may go home page.
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.viewAllProducts}>Back to home page</div>
      </div>
    </div>
  );
};

export default Error;
