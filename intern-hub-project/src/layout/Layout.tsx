import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import MainContent from "./MainContent";
import { getAllJobs, filterJobsByCountry, filterJobsByCity, Job } from "../utils/filters";

const Layout: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(getAllJobs()); 
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs); 
  const [country, setCountry] = useState<string>(""); 
  const [region, setRegion] = useState<string>(""); 

  // Update filtered jobs based on country and region
  useEffect(() => {
    let newJobs = jobs;

    if (country) {
      newJobs = filterJobsByCountry(jobs, country);
    }

    if (region) {
      newJobs = filterJobsByCity(newJobs, region);
    }

    setFilteredJobs(newJobs);
  }, [country, region, jobs]);

  // Reset filters and jobs when refresh is clicked
  const handleRefresh = () => {
    setCountry("");
    setRegion("");
    setFilteredJobs(jobs);
  };

  // Function to add a new job
  const handleAddJob = (newJob: Job) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <Searchbar
        country={country}
        setCountry={setCountry}
        region={region}
        setRegion={setRegion}
        onRefresh={handleRefresh}
        setFilteredJobs={setFilteredJobs}
      />
      <MainContent 
        filteredJobs={filteredJobs} 
        setFilteredJobs={setFilteredJobs}
        onAddJob={handleAddJob} 
      />
    </div>
  );
};

export default Layout;
