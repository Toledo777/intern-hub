import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "../../assets/search.svg?react";
import RefreshIcon from "../../assets/refresh.svg?react";
import {
  filterJobsByCountry,
  filterJobsByCity,
  searchJobs,
  getAllJobs,
  Job,
} from "../../utils/filters";

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
  "Wyoming",
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
  "Yukon",
];

interface SearchbarProps {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: () => void;
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const Searchbar: React.FC<SearchbarProps> = ({
  country,
  setCountry,
  region,
  setRegion,
  onRefresh,
  setFilteredJobs,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const baseJobs = JSON.parse(localStorage.getItem("filteredJobs") || "[]");
    const jobsToFilter = baseJobs.length > 0 ? baseJobs : getAllJobs();

    if (query.trim() !== "") {
      const filtered = searchJobs(jobsToFilter, query);
      setFilteredJobs(filtered);
      localStorage.setItem("filteredJobs", JSON.stringify(filtered));
    } else {
      let filtered = getAllJobs();
      if (country) {
        filtered = filterJobsByCountry(filtered, country);
      }
      if (region) {
        filtered = filterJobsByCity(filtered, region);
      }
      setFilteredJobs(filtered);
      localStorage.setItem("filteredJobs", JSON.stringify(filtered));
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    let filtered = getAllJobs();
    filtered = filterJobsByCountry(filtered, selectedCountry);
    setFilteredJobs(filtered);
    setRegion("");

    localStorage.setItem("filteredJobs", JSON.stringify(filtered)); 
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);

    let baseJobs = JSON.parse(localStorage.getItem("filteredJobs") || "[]");
    if (baseJobs.length === 0) {
      baseJobs = getAllJobs();
    }

    let filtered = baseJobs;
    if (country) {
      filtered = filterJobsByCountry(baseJobs, country);
    }
    filtered = filterJobsByCity(filtered, selectedRegion);

    setFilteredJobs(filtered);
    localStorage.setItem("filteredJobs", JSON.stringify(filtered)); 
  };

  const handleRefresh = () => {
    // Reset filters and clear local storage for filtered jobs
    setSearchQuery("");
    setCountry("");
    setRegion("");
    const allJobs = getAllJobs();
    setFilteredJobs(allJobs);

    localStorage.removeItem("filteredJobs"); 
    onRefresh();
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
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.vertical_line}></div>

      <select
        value={country}
        className={styles.countryDropdown}
        onChange={handleCountryChange}
      >
        <option value="" disabled>
          Country
        </option>
        <option value="Canada">Canada</option>
        <option value="USA">USA</option>
      </select>

      <div className={styles.vertical_line}></div>

      <select
        value={region}
        className={styles.cityDropdown}
        onChange={handleRegionChange}
        disabled={!country}
      >
        <option value="" disabled>
          State / Province &nbsp;
        </option>
        {(country === "Canada" ? CANADA_PROVINCES : USA_STATES).map(
          (location) => (
            <option key={location} value={location}>
              {location}
            </option>
          )
        )}
      </select>

      <div className={styles.vertical_line}></div>

      <span className={styles.refreshBtn} onClick={handleRefresh}>
        Clear
        <RefreshIcon className={styles.refreshIcon}></RefreshIcon>
      </span>
    </div>
  );
};

export default Searchbar;
