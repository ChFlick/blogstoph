import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import PostForm from '../../../src/components/editor/PostForm';

const testText = 'TEST';

test('renders the post form correctly', () => {
    const wrapper = shallow(<PostForm />);

    expect(wrapper).toMatchSnapshot();
});

describe('the post form', () => {
    test('should set the title', () => {
        const wrapper = shallow(<PostForm />);

        wrapper.find('#title').simulate('change', { target: { value: testText } });
        expect(wrapper.state('title')).toEqual(testText);
    });

    test('should set the subtitle', () => {
        const wrapper = shallow(<PostForm />);

        wrapper.find('#subtitle').simulate('change', { target: { value: testText } });
        expect(wrapper.state('subtitle')).toEqual(testText);
    });


    test('should set the content', () => {
        const wrapper = shallow(<PostForm />);

        wrapper.find('#content').simulate('change', { target: { value: testText } });
        expect(wrapper.state('content')).toEqual(testText);
    });

    test('should set the author', () => {
        const wrapper = shallow(<PostForm />);

        wrapper.find('#author').simulate('change', { target: { value: testText } });
        expect(wrapper.state('author')).toEqual(testText);
    });

    test('should set the date', () => {
        const newDate = moment(0);
        const wrapper = shallow(<PostForm />);

        wrapper.find(SingleDatePicker).prop('onDateChange')(newDate);
        expect(wrapper.state('date')).toEqual(newDate);
    });

    test('should set published flag', () => {
        const published = true;
        const wrapper = shallow(<PostForm />);

        wrapper.find('#published').simulate('change', { target: { checked: published } });
        expect(wrapper.state('published')).toEqual(published);
    });
});


test('allows to set a post from outside', () => {
    const post = {
        title: 'test',
        author: 'hello',
        date: 0,
        published: true
    };

    const wrapper = shallow(<PostForm post={post} />);

    expect(wrapper.state('title')).toEqual(post.title);
    expect(wrapper.state('author')).toEqual(post.author);
    expect(wrapper.state('date').valueOf()).toEqual(post.date);
    expect(wrapper.state('published')).toEqual(post.published);
    expect(wrapper.state('content')).toEqual('');
});

describe('in onSubmit', () => {
    test('shouldn\'t call onSubmit at submission with no data', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<PostForm onSubmit={onSubmitSpy} />);

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(onSubmitSpy).not.toHaveBeenCalled();
    });

    test('should set error without data even when private', () => {
        const wrapper = shallow(<PostForm onSubmit={jest.fn()} />);

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(wrapper.state('error')).toEqual(expect.any(String));
    });

    test('shouldn\'t set error with only title when private', () => {
        const wrapper = shallow(<PostForm onSubmit={jest.fn()} />);
        wrapper.setState({ title: 'test' });

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(wrapper.state('error')).toEqual('');
    });

    test('should call onSubmit with only title when private', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<PostForm onSubmit={onSubmitSpy} />);
        wrapper.setState({ title: 'test' });

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(onSubmitSpy).toHaveBeenCalled();
    });

    test('should set error with only title when public', () => {
        const wrapper = shallow(<PostForm onSubmit={jest.fn()} />);
        wrapper.setState({ title: 'test', published: true });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(wrapper.state('error')).toEqual(expect.any(String));
    });

    test('shouldn\'t set error with data when public', () => {
        const wrapper = shallow(<PostForm onSubmit={jest.fn()} />);

        wrapper.setState({
            title: 'test',
            subtitle: 'test',
            content: 'test',
            author: 'someone',
            published: true
        });

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(wrapper.state('error')).toEqual('');
    });

    test('should call onSubmit with data', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<PostForm onSubmit={onSubmitSpy} />);

        wrapper.setState({
            title: 'test',
            subtitle: 'test',
            content: 'test',
            author: 'someone',
            published: true
        });

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(onSubmitSpy).toHaveBeenCalled();
    });
});
