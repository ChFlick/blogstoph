import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
                            <div
                                className="post-preview"
                            >
                                <h3 className="post-preview__title">{post.title}</h3>
                                <p className="post-preview__subtitle">{post.content}</p>
                                <span className="post-preview__data">
                                    Posted by {post.author} at {moment(post.date).format('DD. MMM YYYY')}
                                </span>
                            </div>
                            {isNotLastElement(index, props.posts.length) && <hr className="post-preview__separator" />}
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
