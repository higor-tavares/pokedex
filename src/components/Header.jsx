import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import PropTypes from 'prop-types';

const Header = ({backgroundColor}) => {
  return (
    <Link to="/">
      <h1 className="title" style={{backgroundColor}}>PokéDex</h1>
    </Link>
  );
};
export default Header;
Header.propTypes = {
  /**
   * Background color enable theme the header of applcation
   */
  backgroundColor: PropTypes.string,
}
Header.defaultProps = {
  backgroundColor: '#FF0000'
}
