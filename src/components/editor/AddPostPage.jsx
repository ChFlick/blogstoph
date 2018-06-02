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
                <header className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title ">Add Post</h1>
                    </div>
                </header>
                <section className="content-container">
                    <PostForm onSubmit={this.onSubmit} onBack={this.goBack} />
                </section>
            </Fragment>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
