import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <Link className="list-item" to={`post/${props.post.id}`}>
        <h3 className="list-item__title">{props.post.title}</h3>
        <p className="list-item__subtitle">{props.post.content}</p>
        <span className="list-item__data">By {props.post.author} on {moment(props.post.date).format('DD.MM.YYYY')}</span>
    </Link>
);

export default PostListItem;
