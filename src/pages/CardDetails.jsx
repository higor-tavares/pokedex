import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CardDetails.css";

const CardDetails = () => {
  const { name } = useParams();
  const [image, setImage] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    setImage(json.sprites.front_default);
  };
  return (
    <div className="card-details">
      <h2>{name}</h2>
      <img src={image} alt="" />
    </div>
  );
};
export default CardDetails;
