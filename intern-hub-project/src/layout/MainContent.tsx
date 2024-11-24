import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ReviewList from "../components/ReviewList/ReviewList";
import styles from "./MainContent.module.css";

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <Sidebar />
      <div className={styles.rightContent}>
        <ReviewList />
      </div>
    </div>
  );
};

export default MainContent;
