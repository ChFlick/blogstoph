import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';


export const Header = ({ isAuthenticated, startLogout }) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>Blogstoph</h1>
                    </Link>
                    {isAuthenticated ? (
                        <div>
                            <Link className="button button--link" to="/editor/dashboard">Editor Area</Link>
                            <button className="button button--link" onClick={startLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link className="button button--link" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
