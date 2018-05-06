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
