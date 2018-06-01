import React, { Fragment } from 'react';
import Remarkable from 'react-remarkable';
import { connect } from 'react-redux';

export const PostPage = ({post}) => (
    <Fragment>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title page-header__title--xl">{post.title}</h1>
                <h2 className="page-header__subtitle"></h2>
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
