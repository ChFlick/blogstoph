import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const startLogin = (authProviderName) => {
    return () => {
        if (authProviderName === 'google'){
            return firebase.auth().signInWithPopup(googleAuthProvider);
        } else {
            throw new Error('authentication provider not available');
        }
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
