import React from 'react';
import { Link } from 'react-router-dom';

import PostList from './PostList';

const EditorDashboardPage = () => (
    <div>
        <h1>Editor Dashboard</h1>
        <PostList />
        <Link to="./add">Add Post</Link>
    </div>
);

export default EditorDashboardPage;
