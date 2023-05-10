import React from "react";
import star from "../../../assets/HomeAssets/FlashSales/star.png";
import styles from "../../../styles/HomeStyles/FlashSales.module.css";

interface FiveStarProps {
  rating: number;
}

const FiveStar: React.FC<FiveStarProps> = ({ rating }) => {

  if (rating < 0 || rating > 5 || isNaN(rating)) {
    return null; 
  }

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <>
      <div className={styles.fiveStarParent}>
        <div className={styles.fiveStar}>
          {[...Array(filledStars)].map((_, i) => (
            <img
              key={`star-filled-${i}`}
              className={styles.vectorIcon}
              alt="Filled star"
              src={star.src}
            />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <img
              key={`star-empty-${i}`}
              className={styles.vectorIcon}
              alt="Empty star"
              src={star.src}
              style={{ opacity: 0.3 }}
            />
          ))}
        </div>
        <div className={styles.rating}>({rating})</div>
      </div>
    </>
  );
};


export default FiveStar;
