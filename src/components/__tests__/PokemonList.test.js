import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from '../PokemonList';
import PokemonCard from '../PokemonCard';
let wrapper;
beforeEach(() => {
    wrapper = shallow(<PokemonList />);
});
it('exist', () => {
    expect(wrapper).not.toBeUndefined();
});

it('contain PokemonCard', () => {
    expect(wrapper.find(PokemonCard).length).toBeGreaterThanOrEqual(1);
});