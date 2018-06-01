import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <div className="post-preview-item">
        <Link className="post-preview-item__link" to={`post/${props.post.id}`} >
            <h3 className="post-preview-item__title">{props.post.title}</h3>
            <p className="post-preview-item__subtitle">{props.post.content}</p>
        </Link>
        <span className="post-preview-item__data">
            Posted by {props.post.author} on {moment(props.post.date).format('DD. MMM YYYY')}
        </span>
    </div>
);

export default PostListItem;
