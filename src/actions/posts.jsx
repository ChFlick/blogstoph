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

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        return Promise.all((getState().auth && getState().auth.uid) ?
            [database.ref('posts/public').once('value'), database.ref('posts/private').once('value')] :
            [database.ref('posts/public').once('value')]
        ).then(([publicPostsSnapshot, privatePostsSnapshot]) => {
            const posts = [];

            publicPostsSnapshot.forEach((postSnapshot) => {
                const { title, author, content, date } = postSnapshot.val();
                posts.push({
                    id: postSnapshot.key,
                    published: true,
                    title,
                    author,
                    content,
                    date
                });
            });

            if (privatePostsSnapshot) {
                privatePostsSnapshot.forEach((postSnapshot) => {
                    const { title, author, content, date } = postSnapshot.val();
                    posts.push({
                        id: postSnapshot.key,
                        published: false,
                        title,
                        author,
                        content,
                        date
                    });
                });
            }

            dispatch(setPosts(posts));
        });
    };
};
