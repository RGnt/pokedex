import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";

export default combineReducers({ pokemons: pokemonsReducer });
