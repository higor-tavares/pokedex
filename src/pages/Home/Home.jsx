import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";

const Home = () => {
  const [pokemonList, setPokemonList] = useState(Array.from([]));
  const [pokemons, setPokemons] = useState(Array.from([]));

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1200"
    );
    const jsonData = await response.json();
    setPokemonList(jsonData.results);
    setPokemons(jsonData.results.slice(0, 18));
  };
  const filterData = (text) => {
    const filteredData = pokemonList.filter((pokemon) =>
      pokemon.name.toUpperCase().includes(text.toUpperCase())
    );
    setPokemons(filteredData.slice(0, 18));
  };
  return (
    <div>
      <Search callBack={(value) => filterData(value)} />
      <ul className="list">
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Card name={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
