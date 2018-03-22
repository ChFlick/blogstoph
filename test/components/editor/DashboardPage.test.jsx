import React from 'react';
import { shallow } from 'enzyme';
import EditorDashboardPage from '../../../src/components/editor/DashboardPage';

test('should render the dashboard page correctly', () => {
    const wrapper = shallow(<EditorDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
