export default (posts = [], { published, sortBy = 'date' } = {}) => {
    return posts.filter((post) => {
        const publishedMatch = published === undefined || (!!published === post.published);

        return publishedMatch;
    }).sort((a, b) => {
        return b[sortBy] - a[sortBy];
    });
};
