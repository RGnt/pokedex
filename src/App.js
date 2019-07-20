import React, {useState, useEffect} from 'react';
import pokeapi from './api/pokeapi'
import PokemonList from './components/pokemonlist/PokemonList';
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
        <div>
            <PokemonList pokemons={pokemons} />
        </div>
    );
};

export default App;