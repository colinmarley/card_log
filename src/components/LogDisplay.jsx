import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConfig as fb } from '../config/firebaseConfig';

import {addToCardList, setCardList, clearCardList} from '../actions/myActions';
import CardListItem from './CardList/CardListItem';

import './CardList/CardListStyles.css';




class LogDisplay extends Component {
    

    componentDidMount() {
        let db = fb.getDB();
        // const cards = []
        this.props.clearCardList();
        db.collection('cards')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
                this.props.addToCardList(doc.data())
            })
          })
          .catch(error => console.log(error))
        // this.props.setCardList(cards);

    }

    render() {
        console.log("this.props.cards");
        console.log(this.props.cards);
        return (
            <div>
                <button onClick={() => {}}>Click</button>
                <ol className='card-list'>
                    {this.props.cards && this.props.cards.map((card, i) => 
                        <CardListItem card={card} id={i}/>
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
