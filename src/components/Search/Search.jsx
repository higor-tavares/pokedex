import React from "react";
import "./Search.css";
const Search = ({ callBack }) => {
  return (
    <form className="search-bar">
      <input
        type="text"
        onChange={(e) => callBack(e.target.value)}
        placeholder="Put the pokemon name here..."
      />
      <button disabled="true">Search</button>
    </form>
  );
};
export default Search;
