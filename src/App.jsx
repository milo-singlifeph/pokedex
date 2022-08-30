import React, { useContext } from "react";
import MyContext from "./MyContext/MyContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AllPokemons from "./components/AllPokemons/AllPokemons";
import TypedPokemons from "./components/TypedPokemons/TypedPokemons";
import SelectedPokemon from "./components/SelectedPokemon/SelectedPokemon";

function App() {
  const {
    pokemons,
    typeFilteredPokemons,
    types,
    type,
    setType,
    typeFilter,
    selectedPokemon,
  } = useContext(MyContext);

  return (
    <>
      <Navigation typeFilter={typeFilter} types={types} setType={setType} />
      <Routes>
        <Route path="/" element={<AllPokemons pokemons={pokemons} />} />
        <Route
          path={`/type/${type}`}
          element={<TypedPokemons pokemons={typeFilteredPokemons} />}
        />
        <Route
          path={`/pokemon/${selectedPokemon}`}
          element={<SelectedPokemon selectedPokemon={selectedPokemon} />}
        />
      </Routes>
    </>
  );
}

export default App;
