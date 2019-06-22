import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import SearchBox from '../SearchBox';
let wrapper;
beforeEach(() => {
    wrapper = shallow(<Header />);
});

describe('Header should', () => {
    it('exist', () => {
        expect(wrapper).not.toBeUndefined();
    });

    it('have title with text ', () => {
        let header = wrapper.find('h1>a');
        expect(header).toHaveLength(1);
        expect(header.html()).toBe("<a href=\"/\">PokeDex</a>")
    });

    it('contains a searchBox', () => {
        expect(wrapper.find(SearchBox)).toHaveLength(1);
    });
});