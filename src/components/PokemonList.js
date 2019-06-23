import React from 'react';
import PokemonCard from './PokemonCard';

export default class PokemonList extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    {this.props.pokemon.map(pokemon => {
                        console.log(pokemon.url.substring(25));
                        return <PokemonCard url={pokemon.url} key={pokemon.name} />
                    })}
                </div>
            </div>
        );
    };
};