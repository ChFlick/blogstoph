import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => (
    <div>
        <Link to={`post/${props.post.id}`}>{props.post.title}<br /></Link>
    </div>
);

export default PostListItem;
