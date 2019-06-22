import React from 'react';
import PokemonCard from './PokemonCard';

export default class PokemonList extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokemon !== undefined ? <PokemonCard pokemon={this.props.pokemon} /> : <p></p>}
            </div>
        );
    };
};