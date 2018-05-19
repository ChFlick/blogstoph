import React from 'react';
import { connect } from 'react-redux';

import { startEditPost } from '../../actions/posts';
import PostForm from './PostForm';

export class EditPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.edit(this.props.match.params.id, post);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Edit Post</h1>
                <PostForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(undefined, mapDispatchToProps)(EditPostPage);
