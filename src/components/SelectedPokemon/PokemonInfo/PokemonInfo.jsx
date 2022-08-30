import React from "react";
import "./PokemonInfo.css";

const PokemonInfo = (props) => {
  const {
    selectedPokemon,
    abilities,
    moves,
    selectedPokemonTypes,
    height,
    weight,
  } = props;

  const abilitiesDisplay = abilities.map((ability) => {
    return <li key={ability.ability.name}>{ability.ability.name}</li>;
  });

  const movesDisplay = moves.map((move) => {
    return (
      <li key={move} className="ma1 pa1">
        &nbsp;{move}&nbsp;
      </li>
    );
  });

  const typesDisplay = selectedPokemonTypes.map((type) => {
    return <li key={type}>{type}</li>;
  });

  return (
    <table className="dib pa2 v-top">
      <thead>
        <tr>
          <th colSpan={2}>Pokemon information</th>
          <th>Abilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td className="ttc">{selectedPokemon}</td>
          <td rowSpan={4}>
            <ul className="list pl0">{abilitiesDisplay}</ul>
          </td>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            <ul className="list pl0">{typesDisplay}</ul>
          </td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{weight}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={3}>Moves</th>
        </tr>
        <tr>
          <td colSpan={3}>
            <ul className="moves list pl0 flex flex-wrap">{movesDisplay}</ul>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PokemonInfo;
