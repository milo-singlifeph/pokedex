import React, { useState, useEffect } from "react";
import "./SelectedPokemon.css";
import axios from "axios";
import PokemonInfo from "./PokemonInfo/PokemonInfo";

const SelectedPokemon = ({ selectedPokemon }) => {
  const [abilities, setAbilities] = useState(
    localStorage.getItem("abilities")
      ? JSON.parse(localStorage.getItem("abilities"))
      : []
  );
  const [moves, setMoves] = useState(
    localStorage.getItem("moves")
      ? JSON.parse(localStorage.getItem("moves"))
      : []
  );
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState(
    localStorage.getItem("selectedPokemonTypes")
      ? JSON.parse(localStorage.getItem("selectedPokemonTypes"))
      : []
  );
  const [image, setImage] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    (async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
      const { data } = await axios(url);

      localStorage.setItem("abilities", JSON.stringify(data.abilities));
      setAbilities(data.abilities);

      const pokemonMoves = [];
      data.moves.map((move) => pokemonMoves.push(move.move.name));
      localStorage.setItem("moves", JSON.stringify(pokemonMoves));
      setMoves([...pokemonMoves]);

      const pokemonTypes = [];
      data.types.map((type) => pokemonTypes.push(type.type.name));
      localStorage.setItem(
        "selectedPokemonTypes",
        JSON.stringify(pokemonTypes)
      );
      setSelectedPokemonTypes([...pokemonTypes]);

      setImage(data.sprites.other.dream_world.front_default);
      setHeight(data.height);
      setWeight(data.weight);
    })();
  });

  return (
    <div className="selected-pokemon pa1 mv3 flex flex-wrap justify-around">
      <PokemonInfo
        selectedPokemon={selectedPokemon}
        abilities={abilities}
        moves={moves}
        selectedPokemonTypes={selectedPokemonTypes}
        height={height}
        weight={weight}
      />
      <img src={image} alt={selectedPokemon} />
    </div>
  );
};

export default SelectedPokemon;
