import React from 'react';
import { shallow } from 'enzyme';

import { publishedPosts } from '../../fixtures/posts';
import { PostList } from '../../../src/components/editor/PostList';

describe('post list', () => {
    test('should render correctly without posts', () => {
        const wrapper = shallow(<PostList posts={[]} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should render correctly with posts', () => {
        const wrapper = shallow(<PostList posts={publishedPosts} />);

        expect(wrapper).toMatchSnapshot();
    });
});
