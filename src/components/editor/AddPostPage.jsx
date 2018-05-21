import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { startAddPost } from '../../actions/posts';
import PostForm from './PostForm';

export class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.addPost(post);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Add Post</h1>
                <PostForm onSubmit={this.onSubmit} />
            </Fragment>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
