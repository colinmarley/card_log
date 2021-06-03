import firebase from 'firebase';

export const firebaseConfig = {

    auth: null,
    googleAuth: null,
    emailAuth: null,
    db: null,

    initConfig: function() {
        // Your web app's Firebase configuration

        var firebaseConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID,
            measurementId: process.env.REACT_APP_MEASUREMENT_ID
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        console.log("Firebase init Complete");
    },

    initDB: () => {
        let db = firebase.firestore();
        return db;
    },

    initAuth: () => {
        let auth = firebase.auth();
        return auth;
    },

    signInWithGooglePopUp: (onSuccess, onError) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => onSuccess(result)
            ).catch((error) => onError(error));
    },

    signInWithGoogleRedirect: () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth()
            .getRedirectResult()
            .then((result) => {
                if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                console.log("SIGNED IN WITH GOOGLE (REDIRECT)")
                console.log(`Credential: ${credential}`);


                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // ...
                }
                // The signed-in user info.
                var user = result.user;
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(`(GOOGLE REDIRECT FAILED): (${errorCode}): ${errorMessage}/n "${email}"`)
            });
    }
}