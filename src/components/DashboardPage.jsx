import React, { Fragment } from 'react';

import PostList from './PostList';

const DashboardPage = () => (
    <Fragment>
        <div className="intro-header">
            <div className="content-container">
                <h1 className="intro-header__title">Blogstoph</h1>
                <hr className="intro-header__bar"/>
                <h2 className="intro-header__subtitle">Christoph Flicks IT blog</h2>
            </div>
        </div>
        <PostList />
    </Fragment>
);

export default DashboardPage;
