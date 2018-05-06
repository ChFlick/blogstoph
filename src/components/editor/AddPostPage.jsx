import React from 'react';
import { connect } from 'react-redux';

import { startAddPost } from '../../actions/posts';
import PostForm from './PostForm';

export const AddPostPage = (props) => (
    <div>
        <h1>Add Post</h1>
        <PostForm onSubmit={props.addPost}/>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => {
        dispatch(startAddPost(post));
    }
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
