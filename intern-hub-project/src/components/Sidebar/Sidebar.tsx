import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_content}>
        <div>
        <h3>Filters</h3>
        </div>
        <div className={styles.filterGroup}>
          <h4>Working Schedule</h4>
          <label>
            <input type="checkbox" /> Full-time
          </label>
          <label>
            <input type="checkbox" /> Part-time
          </label>
        </div>
        <div className={styles.filterGroup}>
          <h4>Employment Type</h4>
          <label>
            <input type="checkbox" /> On-site
          </label>
          <label>
            <input type="checkbox" /> Hybrid
          </label>
          <label>
            <input type="checkbox" /> Remote
          </label>
        </div>
        <div className={styles.filterGroup}>
          <h4>Question Type</h4>
          <label>
            <input type="checkbox" /> OOP
          </label>
          <label>
            <input type="checkbox" /> LeetCode
          </label>
          <label>
            <input type="checkbox" /> System Design
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
