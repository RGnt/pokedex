import React from 'react';
import pokeapi from '../api/pokeapi';

export default class PokemonCard extends React.Component {
    state = {
        pokemon: undefined
    }
    async componentDidMount() {
        const response = await pokeapi.get(this.props.url);
        this.setState({ pokemon: response.data });
    }
    render() {
        console.log(this.state.pokemon)
        if (this.state.pokemon !== undefined) {
            return (

                <div className="ui card">
                    <div className="image">
                        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
                    </div>
                    <div className="content">
                        <div className="header">{this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)}</div>
                        <div className="meta">#{this.state.pokemon.id}</div>
                        <div className="ui two column very relaxed grid">
                            <div className="column">
                                <div className="ui list">
                                    <div className="item"><h4>Abilities:</h4></div>
                                    <div className="ui divider"></div>
                                    {this.state.pokemon.stats.map((stat) => <div key={stat.stat.name} className="item">{stat.stat.name}: {stat.base_stat}</div>)}
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui list">
                                    <div className="item"><h4>Type(s):</h4></div>
                                    <div className="ui divider"></div>
                                    {this.state.pokemon.types.map((type) => <div key={type.type.name} className="item">{type.type.name}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else { return (<div></div>) }
    };
};