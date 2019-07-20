import React from 'react';

const PokemonContext = React.createContext({});

export const PokemonProvider = PokemonContext.Provider;
export const PokemonConsumer = PokemonContext.Consumer;
export default PokemonContext;