import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCardList, clearCardList, setCardList } from '../../actions/myActions'
import {firebaseConfig as fb} from '../../config/firebaseConfig'

import CardList from './CardList'

import './MyCards.css'

class MyCards extends Component {

    componentDidMount() {
        this.loadCards();
    }

    createCardDetails(card) {
        let det = card.year + ' ' + card.cardManufacturer + ' ' + card.playerName
        if (card.notes !== "") {
            det += `(`
            let temp = card.notes.split(" ")
            temp.map(d => det += `${d}, `)
            det += `)`
        }
        return det;
    }

    loadCards() {
        //Get DB reference
        let db = fb.getDB();

        //Clears card list in State if exists
        this.props.clearCardList();

        //Get cards from firestore
        db.collection('cards')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data()
                data['id'] = doc.id
                this.props.addToCardList(data)

                console.log(doc.id)
                console.log(data)
            })
          })
          .catch(error => console.log(error))
    }

    onDeleteCard(e, id) {
        let db = fb.getDB();
        db.collection("cards").doc(`${id}`).delete().then((a) => {
            console.log(`Document '${id}' successfully deleted!`);
            this.loadCards();

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

    }

    render() {
        return (
            <div className="my-cards-root">
                <h1>My Cards</h1>
                <CardList
                    cards={this.props.cards}
                    loadCards={() => this.loadCards()}
                    onDelete={this.onDeleteCard}
                    getDetails={(card) => this.createCardDetails(card)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.cardList.cards
})

const mapDispatchToProps = (dispatch) => ({
    setCardList: cards => dispatch(setCardList(cards)),
    addToCardList: card => dispatch(addToCardList(card)),
    clearCardList: () => dispatch(clearCardList())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCards)
