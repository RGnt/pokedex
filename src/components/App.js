import React from 'react';
import pokeapi from '../api/pokeapi'
import Header from './Header';
import PokemonList from './PokemonList';
export default class App extends React.Component {
    state = {
        pokemon: undefined,
        term: ''
    }
    getSearchTerm = async (term) => {
        const response = await pokeapi.get(`/pokemon/${term}`);
        this.setState({ pokemon: response.data })
        //        this.setState({ term });
    }
    render() {
        return (
            <div>
                <Header onSearchCB={this.getSearchTerm} title="PokeDex" />
                <PokemonList pokemon={this.state.pokemon} />
            </div>
        );
    };
};