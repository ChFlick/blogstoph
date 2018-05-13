import React from 'react';
import { shallow } from 'enzyme';

import { AddPostPage } from '../../../src/components/editor/AddPostPage';
import PostForm from '../../../src/components/editor/PostForm';

test('should render the add post page correctly', () => {
    const wrapper = shallow(<AddPostPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the post form', () => {
    const wrapper = shallow(<AddPostPage />);

    expect(wrapper.find(PostForm).exists()).toBeTruthy();
});


describe('onSubmit', () => {
    test('should add the post', () => {
        const post = { test: 'test' };
        const addPostSpy = jest.fn();
        const wrapper = shallow(<AddPostPage addPost={addPostSpy} history={{ push: jest.fn() }} />);

        wrapper.find(PostForm).prop('onSubmit')(post);

        expect(addPostSpy).toHaveBeenCalledWith(post);
    });

    test('should redirect the user', () => {
        const historyPushSpy = jest.fn();
        const wrapper = shallow(<AddPostPage addPost={jest.fn()} history={{ push: historyPushSpy }} />);

        wrapper.find(PostForm).prop('onSubmit')();

        expect(historyPushSpy).toHaveBeenCalled();
    });
});
