import React from 'react';

import Header from './Header';
import PokemonList from './PokemonList';
export default class App extends React.Component {
    state = {
        term: ''
    }
    getSearchTerm = (term) => {
        this.setState({ term });
    }
    render() {
        return (
            <div>
                <Header onSearchCB={this.getSearchTerm} title="PokeDex" />
                <PokemonList />
            </div>
        );
    };
};