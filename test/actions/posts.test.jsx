import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddPost, addPost } from '../../src/actions/posts';
import { publishedPosts } from '../fixtures/posts';

import database from '../../src/firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    database.ref('posts').set({}).then(() => {
        done();
    });
});

test('addPost should generate an action object', () => {
    const post = publishedPosts[0];

    expect(addPost(post)).toEqual({
        type: 'ADD_POST',
        post
    });
});

test('startAddPost should call addPost', (done) => {
    const store = createMockStore({});
    const post = publishedPosts[1];

    store.dispatch(startAddPost(post)).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({
            type: 'ADD_POST',
            post
        });

        done();
    });
});
