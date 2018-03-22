import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
    combineReducers({
        auth: authReducer,
        posts: postsReducer,
    }),
    composedEnhancers(applyMiddleware(thunk))
);
