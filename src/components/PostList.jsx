import React from 'react';
import { connect } from 'react-redux';

export const PostList = (props) => (
    <div>
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post) => (
                    <div key={post.id}>{post.title}</div>
                ))
            )
        }
    </div >
);

const mapStateToProps = (state) => ({
    posts: state.posts || []
});

export default connect(mapStateToProps)(PostList);
