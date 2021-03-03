import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase';

const FIELDS = ['sport', 'pname', 'tname', 'cman', 'year', 'cnum', 'notes'];

export class NewCardForm extends Component {

    ge(id) {
        return document.getElementById(id);
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



        db.collection("cards").add({
            playerName: vals["pname"],
            teamName: vals["tname"],
            sport: vals["sport"],
            cardManufacturer: vals["cman"],
            year: vals["year"],
            cardNumber: vals["cnum"],
            notes: vals["notes"]
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log(docRef)
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        return (
            <div>

                <h1>Add A New Card To Your Collection</h1>

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
