import React from 'react';
import { connect } from 'react-redux';

export const PostList = (props) => (
    <div>
        {
            props.posts.length === 0 ? (
                <p>There are no posts available</p>
            ) : (
                props.posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))
            )
        }
    </div >
);

const mapStateToProps = (state) => ({
    posts: (state.posts || []).filter((post = {}) => post.published === true)
});

export default connect(mapStateToProps)(PostList);
