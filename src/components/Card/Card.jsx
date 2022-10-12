import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Card = ({ name }) => {
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    fetchData();
  }, [name]);
  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    setImage(json.sprites.front_default);
    setId(json.id);
  };
  return (
    <Link to={`/details/${name}`}>
      <div className="simple-card">
        <h2>
          #{id} {name}
        </h2>
        <img src={image} alt="" />
      </div>
    </Link>
  );
};
export default Card;
