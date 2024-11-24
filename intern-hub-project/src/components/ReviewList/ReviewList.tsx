import React, { useState, useEffect } from "react";
import styles from "./ReviewList.module.css";
import ReviewCard from "./ReviewCard";
import { Job } from "../../utils/filters";

const ReviewList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  // Fetch jobs from local storage
  const fetchAllJobs = () => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      const parsedJobs: Job[] = JSON.parse(storedJobs);
      setJobs(parsedJobs);
    } else {
      console.error("No jobs found in local storage.");
    }
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
