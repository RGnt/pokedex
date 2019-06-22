import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('App component exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).not.toBeUndefined();
});