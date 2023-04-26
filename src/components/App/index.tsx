import "../../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import PersonDetails from "../PersonDetails";
import Navigation from "../Navigation";
import People from "../../containers/People";

const App = () => {
  return (
    <div data-testid="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/people" element={<People />} />
          <Route path="/personDetails" element={<PersonDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
