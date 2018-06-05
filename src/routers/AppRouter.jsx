import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddPostPage from '../components/editor/AddPostPage';
import EditPostPage from '../components/editor/EditPostPage';
import DashboardPage from '../components/DashboardPage';
import EditorDashboardPage from '../components/editor/DashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PostPage from '../components/PostPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={DashboardPage} exact={true} />
            <PublicRoute path="/dashboard" component={DashboardPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <PublicRoute path="/post/:id" component={PostPage} />

            <PrivateRoute path="/editor/dashboard" component={EditorDashboardPage} />
            <PrivateRoute path="/editor/add" component={AddPostPage} />
            <PrivateRoute path="/editor/post/:id" component={EditPostPage} />

            <PublicRoute component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;
