import database from '../firebase/firebase';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = ({ title, content, author, date, published }) => {
    return (dispatch, getState) => {
        const visibility = published ? 'public' : 'private';

        const post = {
            title,
            content,
            author,
            date
        };

        return database.ref('posts/' + visibility).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    };
};

export const editPost = (id, post) => ({
    type: 'EDIT_POST',
    id,
    post
});

export const startEditPost = (id, { title, content, author, date, published }) => {
    return (dispatch, getState) => {
        const prevPostPublished = getState().posts.find((post) => post.id === id).published;
        const visibility = published ? 'public' : 'private';
        const post = {
            title,
            content,
            author,
            date
        };

        if (prevPostPublished !== published) {
            const prevPostVisibility = prevPostPublished ? 'public' : 'private';
            database.ref(`posts/${prevPostVisibility}/${id}`).remove();
        }

        return database.ref(`posts/${visibility}/${id}`).set(post).then((ref) => {
            dispatch(editPost(
                id,
                post
            ));
        });
    };
};

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    const addPostFromSnapshot = (published, posts) => (postSnapshot) => {
        posts.push({
            id: postSnapshot.key,
            published: !!published,
            ...postSnapshot.val()
        });
    };

    return (dispatch, getState) => {
        return Promise.all(getPostsValueDBReferenceByAuth(getState)
        ).then(([publicPostsSnapshot, privatePostsSnapshot]) => {
            const posts = [];
            publicPostsSnapshot.forEach(addPostFromSnapshot(true, posts));

            if (privatePostsSnapshot) {
                privatePostsSnapshot.forEach(addPostFromSnapshot(false, posts));
            }

            dispatch(setPosts(posts));
        });
    };
};

function getPostsValueDBReferenceByAuth(getState) {
    return (getState().auth && getState().auth.uid) ?
        [database.ref('posts/public').once('value'), database.ref('posts/private').once('value')] :
        [database.ref('posts/public').once('value')];
}

