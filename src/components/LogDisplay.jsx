import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConfig as fb } from '../config/firebaseConfig';

import {addToCardList, setCardList, clearCardList} from '../actions/myActions';
import CardListItem from './CardList/CardListItem';

import './CardList/CardListStyles.css';




class LogDisplay extends Component {
    

    componentDidMount() {
        this.loadCards();
        // this.props.setCardList(cards);

    }

    loadCards() {
        let db = fb.getDB();
        // const cards = []
        this.props.clearCardList();
        db.collection('cards')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data()
                data['id'] = doc.id
                this.props.addToCardList(data)
                console.log(doc.id)
            })
          })
          .catch(error => console.log(error))
    }

    render() {
        console.log("this.props.cards");
        console.log(this.props.cards);
        return (
            <div>
                <button className="card-list-refresh-btn" onClick={() => this.loadCards()}>Refresh</button>
                <ol className='card-list'>
                    {this.props.cards && this.props.cards.map((card, i) => 
                        <CardListItem card={card} id={i} loadCards={() => this.loadCards()}/>
                    )}
                </ol>
                   
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

export default connect(mapStateToProps, mapDispatchToProps)(LogDisplay)
