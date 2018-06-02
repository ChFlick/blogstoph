import React from 'react';
import { Link } from 'react-router-dom';

import PostList from './PostList';

const EditorDashboardPage = () => (
    <section>
        <header className="page-header">
            <div className="content-container">
                <h1 className="page-header__title ">Care about your blog</h1>
            </div>
        </header>
        <div className="content-container">
            <Link className="button button--fullsize" to="./add">Add Post</Link>
            <PostList />
        </div>
    </section>
);

export default EditorDashboardPage;
