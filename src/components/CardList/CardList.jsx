import React from 'react'

import CardListItem from './CardListItem';

// import './MyCards.css';

function CardList (props) {
    return (
        <div className="card-list-container">
            <button className="card-list-refresh-btn" onClick={() => props.loadCards()}>Refresh</button>
            {props.cards ? 
                <ol className='card-list'>
                    {props.cards.map((card, i) => 
                        <CardListItem
                            card={card}
                            id={i}
                            loadCards={props.loadCards}
                            onDelete={props.onDelete}
                            getDetails={props.getDetails}
                            key={i}
                        />
                    )}
                </ol> :
                <p>No Cards Found</p>
            }
                
        </div>
    )
}

export default CardList
