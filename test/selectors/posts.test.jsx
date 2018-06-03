import getVisiblePosts from '../../src/selectors/posts';

test('should sort the posts by date', () => {
    const posts = [{
        date: 2000
    }, {
        date: 0
    }, {
        date: 300
    }];

    const sortedPosts = getVisiblePosts(posts, { sortBy: 'date' });
    expect(sortedPosts).toEqual([posts[0], posts[2], posts[1]]);
});

test('should filter the posts by published status true', () => {
    const posts = [{
        published: true
    }, {
        published: false
    }];

    const filteredPosts = getVisiblePosts(posts, { published: true });
    expect(filteredPosts).toEqual([posts[0]]);
});

test('should filter the posts by published status false', () => {
    const posts = [{
        published: true
    }, {
        published: false
    }];

    const filteredPosts = getVisiblePosts(posts, { published: false });
    expect(filteredPosts).toEqual([posts[1]]);
});

test('shouldn\'t filter the posts without published status', () => {
    const posts = [{
        published: true
    }, {
        published: false
    }];

    const filteredPosts = getVisiblePosts(posts);
    expect(filteredPosts).toEqual(posts);
});


