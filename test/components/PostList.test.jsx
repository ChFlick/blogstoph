import React from 'react';
import { shallow } from 'enzyme';

import { PostList } from '../../src/components/PostList';

describe('post list', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<PostList />);

        expect(wrapper).toMatchSnapshot();
    });
});
