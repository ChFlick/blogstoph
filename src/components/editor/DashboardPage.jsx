import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PostList from './PostList';

const EditorDashboardPage = () => (
    <Fragment>
        <h1>Editor Dashboard</h1>
        <PostList />
        <Link to="./add">Add Post</Link>
    </Fragment>
);

export default EditorDashboardPage;
