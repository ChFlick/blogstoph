import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <Fragment>
        <header className="page-header">
            <h1>404 Not Found</h1>
        </header>
        <section className="content-container align-center">
            <p>The page you were looking for could not be found.</p>
            <Link to="/">Click here to go back to the home page</Link>
        </section>
    </Fragment>
);

export default NotFoundPage;
