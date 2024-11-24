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
    <div className={styles.reviewList}>
      {jobs.map((job) => (
        <ReviewCard
          key={job.id}
          jobTitle={job.position}
          jobCompany={job.name}
          jobReview={job.review}
          jobCountry={job.country}
          jobCity={job.city}
          jobDate={job.datePosted}
          jobSalary={job.salary}
        />
      ))}
    </div>
  );
};

export default ReviewList;
