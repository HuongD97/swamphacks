const firebase = require('firebase/app');

require('firebase/auth');

const Fire = (function() {
    this.instance = null;

    const config = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    };

    function init() {
        return firebase.initializeApp(config);
    }

    return {
        getInstance: function () {
            if (!this.instance) {
                this.instance = init();
            }

            return this.instance;
        }
    };
}());

module.exports = Fire.getInstance();
