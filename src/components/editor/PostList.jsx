import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';

export const PostList = (props) => (
    <Fragment>
        <div className="list-header">
            <div>Blog posts</div>
        </div>
        <div className="list-body">
            {
                props.posts.length === 0 ? (
                    <p className="list-item list-item--message">There are no posts available</p>
                ) : (
                        props.posts.map((post) => (
                            <PostListItem post={post} key={post.id} />
                        ))
                    )
            }
        </div>
    </Fragment>
);

const mapStateToProps = (state) => ({
    posts: state.posts || []
});

export default connect(mapStateToProps)(PostList);
