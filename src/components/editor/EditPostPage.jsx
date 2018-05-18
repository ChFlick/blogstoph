import React from 'react';
import { connect } from 'react-redux';

// import { startAddPost } from '../../actions/posts';
import PostForm from './PostForm';

export class EditPostPage extends React.Component {
    onSubmit = (post) => {
    //     this.props.addPost(post);
    //     this.props.history.push('/');
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
    // addPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(EditPostPage);
