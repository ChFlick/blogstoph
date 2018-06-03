import { getVisiblePosts, getPostByIdOrTitle } from '../../src/selectors/posts';

describe('getVisiblePosts ', () => {
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
});

describe('getPostByIdOrTitle', () => {
    test('should get a post by title ignoreCase', () => {
        const posts = [{
            title: 'Post Number One'
        }, {
            title: 'post number two'
        }];

        const post = getPostByIdOrTitle(posts, 'post-number-one');
        expect(post).toEqual(posts[0]);
    });

    test('should get a post by id', () => {
        const posts = [{
            id: 'asdf'
        }, {
            id: 'zxcv'
        }];

        const post = getPostByIdOrTitle(posts, 'asdf');
        expect(post).toEqual(posts[0]);
    });
});
