import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CardDetails.css";

const CardDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [stats, setStats] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    const attack = json.stats
      .filter((stat) => stat.stat.name == "attack")
      .map((stat) => stat.base_stat)[0];
    const defense = json.stats
      .filter((stat) => stat.stat.name == "defense")
      .map((stat) => stat.base_stat)[0];
    const speed = json.stats
      .filter((stat) => stat.stat.name == "speed")
      .map((stat) => stat.base_stat)[0];
    const hp = json.stats
      .filter((stat) => stat.stat.name == "hp")
      .map((stat) => stat.base_stat)[0];
    setPokemon(json);
    setStats({ attack, defense, speed, hp });
  };

  const image = pokemon.sprites
    ? pokemon.sprites.other["official-artwork"].front_default
    : "";
  return (
    <div className="card-details">
      <img src={image} alt="" />
      <div className="attributes">
        <h2>{name}</h2>
          <div>Peso: {pokemon.weight}</div>
          <div>Altura: {pokemon.height}</div>
          <div>Ataque: {stats.attack}</div>
          <div>Defesa: {stats.defense}</div>
          <div>HP: {stats.hp}</div>
          <div>Velocidade: {stats.speed}</div>
      </div>
    </div>
  );
};
export default CardDetails;
