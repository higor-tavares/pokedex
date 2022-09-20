import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import {Link} from "react-router-dom"
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
