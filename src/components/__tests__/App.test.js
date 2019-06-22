import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});


describe('App should', () => {
    it('exist', () => {
        expect(wrapper).not.toBeUndefined();
    });

    it('contain Header', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });
})