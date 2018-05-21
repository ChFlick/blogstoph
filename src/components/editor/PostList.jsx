import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';

export const PostList = (props) => (
    <Fragment>
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post) => (
                    <PostListItem post={post} key={post.id} />
                ))
            )
        }
    </Fragment>
);

const mapStateToProps = (state) => ({
    posts: state.posts || []
});

export default connect(mapStateToProps)(PostList);
