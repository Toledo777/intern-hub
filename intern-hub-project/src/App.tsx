import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import FAQ from "./components/FAQ/FAQ"; // Import the FAQ component
import MainContent from "./layout/MainContent";

function App() {
  return (
    <Router>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} /> {/* Use the FAQ component */}
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <MainContent />;
}

function Contribute() {
  return <div>How to contribute content...</div>;
}

export default App;