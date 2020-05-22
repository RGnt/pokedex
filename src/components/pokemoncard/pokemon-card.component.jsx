import React, {useState, useEffect} from 'react';
// import pokeapi from '../../api/pokeapi';
import "./PokemonCard.scss";
import variables from '../../utils/variables.scss';

import { capitalize, createColorName, createHeaderColor } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { getPokemonData } from './../../redux/pokemonsSlice';
import { useSelector } from 'react-redux';

const PokemonCard = React.memo((props) => {
    const pokemon = useSelector(state => state.pokemons.data[props.name]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(pokemon.url) {
            dispatch(getPokemonData(props.url))
        }
    }, [dispatch]);

    if (pokemon.id !== undefined) {
        return (
            <div className="card">
                <div className="cardInner" style={createHeaderColor(pokemon.types)}>
                    <div className="cardHeader">
                        <h2 className="cardHeaderName">{capitalize(pokemon.name)}</h2>
                    </div>
                    <div className="cardBody">
                        <div className="cardImage" >
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        
                        <div className="cardTypes">
                            <div>
                                {
                                    pokemon.types.map((type) => 
                                    <span key={type.type.name} 
                                          className="typeFlair" 
                                          style={{ "background": `${variables[createColorName(type.type.name)]}` }}
                                        >
                                        {type.type.name}
                                    </span>
                                    )
                                }
                            </div>                            
                        </div>
                        <div className="set">
                            <h3 className="cardHeaderNumber">
                                Gen {pokemon.id <= 151? ' 1' : pokemon.id > 151 && pokemon.id <= 251 ? ' 2' : ' 3'}: {` #${pokemon.id}`}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else { return <div>loading</div> }

});

export default PokemonCard;