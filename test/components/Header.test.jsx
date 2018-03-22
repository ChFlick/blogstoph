import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../src/components/Header';


test('should render Header correctly when logged out', () => {
    const wrapper = shallow(<Header startLogout={() => {}} isAuthenticated={false} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly when logged in', () => {
    const wrapper = shallow(<Header startLogout={() => {}} isAuthenticated={true} />);

    expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} isAuthenticated={true} />);

    wrapper.find('button').simulate('click');

    expect(startLogout).toHaveBeenCalled();
});
