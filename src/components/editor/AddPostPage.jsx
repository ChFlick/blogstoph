import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { startAddPost } from '../../actions/posts';
import PostForm from './PostForm';

export class AddPostPage extends React.Component {
    goBack = () => {
        this.props.history.push('/editor/dashboard');
    }

    onSubmit = (post) => {
        this.props.addPost(post);
        this.goBack();
    };

    render() {
        return (
            <Fragment>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title page-header__title--m">Add Post</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PostForm onSubmit={this.onSubmit} onBack={this.goBack} />
                </div>
            </Fragment>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
