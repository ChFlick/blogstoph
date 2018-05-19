import database from '../firebase/firebase';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (post) => {
    const { title, content, author, date, published } = post;

    return (dispatch, getState) => {
        const visibility = published ? 'public' : 'private';
        return database.ref('posts/' + visibility).push({ title, content, author, date }).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                published,
                ...post
            }));
        });
    };
};

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const startEditPost = (id, post) => {
    const { title, content, author, date, published } = post;

    return (dispatch, getState) => {
        const prevPostPublished = getState().posts.find((post) => post.id === id).published;
        const visibility = published ? 'public' : 'private';

        if (prevPostPublished !== published) {
            const prevPostVisibility = prevPostPublished ? 'public' : 'private';
            database.ref(`posts/${prevPostVisibility}/${id}`).remove();
        }

        return database.ref(`posts/${visibility}/${id}`).set({ title, content, author, date }).then((ref) => {
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

