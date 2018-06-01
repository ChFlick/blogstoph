import React, { Fragment } from 'react';

import PostList from './PostList';

const DashboardPage = () => (
    <Fragment>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title page-header__title--xl">Blogstoph</h1>
                <hr className="page-header__bar"/>
                <h2 className="page-header__subtitle">Christoph Flicks IT blog</h2>
            </div>
        </div>
        <PostList />
    </Fragment>
);

export default DashboardPage;
