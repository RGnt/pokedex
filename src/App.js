import React, {useState, useEffect} from 'react';
import PokemonList from './components/pokemonlist/PokemonList';
import {PokemonProvider} from './state/state';
import './App.scss';
import { fetchPokemons } from './api/pokeapi';
const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

const App = () =>  {
    const [pokeapi, setPokeapi] = useState({});
    const [pokemons, setPokemons] = useState([]);

   
    const buildPokeapiData = (input) => {
        let oldData = pokeapi.results;
        let results = [...oldData, ...input.results];
        console.log(results);
        input.results = results;
        console.log(input);
        return input;
    }

    let loadMore = () => {
        if(pokeapi.next !== undefined) {
            // setUrl(pokeapi.next);
        }
    }

    console.log(fetchPokemons("https://pokeapi.co/api/v2/pokemon/"));

    return (
        <PokemonProvider value={pokeapi}>
            <div>
                {pokeapi.results !== undefined ? console.log(pokemons) : ''}
                <button onClick={loadMore}>Load more</button>
                <button onClick={
                    ()=>{
                                            }
                }>
                    Load Gen 1
                </button>
                <button onClick={()=>{
                    
                }}>Load Gen 2</button>
            </div>
        </PokemonProvider>
    );
};

export default App;