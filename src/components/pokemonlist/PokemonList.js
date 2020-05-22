import React from "react";
import PokemonCard from "../pokemoncard/pokemon-card.component";

import "./PokemonList.scss";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <div className="cardContainer">
        {Object.keys(pokemons).map((pokemon) => {
          return <PokemonCard url={pokemons[pokemon].url} name={pokemon} key={pokemons[pokemon].name} />
        })}
      </div>
    </div>
  );
};

export default PokemonList;
