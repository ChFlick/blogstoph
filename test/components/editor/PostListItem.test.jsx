import React from 'react';
import { shallow } from 'enzyme';

import { publishedPosts } from '../../fixtures/posts';
import PostListItem from '../../../src/components/editor/PostListItem';

test('should render the PostListItem correctly', () => {
    const wrapper = shallow(<PostListItem post={publishedPosts[0]}/>);
    expect(wrapper).toMatchSnapshot();
});
