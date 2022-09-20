import React from "react";
import "./Card.css";
import {Link} from "react-router-dom";

const Card = ({ name, url }) => {
  return (
    <div className="simple-card">
      <Link to={`/details/${name}`}><h2>{name}</h2></Link>
    </div>
  );
};
export default Card;
