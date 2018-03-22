import postsReducer from '../../src/reducers/posts';
import { publishedPosts } from '../fixtures/posts';

test('ADD_POST should add a post', () => {
    const action = {
        type: 'ADD_POST',
        post: publishedPosts[0]
    };

    const newState = postsReducer(undefined, action);

    expect(newState).toEqual([publishedPosts[0]]);
});

test('EDIT_POST should edit a post by id', () => {
    const updates = {
        title: 'new testtitle'
    };

    const action = {
        type: 'EDIT_POST',
        id: publishedPosts[0].id,
        updates
    };

    const newState = postsReducer(publishedPosts, action);

    expect(newState[0]).toEqual({
        ...publishedPosts[0],
        ...updates
    });
});

test('REMOVE_POST should remove a post by id', () => {
    const action = {
        type: 'REMOVE_POST',
        id: publishedPosts[0].id,
    };

    const newState = postsReducer(publishedPosts, action);

    expect(newState).toEqual([publishedPosts[1], publishedPosts[2]]);
});

test('SET_POSTS should set all posts', () => {
    const posts = [{
        title: 'new testtitle'
    }];

    const action = {
        type: 'SET_POSTS',
        posts
    };

    const newState = postsReducer(publishedPosts, action);

    expect(newState).toEqual(posts);
});

test('should return state by default', () => {
    const action = {
        type: 'UNDEFINED'
    };

    const newState = postsReducer(publishedPosts, action);

    expect(newState).toEqual(publishedPosts);
});
