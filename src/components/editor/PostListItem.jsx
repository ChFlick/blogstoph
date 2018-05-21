import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <div>
        <Link to={`post/${props.post.id}`}>
            <h3>{props.post.title}</h3>
            <p>{props.post.content}</p>
            <span>By {props.post.author} at {moment(props.post.date).format('DD.MM.YYYY')}</span>
        </Link>
    </div>
);

export default PostListItem;
