import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { startEditPost, startRemovePost } from '../../actions/posts';
import PostForm from './PostForm';

export class EditPostPage extends React.Component {
    goBack = () => {
        this.props.history.push('/editor/dashboard');
    }

    onSubmit = (post) => {
        this.props.editPost(this.props.match.params.id, post);
        this.goBack();
    };

    onRemove = () => {
        this.props.removePost(this.props.post);
        this.goBack();
    };

    render() {
        return (
            <Fragment>
                <h1>Edit Post</h1>
                <PostForm post={this.props.post} onSubmit={this.onSubmit} onBack={this.goBack} />
                <button type="button" onClick={this.onRemove}>Remove Post</button>
            </Fragment>
        );
    };
};

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, post) => dispatch(startEditPost(id, post)),
    removePost: (id) => dispatch(startRemovePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
