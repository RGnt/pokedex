import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons } from "./../api/pokeapi";

export const getPokemonData = createAsyncThunk(
  "pokemons/getPokemonData",
  async (args, thunkAPI) => {
    const response = await fetchPokemons(args);
    console.log(args, response);
    return response;
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    isFetching: false,
    nextUrl: "",
    prevUrl: "",
    data: [],
  },
  reducers: {
    greet: () => console.log("hello"),
  },
  extraReducers: {
    [getPokemonData.fulfilled]: (state, { payload }) => {
      let data = null;
      state.isFetching = true;
      if (payload.results) {
        state.nextUrl = payload.next ? payload.next : "";
        state.prevUrl = payload.prev ? payload.prev : "";
        state.data = {...state.data, ...payload.results.reduce(
          (h, obj) =>
            Object.assign(h, {
              [obj.name]: { url: obj.url },
            }),
          {}
        )};
      } else {
        console.log(payload);
        state.data[payload.name] = payload;
      }
      state.isFetching = false;
    },
  },
});

export const { greet } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
