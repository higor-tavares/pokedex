import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:name" element={<Details />} />
      </Routes>
    </Router>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
