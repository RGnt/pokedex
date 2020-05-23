import React, { useEffect } from 'react';
import { CardsContainer } from './style';
import PokemonList from './../../components/pokemonlist/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonData } from './../../redux/pokemonsSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

const MainPage = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons.data);
    const nextUrl = useSelector((state) => state.pokemons.nextUrl);
    const hasMore = useSelector((state) => state.pokemons.hasMore);

    useEffect(() => {
        console.log("loopy");
        dispatch(getPokemonData({ apiEndPoint: "pokemon" }));
    }, [dispatch]);

    const loadMoreMons = () => {
        dispatch(getPokemonData(nextUrl));
    }
    return (
        <div>
            <CardsContainer>
                <InfiniteScroll
                    dataLength={Object.keys(pokemons).length} //This is important field to render the next data
                    next={loadMoreMons}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                    <PokemonList pokemons={pokemons} />
                </InfiniteScroll>
            </CardsContainer>
        <button onClick={loadMoreMons}>Load more</button>
        </div >
    )
}

export default MainPage;
