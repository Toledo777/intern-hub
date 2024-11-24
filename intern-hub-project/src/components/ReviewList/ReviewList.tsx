/// <reference types="vite-plugin-svgr/client" />
import React, { useState, useEffect } from "react";
import styles from "./ReviewList.module.css";
import ReviewCard from "./ReviewCard";
import { getAllJobs, Job } from "../../data/filters";

const ReviewList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  // Fetch all jobs at once
  const fetchAllJobs = async () => {
    const allJobs = getAllJobs();
    setJobs(allJobs);
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <h1>Recommended reviews</h1>
        <button className={styles.sortBtn}>Sort by</button>
      </div>
      {jobs.map((job) => (
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
      ))}
    </div>
  );
};

export default ReviewList;
