/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import styles from "./ReviewCard.module.css";
import BookmarkIcon from "../../assets/bookmark.svg?react";

interface ReviewCardProps {
  jobTitle: string;
  jobCompany: string;
  jobReview: string;
  jobCountry: string;
  jobCity: string;
  jobDate: string;
  jobSalary: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ jobTitle, jobDate, jobCompany, jobSalary, jobCountry, jobCity }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewContent}>

        <div className={styles.dateSection}>
          <p>{jobDate}</p>
          <span className={styles.bookmarkBtn}>
            <BookmarkIcon width="20" height="20" className={styles.bookmarkIcon}></BookmarkIcon>
          </span>
        </div>

        <div className={styles.positionSection}>
            <p>{jobCompany}</p>
            <h3>{jobTitle}</h3>
        </div>
        
      </div>

      <div className={styles.reviewDetails}>
        <div className={styles.leftDetails}>
            <p className={styles.salary}>${jobSalary}/hr</p>
            <p className={styles.location}>{jobCity}, {jobCountry}</p>
        </div>
        <div className={styles.rightDetails}>
            <button className={styles.detailsBtn}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
