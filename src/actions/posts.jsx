import database from '../firebase/firebase';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (post = {}) => {
    return (dispatch, getState) => {
        return database.ref('posts').push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    };
};

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        return database.ref('posts').once('value').then((snapshot) => {
            const posts = [];

            snapshot.forEach((postSnapshot) => {
                posts.push({
                    id: postSnapshot.key,
                    ...postSnapshot.val()
                });
            });

            dispatch(setPosts(posts));
        });
    };
};
