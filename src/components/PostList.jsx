import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';

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
    posts: (state.posts || []).filter((post = {}) => post.published === true)
});

export default connect(mapStateToProps)(PostList);
