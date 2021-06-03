import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firebaseConfig as fb} from '../config/firebaseConfig'

import { setAuthStatusFlag, unsetAuthStatusFlag, setCurrentUser, unsetCurrentUser, setAuth, setDB } from '../actions/myActions';


export class Auth extends Component {

    googleAccessToken = null;

    componentDidMount() {
        let db = fb.initDB();
        let auth = fb.initAuth();
        console.log('initAuth', auth)

        this.props.setAuth(auth);
        this.props.setDB(db);

        //initilize authStateChange event handler
        auth.onAuthStateChanged(user => this.authStateChangeHandler(user))
    }

    authStateChangeHandler(user) {
        if (user) {
            //User has just logged in

            // //Check for google accessToken (for future)
            // (this.googleAccessToken) ? console.log("token: ", this.googleAccessToken) : console.log("No Access Token")

            let currentUser = {
                username: (user.displayName) ? user.displayName : "No Display Name",
                email: user.email,
                lastLoggedIn: user.metadata.lastSignInTime,
                memberSince: user.metadata.creationTime,
                token: (this.googleAccessToken) ? this.googleAccessToken : null,
            }
            this.props.setCurrentUser(currentUser);
            this.props.setAuthStatusFlag();
        } else {
            //User has logged out
            
            this.props.unsetCurrentUser();
            this.props.unsetAuthStatusFlag();

        }
    }

    signInWithGooglePopUp() {

        //Sign in and Sign out events handled in authStateChangeHandler()
        //onSignInPopupError still used to catch any errors from signing in with google popup
        fb.signInWithGooglePopUp( () => {}, (error) => this.onSignInPopupError(error));
    }

    onSignInPopupError(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        console.error(`(GOOGLE POPUP FAILED): (${errorCode}): ${errorMessage}`)
    }

    logUserOut() {
        console.log("Log Out clicked")
        this.props.auth.signOut();
    }

    render() {
        return (
            <div>
                <h1>AUTH</h1>
                <h2>{`Status: ${(this.props.authStatus) ? "Signed In" : "Signed Out"}`}</h2>
                <h2>{`User Email: ${(this.props.currentUser) ? this.props.currentUser.username : "Unknown User"}`}</h2>
                {(!this.props.currentUser) ? <button onClick={() => this.signInWithGooglePopUp()}>Sign In (Google Popup)</button>: <br />}
                {(this.props.currentUser) ? <button onClick={() => this.logUserOut()}>Log Out</button>: <br></br>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    authStatus: state.auth.status,
    currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setAuthStatusFlag: () => dispatch(setAuthStatusFlag()),
    unsetAuthStatusFlag: () => dispatch(unsetAuthStatusFlag()),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    unsetCurrentUser: () => dispatch(unsetCurrentUser()),
    setAuth: auth => dispatch(setAuth(auth)),
    setDB: db => dispatch(setDB(db)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
