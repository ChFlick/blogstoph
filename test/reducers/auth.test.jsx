import authReducer from '../../src/reducers/auth';

test('should login with uid', () => {
    const uid = 'someuid';
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);

    expect(state).toEqual({ uid });
});

test('should logout', () => {
    const state = {
        uid: 'someuid'
    };
    const action = {
        type: 'LOGOUT'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({});
});

test('should return state by default', () => {
    const state = {
        uid: 'someuid'
    };

    const action = {
        type: 'UNDEFINED'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual(state);
});

