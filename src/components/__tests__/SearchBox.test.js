import React from 'react';
import { mount } from 'enzyme';

import SearchBox from '../SearchBox';
import { util } from 'node-forge';


let wrapper;
beforeEach(() => {
    wrapper = mount(<SearchBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('exists', () => {
    expect(wrapper).not.toBeUndefined();
});

it('should have an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
});

it('should have a search button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
});

describe('SearchBar form', () => {
    it('allows text entry on textbox', () => {
        wrapper.find('input').simulate('change', { target: { value: 'bulbasaur' } });
        wrapper.update();
        expect(wrapper.find('input').prop('value')).toEqual('bulbasaur');
    });

});