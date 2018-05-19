import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostList = (props) => (
    <div>
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post) => (
                    <Link to={`post/${post.id}`} key={post.id}>{post.title}</Link>
                ))
            )
        }
    </div >
);

const mapStateToProps = (state) => ({
    posts: state.posts || []
});

export default connect(mapStateToProps)(PostList);
