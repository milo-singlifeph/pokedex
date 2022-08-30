import React from "react";
import "./Pokemons.css";
import Pokemon from "./Pokemon/Pokemon";

const Pokemons = ({ pokemons }) => {
  const pokemonsCards = pokemons.map((pokemon) => {
    const { name, url } = pokemon;

    return <Pokemon key={name} name={name} url={url} />;
  });

  return <div className="pokemons-container mv2">{pokemonsCards}</div>;
};

export default Pokemons;
