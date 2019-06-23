import React from 'react';
import pokeapi from '../api/pokeapi';
import "./PokemonCard.css";

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

                <div className="card">
                    <div className="cardHeader">
                        <h2 className="cardHeaderName">{this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)}</h2>
                        <h3 className="cardHeaderNumber">{`#${this.state.pokemon.id}`}</h3>
                    </div>
                    <div className="cardBody">

                        <div className="cardImage" >
                            <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
                        </div>

                        <div className="cardStats">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2"><h3>Stats:</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.pokemon.stats.map((stat) => <tr key={stat.stat.name} className="statRow"> <td>{this.abbreviateName(stat.stat.name)}:</td> <td>{stat.base_stat}</td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="cardTypes">
                        <div>{this.state.pokemon.types.map((type) => <span key={type.type.name} className={`typeFlair ${type.type.name}`}>{type.type.name}</span>)}</div>
                    </div>

                </div>

            )
        } else { return (<div></div>) }
    };
};