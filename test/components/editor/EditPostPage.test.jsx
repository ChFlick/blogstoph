import React from 'react';
import { shallow } from 'enzyme';

import { EditPostPage } from '../../../src/components/editor/EditPostPage';
import PostForm from '../../../src/components/editor/PostForm';

test('should render the add post page correctly', () => {
    const wrapper = shallow(<EditPostPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the post form', () => {
    const wrapper = shallow(<EditPostPage />);

    expect(wrapper.find(PostForm).exists()).toBeTruthy();
});

describe('onSubmit', () => {
    test('should edit the post', () => {
        const match = { params: { id: 'ID' } };
        const post = { test: 'test' };
        const editPostSpy = jest.fn();
        const wrapper = shallow(<EditPostPage match={match} editPost={editPostSpy} history={{ push: jest.fn() }} />);

        wrapper.find(PostForm).prop('onSubmit')(post);

        expect(editPostSpy).toHaveBeenCalledWith(match.params.id, post);
    });

    test('should redirect the user', () => {
        const match = { params: { id: 'ID' } };
        const historyPushSpy = jest.fn();
        const wrapper = shallow(<EditPostPage match={match} editPost={jest.fn()} history={{ push: historyPushSpy }} />);

        wrapper.find(PostForm).prop('onSubmit')();

        expect(historyPushSpy).toHaveBeenCalled();
    });
});

describe('onRemove', () => {
    test('should remove the post', () => {
        const post = { test: 'test' };
        const removePostSpy = jest.fn();
        const wrapper = shallow(<EditPostPage post={post} removePost={removePostSpy} history={{ push: jest.fn() }} />);

        wrapper.instance().onRemove();

        expect(removePostSpy).toHaveBeenCalledWith(post);
    });

    test('should redirect the user', () => {
        const match = { params: { id: 'ID' } };
        const historyPushSpy = jest.fn();
        const wrapper = shallow(<EditPostPage match={match} removePost={jest.fn()} history={{ push: historyPushSpy }} />);

        wrapper.instance().onRemove();

        expect(historyPushSpy).toHaveBeenCalled();
    });
});
