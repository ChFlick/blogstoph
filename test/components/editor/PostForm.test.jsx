import React from 'react';
import { shallow } from 'enzyme';

import PostForm from '../../../src/components/editor/PostForm';

test('renders the post form correctly', () => {
    const wrapper = shallow(<PostForm />);

    expect(wrapper).toMatchSnapshot();
});
