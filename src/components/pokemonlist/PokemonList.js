import React from 'react';
import PokemonCard from '../pokemoncard/pokemon-card.component';
import './PokemonList.css';

const PokemonList = (props) => {
    if(props.pokemons.results !== undefined) {
    return (
        <div>
            <div className="cardContainer">
                {props.pokemons.results.map(pokemon => {
                    return <PokemonCard url={pokemon.url} key={pokemon.name} />
                })}
            </div>
        </div>
    )} else {
        return <div>loading</div>
    }
};

export default PokemonList;