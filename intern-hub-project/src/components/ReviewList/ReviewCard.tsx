/// <reference types="vite-plugin-svgr/client" />
import React, { useState } from "react";
import styles from "./ReviewCard.module.css";
import BookmarkIcon from "../../assets/bookmark.svg?react";

interface ReviewCardProps {
  jobTitle: string;
  jobCompany: string;
  jobAdditionalComments: string;
  jobCountry: string;
  jobCity: string;
  jobDate: string;
  jobSalary: number;
  jobLogo: string;
  jobQuestionType: string;
  jobRounds: number;
  jobType: string;
  jobSignOnBonus: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    jobTitle,
    jobDate,
    jobCompany,
    jobSalary,
    jobCountry,
    jobCity,
    jobLogo,
    jobQuestionType,
    jobRounds,
    jobType,
    jobAdditionalComments,
    jobSignOnBonus,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    function handleDetailsClick() {
      setIsExpanded(!isExpanded);
    }

    return (
    <div className={`${styles.reviewCard} ${isExpanded ? styles.expand : ""}`}>
      <div className={styles.reviewContent}>

        <div className={styles.dateSection}>
          <p>{jobDate}</p>
          <span className={styles.bookmarkBtn}>
            <BookmarkIcon width="20" height="20" className={styles.bookmarkIcon}></BookmarkIcon>
          </span>
        </div>

        <div className={styles.positionSection}>
            <p>{jobCompany}</p>

            <div className={styles.titleIcon}>
                <h3>{jobTitle}</h3>
                <img className={styles.logo} src={jobLogo} alt="" />
            </div>
        </div>

        <div className={styles.reviewBadges}>
            {!isExpanded && (
              <>
                <p>{jobType}</p>
                <p>{jobQuestionType}</p>
                <p>{jobRounds} rounds</p>
              </>)}
            {isExpanded && (
                <>
                <p>{jobAdditionalComments}</p>
                <p>${jobSignOnBonus} Bonus</p>
                </>)}
        </div>
        
      </div>

      <div className={styles.reviewDetails}>
        <div className={styles.leftDetails}>
            <p className={styles.salary}>${jobSalary}/hr</p>
            <p className={styles.location}>{jobCity}, {jobCountry}</p>
        </div>
        <div className={styles.rightDetails}>
            <button className={styles.detailsBtn} onClick={handleDetailsClick}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
