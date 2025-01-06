import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/header/footer/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    <Footer />
  </Router>
);

export default App;