import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
