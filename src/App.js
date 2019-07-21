import React, {useState, useEffect} from 'react';
import pokeapi from './api/pokeapi'
import PokemonList from './components/pokemonlist/PokemonList';
import axios from 'axios';
import {PokemonProvider} from './state/state';
import './App.scss';

const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

const App = () =>  {
    const [pokeapi, setPokeapi] = useState({});
    const [pokemons, setPokemons] = useState([]);
    const [loadCount, setLoadCount] = useState(30);
    const [offset, setOffset] = useState(0);
    const [url, setUrl] = useState(BASEURL);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url, {
                params: {
                            limit: loadCount.toString(),
                            offset: offset.toString()
                        }
            });
            pokeapi.results !== undefined ?
                setPokeapi(buildPokeapiData(response.data)) :
                setPokeapi(response.data)
        }
        fetchData();
    },[url, loadCount, offset])

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
            setUrl(pokeapi.next);
        }
    }

    const buildUrl = (url, count, off) => {
        setUrl(url);
        setLoadCount(count);
        setOffset(off);
    }

    return (
        <PokemonProvider value={pokeapi}>
            <div>
                {pokeapi.results !== undefined ? console.log(pokemons) : ''}
                <button onClick={loadMore}>Load more</button>
                <button onClick={
                    ()=>{
                        buildUrl(BASEURL, 151, 0)
                    }
                }>
                    Load Gen 1
                </button>
                <button onClick={()=>{
                    buildUrl(BASEURL, 100, 151);
                }}>Load Gen 2</button>
                <PokemonList/>
            </div>
        </PokemonProvider>
    );
};

export default App;