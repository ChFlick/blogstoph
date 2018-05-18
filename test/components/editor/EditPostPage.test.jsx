import React from 'react';
import { shallow } from 'enzyme';

import { EditPostPage } from '../../../src/components/editor/EditPostPage';
import PostForm from '../../../src/components/editor/PostForm';

test('should render the add post page correctly', () => {
    const wrapper = shallow(<EditPostPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the post form', () => {
    const wrapper = shallow(<EditPostPage />);

    expect(wrapper.find(PostForm).exists()).toBeTruthy();
});


describe('onSubmit', () => {
});
