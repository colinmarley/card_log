import React, { Component } from 'react';
import {firebaseConfig as fb} from '../../config/firebaseConfig';

import './CardListStyles.css';

class CardListItem extends Component {

    createCardDetails(card) {
        let det = card.year + ' ' + card.cardManufacturer + ' ' + card.playerName
        console.log(card.notes);
        if (card.notes !== "") {
            det += `(`
            let temp = card.notes.split(" ")
            console.log("temp");
            console.log(temp)
            temp.map(d => det += `${d}, `)
            det += `)`
        }
        return det;
    }

    onDeleteCard() {
        let db = fb.getDB();
        db.collection("cards").doc(`${this.props.card.id}`).delete().then((a) => {
            console.log(`Document '${this.props.card.id}' successfully deleted!`);
            this.props.loadCards();

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

    }

    render() {
        return (
            <div className="card-list-item" key={this.props.id}>
                <img class="card-list-item-image" src={this.props.card.cardImage} />
                <div class="card-list-item-content">
                    <p className="card-list-item-details">{this.createCardDetails(this.props.card)}</p>
                    {/* <p className="card-list-item-name">{this.props.card.playerName}</p> */}
                    <p className="card-list-item-team">{this.props.card.teamName}</p>
                    
                    <p className="card-list-item-cn">Card #: {this.props.card.cardNumber}</p>
                    <button className="card-list-item-delete-btn" onClick={() => this.onDeleteCard()}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default CardListItem;