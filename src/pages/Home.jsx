import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [pokemonList, setPokemonList] = useState(Array.from([]));
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsonData = await response.json();
    console.table(jsonData.results);
    setPokemonList(jsonData.results);
  };
  return (
    <div>
      <ul className="list">
        {pokemonList.map((pokemon, index) => (
          <li>
            <Card key={index} name={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
