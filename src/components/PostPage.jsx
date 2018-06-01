import React, { Fragment } from 'react';
import Remarkable from 'react-remarkable';
import { connect } from 'react-redux';
import moment from 'moment';

export const PostPage = ({post}) => (
    <Fragment>
        <div className="page-header">
            <div className="content-container align-left">
                <h1 className="page-header__title page-header__title--l">{post.title}</h1>
                <h2 className="page-header__subtitle"></h2>
                <h3 className="page-header__info">
                    Posted by {post.author} on {moment(post.date).format('DD. MMM YYYY')}
                </h3>
            </div>
        </div>
        <div className="content-container">
            <Remarkable>
                {post.content}
            </Remarkable>
        </div>
    </Fragment>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps, undefined)(PostPage);
