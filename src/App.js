
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import "../src/assets/css/common.scss";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
    <Navbar />
      {/* Define routes */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;




