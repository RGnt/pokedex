import React, {useContext} from 'react';
import PokemonCard from '../pokemoncard/pokemon-card.component';
import PokemonContext from '../../state/state';

import './PokemonList.scss';

const PokemonList = (props) => {
    const pokemons = useContext(PokemonContext);

    if(pokemons.results !== undefined) {
    return (
        <div>
            <div className="cardContainer">
                {pokemons.results.map(pokemon => {
                    return <PokemonCard url={pokemon.url} key={pokemon.name} />
                })}
            </div>
        </div>
    )} else {
        return <div>loading</div>
    }
};

export default PokemonList;