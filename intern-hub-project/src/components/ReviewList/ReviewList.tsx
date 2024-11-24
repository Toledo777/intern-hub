import React, { useEffect, useState } from "react";
import styles from "./ReviewList.module.css";
import ReviewCard from "./ReviewCard";
import { Job } from "../../utils/filters";

interface ReviewListProps {
  filteredJobs: Job[];
  onAddJob?: (newJob: Job) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ filteredJobs }) => {
  const [jobs, setJobs] = useState<Job[]>(filteredJobs);

  useEffect(() => {
    // Whenever filteredJobs is updated, synchronize the state
    setJobs(filteredJobs);
  }, [filteredJobs]);

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <h1>Recommended reviews</h1>
      </div>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <ReviewCard
            key={job.id}
            jobTitle={job.position}
            jobCompany={job.name}
            jobAdditionalComments={job.additionalComments}
            jobCountry={job.country}
            jobCity={job.city}
            jobDate={job.datePosted}
            jobSalary={job.salary}
            jobLogo={job.logo}
          />
        ))
      ) : (
        <p className={styles.noReviews}>No reviews available</p>
      )}
    </div>
  );
};

export default ReviewList;

