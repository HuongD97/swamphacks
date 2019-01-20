const Fire = require('../fire.js');
const pick = require('lodash/pick');

async function createUser(email, password) {
    try {
        const result = await Fire.auth().createUserWithEmailAndPassword(email, password);
        return result;
    } catch(e) {
        throw e;
    }
}

async function deleteUser() {
    try {
        const user = Fire.auth().currentUser;
        await user.delete();
    } catch (e) {
        throw e;
    }
}

async function signIn(email, password) {
    try {
        const result = await Fire.auth().signInWithEmailAndPassword(email, password);
        return result;
    } catch (e) {
        throw e;
    }
}

async function signOut() {
    try {
        const result = await Fire.auth().signOut();
        return result;
    } catch (e) {
        throw e;
    }
}

function getCurrentUser(callback) {
    try {
        Fire.auth().onAuthStateChanged((user) => {
            if (user) {
                // This is the current signed in user
                callback(null, pick(user, ['displayName', 'email', 'uid']));
            } else {
                // No user is logged in
                callback(null, null);
            }
        })
    } catch (e) {
        callback(e);
    }
}

module.exports = {
    createUser: createUser,
    signIn: signIn,
    signOut: signOut,
    getCurrentUser: getCurrentUser,
    deleteUser: deleteUser
};


