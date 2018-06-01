import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <Fragment>
        <Link
            className="post-preview"
            to={`post/${props.post.id}`}
        >
            <h3 className="post-preview__title">{props.post.title}</h3>
            <p className="post-preview__subtitle">{props.post.content}</p>
        </Link>
        <span className="post-preview__data">
            Posted by {props.post.author} at {moment(props.post.date).format('DD. MMM YYYY')}
        </span>
    </Fragment>
);

export default PostListItem;
