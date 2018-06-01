import React from 'react';
import { shallow } from 'enzyme';
import { publishedPosts } from '../fixtures/posts';

import { PostPage } from '../../src/components/PostPage';

test('should render one post page correctly', () => {
    const wrapper = shallow(<PostPage post={publishedPosts[0]}/>);
    expect(wrapper).toMatchSnapshot();
});
