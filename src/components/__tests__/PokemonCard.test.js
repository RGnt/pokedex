import React from 'react';
import { shallow } from 'enzyme';

import PokemonCard from '../PokemonCard';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<PokemonCard />);
});

it('exist', () => {
    expect(wrapper).not.toBeUndefined();
});