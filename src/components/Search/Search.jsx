import React from "react";
import "./Search.css";
import PropTypes from 'prop-types';

const Search = ({ callBack, backgroundColor }) => {
  return (
    <form className="search-bar" style={{backgroundColor}}>
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

Search.propTypes = {
  /**
   * Background color of searchBar
   */
  backgroundColor: PropTypes.string,
}
Search.defaultProps = {
  backgroundColor: 'red'
}