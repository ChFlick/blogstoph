import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { login, logout } from './actions/auth';
import { startSetPosts } from './actions/posts';
import moment from 'moment';
import Modal from 'react-modal';

Modal.setAppElement('#app');
moment.locale('de');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetPosts()).then(() => {
            renderApp();
        });
        if (history.location.pathname === '/login'){
            history.push('/editor/dashboard');
        }
    } else {
        store.dispatch(logout());
        store.dispatch(startSetPosts()).then(() => {
            renderApp();
        });
        if (history.location.pathname.includes('editor')){
            history.push('/');
        }
    }
});
