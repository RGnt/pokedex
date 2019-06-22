import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';
import { util } from 'node-forge';


let wrapper;
beforeEach(() => {
    wrapper = shallow(<SearchBox />);
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

    it('empties text area on submit', () => {
        wrapper.find('input').simulate('change', { target: { value: 'bulbasaur' } });
        wrapper.update();
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        wrapper.update();
        expect(wrapper.find('input').prop('value')).toEqual('');
    });
});