import React, { Fragment } from 'react';
import { connect } from 'react-redux';

export const PostList = (props) => (
    <Fragment>
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post) => (
                    <Fragment key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </Fragment>
                ))
            )
        }
    </Fragment>
);

const mapStateToProps = (state) => ({
    posts: (state.posts || []).filter((post = {}) => post.published === true)
});

export default connect(mapStateToProps)(PostList);
