/// <reference types="vite-plugin-svgr/client" />
import styles from "./Searchbar.module.css";
import SearchIcon from '../../assets/search.svg?react';
import RefreshIcon from '../../assets/refresh.svg?react';
import React, { useState, useEffect } from "react";
import { getAllJobs, Job, filterJobsByCountry, filterJobsByCity, updateJobs } from "../../utils/filters";

const USA_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const CANADA_PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Isl",
  "Quebec",
  "Saskatchewan",
  "Northwest Terr.",
  "Nunavut",
  "Yukon"
];

const Searchbar: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(getAllJobs());
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    // Update regions dropdown and reset region filter when country changes
    setRegion("");
    if (country) {
      const newJobs = filterJobsByCountry(jobs, country);
      setFilteredJobs(newJobs);
      updateJobs(newJobs)
    } else {
      setFilteredJobs(jobs);
    }
  }, [country, jobs]);

  useEffect(() => {
    // Filter jobs by city/region when a region is selected
    if (region) {
      const newJobs = filterJobsByCity(filteredJobs, region);
      setFilteredJobs(newJobs);
      updateJobs(newJobs)
    }
  }, [region]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };

  return (
    <div className={styles.searchBar}>

      <div className={styles.searchBox}>
        <span className={styles.searchBtn}>
          <SearchIcon className={styles.searchIcon}></SearchIcon>
        </span>
        <input
          type="text"
          placeholder="Search for jobs, companies, or keywords..."
          className={styles.searchInput}
        />
        {/* <span className={styles.searchBtn}>
          <SearchIcon className={styles.searchIcon}></SearchIcon>
        </span> */}
      </div>

      <div className={styles.vertical_line}></div>

      <select name="Country dropdown" value={country} className={styles.countryDropdown} onChange={handleCountryChange}>
        <option value="" disabled selected>Country</option>
        <option value="Canada">Canada</option>
        <option value="USA">USA</option>
      </select>

      <div className={styles.vertical_line}></div>

      <select name="Location dropdown" value={region} className={styles.cityDropdown} onChange={handleRegionChange} disabled={!country}> 
        <option value="" disabled selected>State / Province &nbsp;</option>
        {(country === "Canada" ? CANADA_PROVINCES : USA_STATES).map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <div className={styles.vertical_line}></div>
      
      <span className={styles.refreshBtn}>
        Refresh 
        <RefreshIcon className={styles.refreshIcon}></RefreshIcon>
      </span>
    </div>
  );
};

export default Searchbar;