import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

const DEFAULT_HEADER_CLASSES = 'header header--fixed-top';

export class Header extends React.Component {
    state = {
        headerClasses: DEFAULT_HEADER_CLASSES
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const scrollPosPrev = this.state.scrollPos;
        const scrollPos = window.scrollY;
        let headerClasses = 'header header--fixed-top';

        if (scrollPos > 80) {
            headerClasses = 'header header--fixed';
            if (scrollPos < scrollPosPrev) {
                headerClasses += ' header--visible';
            }

            this.setState(() => ({ headerClasses }));
        } else if (scrollPos === 0) {
            this.setState(() => ({ headerClasses: DEFAULT_HEADER_CLASSES }));
        }

        this.setState(() => ({ scrollPos }));
    };

    createAreaSwitchButton = () =>
        this.props.private ?
            <Link className="button button--link button--header" to="/dashboard">Visitor Area</Link> :
            <Link className="button button--link button--header" to="/editor/dashboard">Editor Area</Link>;


    render() {
        return (
            <header id="header" className={this.state.headerClasses} onScroll={this.handleScroll}>
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard">
                            <h1>Blogstoph</h1>
                        </Link>
                        {this.props.isAuthenticated ? (
                            <div>
                                {this.createAreaSwitchButton()}
                                <button className="button button--link button--header" onClick={this.props.startLogout}>Logout</button>
                            </div>
                        ) : (
                                <Link className="button button--link" to="/login">Login</Link>
                            )}
                    </div>
                </div>
            </header>
        );
    };
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
