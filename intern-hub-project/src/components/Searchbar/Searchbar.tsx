/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from '../../assets/search.svg?react';

const Searchbar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for jobs, companies, or keywords..."
          className={styles.searchInput}
        />
        <span className={styles.searchBtn}>
          <SearchIcon className={styles.searchIcon}></SearchIcon>
        </span>
      </div>
      <div className={styles.vertical_line}> </div>
      <div>Location dropdown TODO</div>
    </div>
  );
};

export default Searchbar;