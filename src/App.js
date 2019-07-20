import React from 'react';
import pokeapi from './api/pokeapi'
import Header from './components/header/Header';
import PokemonList from './components/pokemonlist/PokemonList';
import './App.css';

export default class App extends React.Component {
    state = {
        pokemon: [],
        //        term: ''
    }
    // getSearchTerm = async (term) => {
    //     const response = await pokeapi.get(`/pokemon/?limit=151`, {
    //         params: { limit: '151' }
    //     });
    //     this.setState({ pokemon: response.data })
    //     //        this.setState({ term });
    // }

    async componentDidMount() {
        const response = await pokeapi.get(`/pokemon/`, {
            params: { limit: '251' }
        });
        this.setState({ pokemon: response.data.results })
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