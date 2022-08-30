import React, { useState, useEffect, useContext } from "react";
import MyContext from "../../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Pokemon.css";

const Pokemon = ({ name, url }) => {
  const [image, setImage] = useState("");
  const { selectPokemon } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const {
        data: {
          sprites: { front_default },
        },
      } = await axios(url);

      setImage(front_default);
    })();
  }, [url]);

  return (
    <div
      className="pokemon-card grow dib br3 ma1 pointer"
      onClick={() => selectPokemon(name, image, navigate)}
    >
      <img src={image} alt={name} />
      <div className="tc pb2">{name}</div>
    </div>
  );
};

export default Pokemon;
