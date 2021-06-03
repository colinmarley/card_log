import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firebaseConfig as fb} from '../../config/firebaseConfig'

import { setAuthStatusFlag, setCurrentUser } from '../../actions/myActions';

export class Auth extends Component {

    signInWithGooglePopUp() {


        fb.signInWithGooglePopUp((result) => this.onSignInPopupSuccess(result), (error) => this.onSignInPopupError(error));
    }

    onSignInPopupSuccess(result) {

        //Set Auth Status Flag to True
        this.props.setAuthStatusFlag(true);

        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log("SIGNED IN WITH GOOGLE (POPUP)")
        console.log(`Credential:`);
        console.log(credential);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        let currentUser = {
            username: (user.displayName) ? user.displayName : "No Display Name",
            email: user.email,
            lastLoggedIn: user.metadata.lastSignInTime,
            memberSince: user.metadata.creationTime,
            token: token
        }
        console.log(currentUser);
        this.props.setCurrentUser(currentUser);
        




        // ...
    }

    onSignInPopupError(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(`(GOOGLE POPUP FAILED): (${errorCode}): ${errorMessage}/n "${email}"`)
        console.log(`Credential:`);
        console.log(credential);
    }

    render() {
        return (
            <div>
                <h1>AUTH</h1>
                <h2>{`Status: ${(this.props.authStatus) ? "Signed In" : "Signed Out"}`}</h2>
                <h2>{`User Email: ${(this.props.authStatus) ? this.props.currentUser.username : "Unknown User"}`}</h2>
                <button onClick={() => this.signInWithGooglePopUp()}>Sign In (Google Popup)</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authStatus: state.auth.status,
    currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setAuthStatusFlag: status => dispatch(setAuthStatusFlag(status)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
