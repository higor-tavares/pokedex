import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import {Link} from "react-router-dom"
const App = () => {
  return (
    <Router>
       <Link to="/"><h1 className="title">PokéDex</h1></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
