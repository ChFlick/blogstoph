import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';
import { getVisiblePosts } from '../selectors/posts';

const isNotLastElement = (index, numberOfPosts) => {
    return index !== numberOfPosts - 1;
};

export const PostList = (props) => (
    <div className="content-container">
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post, index) =>
                    <Fragment key={post.id}>
                        <PostListItem post={post} />
                        {isNotLastElement(index, props.posts.length) && <hr className="bar--light-grey" />}
                    </Fragment>
                )
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    posts: getVisiblePosts(state.posts, { published: true, sortBy: 'date' })
});

export default connect(mapStateToProps)(PostList);
