import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase';

const FIELDS = ['sport', 'pname', 'tname', 'cman', 'year', 'cnum', 'notes'];

export class NewCardForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageRef: null
        }
    }

    ge(id) {
        return document.getElementById(id);
    }

    uploadPic(storageRef, file, name) {
        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
        };
        
        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('collection/baseball/' + name).put(file, metadata);
        
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
                    break;
            }
            }, 
            (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
        
                // ...
        
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                default:
                    break;
            }
            }, 
            () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                this.setState({
                    imageRef: downloadURL
                });
            });
            }
        );
    }

    onNewCardSubmit() {

        let vals = {}
        for (let i = 0; i <= FIELDS.length; ++i) {

            if (!FIELDS[i]) {
                break;
            }

            let id = FIELDS[i];
            let el = this.ge(id);
            vals[id] = el.value
        }
        console.log(vals);

        var db = firebase.firestore();
        // var storage = firebase.storage().ref()

        vals["cimg"] = this.state.imageRef


        db.collection("cards").add({
            playerName: vals["pname"],
            teamName: vals["tname"],
            sport: vals["sport"],
            cardManufacturer: vals["cman"],
            year: vals["year"],
            cardNumber: vals["cnum"],
            notes: vals["notes"],
            cardImage: vals["cimg"]
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log(docRef)
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        
    }

    onImageChange(event) {
        let storageRef = firebase.storage().ref()
        if (event.target.files) {
            if (event.target.files[0]) {
                let img = event.target.files[0];
                this.uploadPic(storageRef, img, img.name);
                // this.setState({
                // image: URL.createObjectURL(img)
                // });
            }
        }
    };

    render() {
        return (
            <div>

                <h1>Add A New Card To Your Collection</h1>

                <label htmlFor="photo">Photo:</label>
                <input type="file" name="photo" onChange={(e) => this.onImageChange(e)}/>
                <img src={this.state.imageRef} class="new-card-photo" alt=""/>

                <label htmlFor="sport">Sport</label>
                <input id="sport" type="text"/>

                <label htmlFor="pname">Player Name:</label>
                <input id="pname" type="text"/>

                <label htmlFor="tname">Team Name:</label>
                <input id="tname" type="text"/>

                <label htmlFor="cman">Card Manufacturer:</label>
                <input id="cman" type="text"/>

                <label htmlFor="year">Year:</label>
                <input id="year" type="text"/>

                <label htmlFor="cnum">Card #:</label>
                <input id="cnum" type="text"/>

                <label htmlFor="notes">Notes:</label>
                <input id="notes" type="text"/>

                <button onClick={() => this.onNewCardSubmit()}>SUBMIT</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm)