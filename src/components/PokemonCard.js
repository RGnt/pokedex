import React from 'react';

export default class PokemonCard extends React.Component {
    render() {
        return (
            <div>
                <div><h2>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h2><h3>#{this.props.pokemon.id}</h3></div>
                <div><img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} /></div>

                <div>{this.props.pokemon.stats.map((stat) => <ul><li>{stat.stat.name} {stat.base_stat}</li></ul>)}</div>
                <div>{this.props.pokemon.types.map((type) => <ul><li>{type.type.name}</li></ul>)}</div>
            </div>
        );
    };
};