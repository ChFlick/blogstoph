import React from 'react';
import Markdown from 'react-remarkable';
import { connect } from 'react-redux';
import moment from 'moment';

export const PostPage = ({post}) => (
    <article>
        <header className="page-header">
            <div className="content-container align-left">
                <h1 className="page-header__title page-header__title--l">{post.title}</h1>
                <h2 className="page-header__subtitle"></h2>
                <p className="page-header__info">
                    Posted by {post.author} on <time>{moment(post.date).format('DD. MMM YYYY')}</time>
                </p>
            </div>
        </header>
        <Markdown container="section">
            {post.content}
        </Markdown>
    </article>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps, undefined)(PostPage);
