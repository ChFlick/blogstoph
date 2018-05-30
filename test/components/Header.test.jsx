import React from 'react';
import { shallow, mount } from 'enzyme';

import { Header } from '../../src/components/Header';


test('should render Header correctly when logged out', () => {
    const wrapper = shallow(<Header startLogout={() => {}} isAuthenticated={false} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly when logged in', () => {
    const wrapper = shallow(<Header startLogout={() => {}} isAuthenticated={true} />);

    expect(wrapper).toMatchSnapshot();
});


test('should render Header correctly when logged in in private area', () => {
    const wrapper = shallow(<Header private startLogout={() => {}} isAuthenticated={true} />);

    expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} isAuthenticated={true} />);

    wrapper.find('button').simulate('click');

    expect(startLogout).toHaveBeenCalled();
});

test('should set scrollPos in onScroll', () => {
    const scrollPosVal = 33;
    global.scrollY = scrollPosVal;

    const wrapper = shallow(<Header />);

    wrapper.prop('onScroll')();

    expect(wrapper.state('scrollPos')).toEqual(scrollPosVal);
});

test('should set header fixed if scrolled down', () => {
    global.scrollY = 500;

    const wrapper = shallow(<Header />);

    wrapper.prop('onScroll')();

    expect(wrapper.state('headerClasses')).toEqual('header header--fixed');
});

test('should set header fixed and visible if scrolled down and up again', () => {
    const scrollPosVal = 500;
    global.scrollY = scrollPosVal;

    const wrapper = shallow(<Header />);
    wrapper.setState({scrollPos: scrollPosVal + 100 });
    wrapper.prop('onScroll')();

    expect(wrapper.state('headerClasses')).toEqual('header header--fixed header--visible');
});

test('should set header back to top if scoll 0', () => {
    const scrollPosVal = 0;
    global.scrollY = scrollPosVal;

    const wrapper = shallow(<Header />);
    wrapper.prop('onScroll')();

    expect(wrapper.state('headerClasses')).toEqual('header header--fixed-top');
});

test('can unmound', () => {
    const wrapper = shallow(<Header />);
    wrapper.unmount();
});
