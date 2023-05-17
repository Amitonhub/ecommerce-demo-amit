import React from "react";
import styles from "./Error.module.css";
import Link from "next/link";

export default function error() {
  return (
    <>
      <div className={`container ${styles.error}`}>
        <div className={`${styles.roadmap} row`}>
          <Link href={"/"} className={`${styles.link} col`}>
            <div className={`${styles.account} col-auto`}>{`Home`}</div>
          </Link>
          <div className={`${styles.account} col-auto`}>/</div>
          <div className={`${styles.english} col-auto`}>{`404 Error`}</div>
        </div>
        <div className={`${styles.notFoundParent} row`}>
          <div className={`${styles.notFound} col`}>{`404 Not Found`}</div>
          <div className={`${styles.yourVisitedPage} col`}>
            {`Your visited page not found. You may go to the home page.`}
          </div>
        </div>
        <div className={`${styles.button} row`}>
          <div className={`${styles.viewAllProducts} col`}>
            {`Back to home page`}
          </div>
        </div>
      </div>
    </>
  );
}
