import React, { Fragment } from 'react';
import Remarkable from 'react-remarkable';
import { connect } from 'react-redux';

export const PostPage = ({post}) => (
    <Fragment>
        <div className="intro-header">
            <div className="content-container">
                <h1 className="intro-header__title">{post.title}</h1>
                <h2 className="intro-header__subtitle"></h2>
            </div>
        </div>
        <Remarkable>
            {post.content}
        </Remarkable>
    </Fragment>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps, undefined)(PostPage);
