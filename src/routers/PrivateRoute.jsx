import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Fragment>
                    <Header private/>
                        <main>
                            <Component {...props} />
                        </main>
                    <Footer />
                </Fragment>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
