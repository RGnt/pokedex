import React, { useState, useEffect } from "react";
import PokemonList from "./components/pokemonlist/PokemonList";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData } from "./redux/pokemonsSlice";
const App = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.data);
  const nextUrl = useSelector((state) => state.pokemons.nextUrl);
  
  useEffect(() => {
    console.log("loopy");
    dispatch(getPokemonData({ apiEndPoint: "pokemon" }));
  }, [dispatch]);

  const onButton = () => {
      dispatch(getPokemonData(nextUrl));
  }
  return (
    <div>
      <PokemonList pokemons={pokemons} />
      <button onClick={onButton}>Load more</button>
    </div>
  );
};

export default App;
