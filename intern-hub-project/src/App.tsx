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

function App() {
  return (
    <Router>
      <Navbar />
      <ConditionalSearchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

// Component to conditionally render the Searchbar
function ConditionalSearchbar() {
  const location = useLocation(); // Get current route

  // Render Searchbar only on the home route
  return location.pathname === "/" ? <Searchbar /> : null;
}

function Home() {
  return <div>Welcome to InternHub!</div>;
}

export default App;
