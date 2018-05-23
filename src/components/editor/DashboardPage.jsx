import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PostList from './PostList';

const EditorDashboardPage = () => (
    <Fragment>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Care about your blog</h1>
            </div>
        </div>
        <div className="content-container">
            <PostList />
            <Link className="button" to="./add">Add Post</Link>
        </div>
    </Fragment>
);

export default EditorDashboardPage;
