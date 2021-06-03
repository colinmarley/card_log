import React from 'react';

function CardListItem (props) {
    return (
        <div className="card-list-item">
            {/* <img className="card-list-item-image" src={props.card.cardImage} alt="Nothing Found"/> */}
            <div className="card-list-item-content">
                <p className="card-list-item-year">{props.card.year}</p>
                <p className="card-list-item-player-name">{props.card.playerName}</p>
                <p className="card-list-item-card-manufacturer">{props.card.cardManufacturer}</p>
                <p className="card-list-item-card-set">{}</p>
                <p className="card-list-item-team">{props.card.teamName}</p>
                <p className="card-list-item-card-number">{props.card.cardNumber}</p>
                <button
                    className="card-list-item-delete-btn"
                    onClick={(e) => props.onDelete(e, props.card.id)}
                >X</button>
            </div>
        </div>
    )
}

export default CardListItem;