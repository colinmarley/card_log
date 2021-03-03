import React, { Component } from 'react';
import './CardListStyles.css';


class CardListItem extends Component {

    createCardDetails(year, brand, name, vars = []) {
        let det = year + ' ' + brand + ' ' + name
        if (!vars === []) {
            vars.map(d => det += ` ${d}`)
        }
        return det;
    }

    render() {
        return (
            <div className="card-list-item" key={this.props.id}>
                <p className="card-list-item-details">{this.createCardDetails(this.props.card.year, this.props.card.cardManufacturer, this.props.card.playerName)}</p>
                {/* <p className="card-list-item-name">{this.props.card.playerName}</p> */}
                <p className="card-list-item-team">{this.props.card.teamName}</p>
                
                <p className="card-list-item-cn">Card #: {this.props.card.cardNumber}</p>
            </div>
        )
    }
}

export default CardListItem;