import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for jobs, companies, or keywords..."
        className={styles.searchInput}
      />
      <span>
        <i className="fi fi-rc-search"></i>
      </span>
    </div>
  );
};

export default Searchbar;