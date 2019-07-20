import React from 'react';
//import PokemonCard from '../pokemoncard/PokemonCard';
import PokemonFCard from '../pokemoncard/pokemon-card.component';
import './PokemonList.css';

export default class PokemonList extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="cardContainer">
                    {this.props.pokemon.map(pokemon => {
                        //console.log(pokemon.url.substring(25));
                        return <PokemonFCard url={pokemon.url} key={pokemon.name} />
                    })}
                </div>
            </div>
        );
    };
};