import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <section className="post-preview-item">
        <Link className="post-preview-item__link" to={`post/${props.post.id}`} >
            <h1 className="post-preview-item__title">{props.post.title}</h1>
            <h2 className="post-preview-item__subtitle">{props.post.subtitle}</h2>
        </Link>
        <p className="post-preview-item__data">
            Posted by {props.post.author} on {moment(props.post.date).format('DD. MMM YYYY')}
        </p>
    </section>
);

export default PostListItem;
