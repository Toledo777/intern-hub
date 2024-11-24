import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ReviewList from "../components/ReviewList/ReviewList";
import styles from "./MainContent.module.css";
import { Job } from "../utils/filters";

interface MainContentProps {
  filteredJobs: Job[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  onAddJob: (newJob: Job) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  filteredJobs,
  onAddJob,
}) => {

  return (
    <div className={styles.mainContent}>
      <Sidebar
      />
      <div className={styles.rightContent}>
        <ReviewList filteredJobs={filteredJobs} onAddJob={onAddJob} />
      </div>
    </div>
  );
};

export default MainContent;



