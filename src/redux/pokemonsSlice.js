import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    greet: () => console.log("hello"),
  },
  extraReducers: {},
});

export const { greet } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
