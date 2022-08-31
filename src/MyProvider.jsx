import React, { useState, useEffect } from "react";
import MyContext from "./MyContext/MyContext";
import axios from "axios";

const MyProvider = (props) => {
  const [pokemons, setPokemons] = useState(
    localStorage.getItem("pokemons")
      ? JSON.parse(localStorage.getItem("pokemons"))
      : []
  );
  const [typeFilteredPokemons, setTypeFilteredPokemons] = useState(
    localStorage.getItem("typeFilteredPokemons")
      ? JSON.parse(localStorage.getItem("typeFilteredPokemons"))
      : []
  );
  const [types, setTypes] = useState(
    localStorage.getItem("types")
      ? JSON.parse(localStorage.getItem("types"))
      : []
  );
  const [type, setType] = useState(
    localStorage.getItem("type") ? JSON.parse(localStorage.getItem("type")) : ""
  );
  const [selectedPokemon, setSelectedPokemon] = useState(
    localStorage.getItem("selectedPokemon")
      ? JSON.parse(localStorage.getItem("selectedPokemon"))
      : ""
  );

  const typeFilter = async (typeName, typeUrl, navigate) => {
    const {
      data: { pokemon: pokemonType },
    } = await axios(typeUrl);

    const filteredPokemons = [];

    pokemons.map((pokemon) => {
      const { name } = pokemon;

      const selectedType = pokemonType.map((type) => {
        if (name === type.pokemon.name) {
          filteredPokemons.push(pokemon);
        }
        return filteredPokemons;
      });

      return selectedType;
    });

    localStorage.setItem("type", JSON.stringify(typeName));
    localStorage.setItem(
      "typeFilteredPokemons",
      JSON.stringify([...filteredPokemons])
    );

    setType(typeName);
    setTypeFilteredPokemons([...filteredPokemons]);
    navigate(`/pokedex/type/${typeName}`, { replace: true });
  };

  const selectPokemon = (name, image, navigate) => {
    localStorage.setItem("selectedPokemon", JSON.stringify(name));
    setSelectedPokemon(name);

    navigate(`/pokedex/pokemon/${name}`, { replace: true });
  };

  const state = {
    pokemons,
    typeFilteredPokemons,
    types,
    type,
    selectedPokemon,
    setPokemons,
    setTypeFilteredPokemons,
    setTypes,
    setType,
    setSelectedPokemon,
    typeFilter,
    selectPokemon,
  };

  useEffect(() => {
    (async () => {
      const urlForm = "https://pokeapi.co/api/v2/pokemon-form?limit=151";
      const {
        data: { results: form },
      } = await axios(urlForm);

      localStorage.setItem("pokemons", JSON.stringify([...form]));
      setPokemons([...form]);

      const urlType = "https://pokeapi.co/api/v2/type";
      const {
        data: { results: type },
      } = await axios(urlType);

      localStorage.setItem("types", JSON.stringify([...type]));
      setTypes([...type]);
    })();
  }, [pokemons.length]);

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
