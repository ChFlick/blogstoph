import React from 'react';
import { shallow } from 'enzyme';

import { EditorHeader } from '../../../src/components/editor/Header';


test('should render EditorHeader correctly', () => {
    const wrapper = shallow(<EditorHeader startLogout={() => {}} />);

    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<EditorHeader startLogout={startLogout} />);

    wrapper.find('button').simulate('click');

    expect(startLogout).toHaveBeenCalled();
});
