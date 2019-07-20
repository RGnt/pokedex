import React from 'react';
import pokeapi from '../../api/pokeapi';
import "./PokemonCard.scss";
import variables from '../variables.scss';

import {abbreviateName, createGradiend, capitalize, createColorName, createHeaderColor} from '../../utils/utils';

export default class PokemonCard extends React.Component {
    state = {
        pokemon: undefined
    }
    async componentDidMount() {
        const response = await pokeapi.get(this.props.url);
        this.setState({ pokemon: response.data });
    }

    
    render() {
        //console.log(this.state.pokemon)
        if (this.state.pokemon !== undefined) {
            return (

                <div className="card">
                    <div className="cardInner" style={createHeaderColor(this.state.pokemon.types)}>
                        <div className="cardHeader">
                            <h2 className="cardHeaderName">{capitalize(this.state.pokemon.name)}</h2>
                        </div>
                        <div className="cardBody">
                            <div className="cardImage" >
                                <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
                            </div>

                            <div className="cardTypes">
                                <div>{this.state.pokemon.types.map((type) => <span key={type.type.name} className="typeFlair" style={{ "background": `${variables[createColorName(type.type.name)]}` }}>{type.type.name}</span>)}</div>                            </div>
                            <div class="set"><h3 className="cardHeaderNumber">Gen 1: {`#${this.state.pokemon.id}`}/151</h3></div>
                        </div>
                    </div>
                </div>

            )
        } else { return (<div></div>) }
    };
};