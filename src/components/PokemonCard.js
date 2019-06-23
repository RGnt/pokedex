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

    abbreviateName = (name) => {
        switch (name) {
            case ("speed"): {
                return "Spd";
            }
            case ("special-defense"): {
                return "Sp. Def";
            }
            case ("special-attack"): {
                return "Sp. Atk";
            }
            case ("defense"): {
                return "Def";
            }
            case ("attack"): {
                return "Atk";
            }
            case ("hp"): {
                return "HP";
            }
            default: {
                return name;
            }
        }
    }
    render() {
        console.log(this.state.pokemon)
        if (this.state.pokemon !== undefined) {
            return (

                <div>
                    <div>
                        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
                    </div>
                    <div>
                        <div>{this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)}</div>
                        <div>#{this.state.pokemon.id}</div>
                        <div>
                            <div>
                                <div>
                                    <div><h4>Abilities:</h4></div>
                                    <div></div>
                                    {this.state.pokemon.stats.map((stat) => <div key={stat.stat.name}>{this.abbreviateName(stat.stat.name)}: {stat.base_stat}</div>)}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div><h4>Type(s):</h4></div>
                                    <div></div>
                                    {this.state.pokemon.types.map((type) => <div key={type.type.name}>{type.type.name}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else { return (<div></div>) }
    };
};