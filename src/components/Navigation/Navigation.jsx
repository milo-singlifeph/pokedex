import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const { typeFilter, types, setType } = props;
  const navigate = useNavigate();

  const pokemonTypes = types.map((type, i) => {
    const { name, url } = type;

    if (i < types.length - 2) {
      return (
        <li
          key={name}
          className="type pv1 ph5 dim pointer"
          onClick={() => typeFilter(name, url, navigate)}
        >
          {name}
        </li>
      );
    }

    return null;
  });

  return (
    <ul className="types tc dib pl0 list fixed top-0 left-0">
      <li
        className="all pv1 ph5 dim pointer"
        onClick={() => {
          setType("");
          navigate("/pokedex", { replace: true });
        }}
      >
        ALL
      </li>
      {pokemonTypes}
    </ul>
  );
};

export default Navigation;
