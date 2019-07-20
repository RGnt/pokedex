import React, {useState, useEffect} from 'react';
import pokeapi from './api/pokeapi'
import PokemonList from './components/pokemonlist/PokemonList';
import {PokemonProvider} from './state/state';
import './App.css';


const App = () =>  {
 
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokeapi.get(`/pokemon/`, {
                params: {limit: '252'}
            });
            setPokemons(response.data);
        }
        fetchData();
    },[])

    return (
        <PokemonProvider value={pokemons}>
            <div>
                <PokemonList pokemons={pokemons} />
            </div>
        </PokemonProvider>
    );
};

export default App;