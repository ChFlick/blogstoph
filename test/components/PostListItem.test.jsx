import React from 'react';
import { shallow } from 'enzyme';

import { publishedPosts } from '../fixtures/posts';
import PostListItem from '../../src/components/PostListItem';

describe('post list', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<PostListItem post={publishedPosts[0]} />);

        expect(wrapper).toMatchSnapshot();
    });
});
