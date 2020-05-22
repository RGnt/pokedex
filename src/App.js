import React, { useState, useEffect } from "react";
import PokemonList from "./components/pokemonlist/PokemonList";
import { PokemonProvider } from "./state/state";
import "./App.scss";
import { fetchPokemons } from "./api/pokeapi";
import Store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { greet } from "./redux/pokemonsSlice";
const App = () => {
  const [pokeapi, setPokeapi] = useState({});
  const [pokemons, setPokemons] = useState([]);

  return (
      <div>
        {pokeapi.results !== undefined ? console.log(pokemons) : ""}
        <button onClick={() => {}}>Load more</button>
        <button onClick={() => {}}>Load Gen 1</button>
        <button onClick={() => {}}>Load Gen 2</button>
      </div>
  );
};

export default App;
