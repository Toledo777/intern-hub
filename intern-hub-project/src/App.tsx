import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import FAQ from "./components/FAQ/FAQ";
import Contribute from "./components/Contribute/Contribute";
import MainContent from "./layout/MainContent";
import { useState, useEffect } from "react";
import { getAllJobs, Job } from "./utils/filters";

function App() {
  // State management for dropdowns and jobs
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [jobs, setJobs] = useState<Job[]>(getAllJobs());
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  // Function to reset filters and show all jobs
  const handleRefresh = () => {
    setCountry("");
    setRegion("");
    setFilteredJobs(jobs);
  };

  // Function to add a new job
  const handleAddJob = (newJob: Job) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  // Sync filtered jobs whenever jobs are updated
  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <Router>
      <Navbar />
      <ConditionalSearchbar
        country={country}
        setCountry={setCountry}
        region={region}
        setRegion={setRegion}
        onRefresh={handleRefresh}
        setFilteredJobs={setFilteredJobs}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredJobs={filteredJobs} 
              setFilteredJobs={setFilteredJobs} 
              onAddJob={handleAddJob} 
            />
          }
        />
        <Route
          path="/contribute"
          element={<Contribute onAddJob={handleAddJob} />}
        />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

// Component to conditionally render the Searchbar
function ConditionalSearchbar({
  country,
  setCountry,
  region,
  setRegion,
  onRefresh,
  setFilteredJobs,
}: {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: () => void;
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}) {
  const location = useLocation(); 

  // Render Searchbar only on the home route
  return location.pathname === "/" ? (
    <Searchbar
      country={country}
      setCountry={setCountry}
      region={region}
      setRegion={setRegion}
      onRefresh={onRefresh}
      setFilteredJobs={setFilteredJobs}
    />
  ) : null;
}

// Pass props to MainContent
function Home({
  filteredJobs,
  setFilteredJobs,
  onAddJob,
}: {
  filteredJobs: Job[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  onAddJob: (newJob: Job) => void;
}) {
  return (
    <MainContent
      filteredJobs={filteredJobs}
      setFilteredJobs={setFilteredJobs} 
      onAddJob={onAddJob}
    />
  );
}

export default App;
