import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
                        <span>By {post.author} at {moment(post.date).format('DD.MM.YYYY')}</span>
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
