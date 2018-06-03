const getVisiblePosts = (posts = [], { published, sortBy = 'date' } = {}) => {
    return posts.filter((post) => {
        const publishedMatch = published === undefined || (!!published === post.published);

        return publishedMatch;
    }).sort((a, b) => {
        return b[sortBy] - a[sortBy];
    });
};

const getPostByIdOrTitle = (posts, searchField) => {
    return posts.find((post) =>
        post.id === searchField ||
        post.title.toLowerCase().replace(/ /g, '-') === searchField.toLowerCase());
};

export { getVisiblePosts, getPostByIdOrTitle };
