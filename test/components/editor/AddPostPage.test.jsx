import React from 'react';
import { shallow } from 'enzyme';

import AddPostPage from '../../../src/components/editor/AddPostPage';
import PostForm from '../../../src/components/editor/PostForm';

test('should render the add post page correctly', () => {
    const wrapper = shallow(<AddPostPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the post form', () => {
    const wrapper = shallow(<AddPostPage />);

    expect(wrapper.find(PostForm).exists()).toBeTruthy();
});
