import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../src/components/DashboardPage';

test('should render the dashboard page correctly', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
