import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { startEditPost } from '../../actions/posts';
import PostForm from './PostForm';

export class EditPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.editPost(this.props.match.params.id, post);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Edit Post</h1>
                <PostForm post={this.props.post} onSubmit={this.onSubmit} />
            </Fragment>
        );
    };
};

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
