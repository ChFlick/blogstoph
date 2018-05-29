import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { startEditPost, startRemovePost } from '../../actions/posts';
import PostForm from './PostForm';

export class EditPostPage extends React.Component {
    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState(() => ({ modalIsOpen: true }));
    }

    closeModal = () => {
        this.setState(() => ({ modalIsOpen: false }));
    }

    goBack = () => {
        this.props.history.push('/editor/dashboard');
    };

    onSubmit = (post) => {
        this.props.editPost(this.props.match.params.id, post);
        this.goBack();
    };

    onRemove = () => {
        this.props.removePost(this.props.post);
        this.goBack();
    };

    pageHeader = (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Post</h1>
            </div>
        </div>
    );

    createPageContent = () => (
        <div className="content-container">
            <PostForm
                post={this.props.post}
                onSubmit={this.onSubmit}
                onBack={this.goBack} />
            <button
                className="button"
                type="button"
                onClick={this.openModal}
            >
                Remove Post
            </button>
        </div>
    );

    createModal = () => (
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Remove Post"
        >
            <h2>Remove Post</h2>
            <p>Are you sure you want to remove the post?</p>
            <button onClick={this.closeModal}>Cancel</button>
            <button onClick={this.onRemove}>Ok</button>
        </Modal>
    );

    render() {
        return (
            <Fragment>
                {this.pageHeader}
                {this.createPageContent()}
                {this.createModal()}
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
