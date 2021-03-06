import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    startAddPost, addPost, startEditPost, editPost, startSetPosts, setPosts, startRemovePost, removePost
} from '../../src/actions/posts';
import { publishedPosts, privatePosts } from '../fixtures/posts';

import database from '../../src/firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const publicPostData = {};
    publishedPosts.forEach(({ id, title, subtitle, content, author, date, published }) => {
        publicPostData[id] = { title, subtitle, content, author, date };
    });

    const privatePostData = {};
    privatePosts.forEach(({ id, title, subtitle, content, author, date, published }) => {
        privatePostData[id] = { title, subtitle, content, author, date };
    });

    Promise.all([
        database.ref(`posts/public`).set(publicPostData),
        database.ref(`posts/private`).set(privatePostData)]).then(() => done());
});

test('addPost should generate an action object', () => {
    const post = {
        title: 'test',
        subtitle: 'testB',
        content: 'testC',
        author: 'testA',
        date: 200,
        published: false
    };

    expect(addPost(post)).toEqual({
        type: 'ADD_POST',
        post
    });
});

test('startAddPost should call addPost public', (done) => {
    const store = createMockStore({});
    const post = {
        title: 'test',
        subtitle: 'testB',
        content: 'testC',
        author: 'testA',
        date: 200,
        published: true
    };

    store.dispatch(startAddPost(post)).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({
            type: 'ADD_POST',
            post: {
                id: expect.any(String),
                ...post
            }
        });

        done();
    });
});

test('startAddPost should call addPost private', (done) => {
    const store = createMockStore({});
    const post = {
        title: 'test',
        subtitle: 'testB',
        content: 'testC',
        author: 'testA',
        date: 200,
        published: true
    };

    store.dispatch(startAddPost(post)).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({
            type: 'ADD_POST',
            post: {
                id: expect.any(String),
                ...post
            }
        });

        done();
    });
});

test('setPosts should generate an action object', () => {
    const posts = publishedPosts;

    expect(setPosts(posts)).toEqual({
        type: 'SET_POSTS',
        posts
    });
});

describe('startSetPosts', () => {
    test('should call setPosts', (done) => {
        const store = createMockStore({});

        store.dispatch(startSetPosts()).then(() => {
            const actions = store.getActions();
            expect(actions.length).toBe(1);
            expect(actions[0].type).toEqual('SET_POSTS');

            done();
        });
    });

    test('should set the posts correctly when logged out', (done) => {
        const store = createMockStore({});

        store.dispatch(startSetPosts())
            .then(() => {
                const actions = store.getActions();
                expect(actions.length).toBe(1);
                expect(actions[0].posts.length).toEqual(publishedPosts.length);

                done();
            });
    });

    test('should set the posts correctly when logged in', (done) => {
        const store = createMockStore({ auth: { uid: 'testId' } });

        store.dispatch(startSetPosts())
            .then(() => {
                const actions = store.getActions();
                expect(actions.length).toBe(1);
                expect(actions[0].posts.length).toEqual(privatePosts.length + publishedPosts.length);

                done();
            });
    });
});

test('editPost should generate an action object', () => {
    const postId = 'asdf';
    const post = {
        title: 'test',
        subtitle: 'testB',
        content: 'testC',
        author: 'testA',
        date: 200,
        published: false
    };

    expect(editPost(postId, post)).toEqual({
        type: 'EDIT_POST',
        id: postId,
        updates: post
    });
});
describe('in startEditPost', () => {
    test('should call editPost when changing a post', (done) => {
        const store = createMockStore({ posts: [...publishedPosts, ...privatePosts] });
        const id = publishedPosts[0].id;
        const post = {
            title: 'changed',
            subtitle: 'changed',
            content: 'changed',
            author: 'changed',
            date: 123456,
            published: true
        };

        store.dispatch(startEditPost(id, post)).then(() => {
            const actions = store.getActions();
            expect(actions.length).toBe(1);
            expect(actions[0]).toEqual(editPost(id, post));

            done();
        });
    });

    test('should change a post from private to public', (done) => {
        const store = createMockStore({ posts: [...publishedPosts, ...privatePosts] });
        const id = privatePosts[0].id;
        const post = {
            title: 'changed',
            subtitle: 'changed',
            content: 'changed',
            author: 'changed',
            date: 123456,
            published: true
        };

        store.dispatch(startEditPost(id, post)).then(() => {
            return database.ref('posts').once('value');
        }).then((snapshot) => {
            expect(snapshot.hasChild(`private/${id}`)).toBeFalsy();
            expect(snapshot.hasChild(`public/${id}`)).toBeTruthy();

            done();
        });
    });

    test('should change a post from public to private', (done) => {
        const store = createMockStore({ posts: [...publishedPosts, ...privatePosts] });
        const id = publishedPosts[0].id;
        const post = {
            title: 'changed',
            subtitle: 'changed',
            content: 'changed',
            author: 'changed',
            date: 123456,
            published: false
        };

        store.dispatch(startEditPost(id, post)).then(() => {
            return database.ref('posts').once('value');
        }).then((snapshot) => {
            expect(snapshot.hasChild(`private/${id}`)).toBeTruthy();
            expect(snapshot.hasChild(`public/${id}`)).toBeFalsy();

            done();
        });
    });
});

test('removePost should generate an action object', () => {
    const id = 'test123';

    expect(removePost(id)).toEqual({
        type: 'REMOVE_POST',
        id
    });
});

test('startRemovePost should call removePost with the post id', (done) => {
    const store = createMockStore({});
    const post = {
        id: 'test123',
        title: 'test',
        subtitle: 'testB',
        content: 'testC',
        author: 'testA',
        date: 200,
        published: true
    };

    store.dispatch(startRemovePost(post)).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual(removePost(post.id));

        done();
    });
});
