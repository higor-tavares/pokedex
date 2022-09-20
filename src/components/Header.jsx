import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Link to="/">
      <h1 className="title">PokéDex</h1>
    </Link>
  );
};
export default Header;
