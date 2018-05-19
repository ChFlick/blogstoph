import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddPostPage from '../components/editor/AddPostPage';
import DashboardPage from '../components/DashboardPage';
import EditorDashboardPage from '../components/editor/DashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={DashboardPage} exact={true} />
                <PublicRoute path="/dashboard" component={DashboardPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/editor/dashboard" component={EditorDashboardPage} />
                <PrivateRoute path="/editor/add" component={AddPostPage} />
                <PrivateRoute path="/editor/edit/:id" component={AddPostPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
