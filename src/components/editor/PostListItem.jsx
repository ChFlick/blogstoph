import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <section>
        <Link className="list-item" to={`post/${props.post.id}`}>
            <h1 className="list-item__title">{props.post.title}</h1>
            <h2 className="list-item__subtitle">{props.post.subtitle}</h2>
            <p className="list-item__data">By {props.post.author} on {moment(props.post.date).format('DD.MM.YYYY')}</p>
        </Link>
    </section>
);

export default PostListItem;
