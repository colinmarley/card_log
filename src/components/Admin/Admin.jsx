import React, { Component } from 'react';
import { connect } from 'react-redux';
import XLSX from 'xlsx';


import './Admin.css';
import '../CardList/CardListStyles.css'

function PreviewListItem (year, man, card, i) {
    return (
        <div className="card-list-item" key={i}>
            <img class="card-list-item-image" src={null} alt="No Photo" />
            <div class="card-list-item-content">
                <p className="card-list-item-details">{`${year} ${man.split('_').join(' ')} ${card.Player}`}</p>
                {/* <p className="card-list-item-name">{this.props.card.playerName}</p> */}
                <p className="card-list-item-team">{card.Team}</p>
                
                <p className="card-list-item-cn">Card #: {card.Number}</p>
                <p>{`Print Run: ${card.PrintRun}`}</p>
                <p>{`Card Set: ${card.CardSet}`}</p>
            </div>
        </div>
    )
}


class Admin extends Component {
    state = {
        cards: [],
        year: null,
        man: null
    }

    parseFile(e) {
        let file = e.target.files[0];
        console.log(file);
        let year = parseInt(document.getElementById("card-year").value)
        let manufacturer = document.getElementById("manufacturer-name").value.split(' ').join('_')
        if (typeof (FileReader) === 'undefined') {
            return console.log("This browser does not support HTML5.")
        }
        console.log(`${year} ${manufacturer}`)
        this.setState({
            year,
            man: manufacturer
        })
        const reader = new FileReader();
        if (reader.readAsBinaryString) {
            reader.onload = (e) => {
                this.processExcel(reader.result);
            };
            reader.readAsBinaryString(file);
        }
    }

    processExcel(data) {
        const checklist = XLSX.read(data, {type: 'binary'});
        const firstSheet = checklist.SheetNames[0];
        const excelRows = XLSX.utils.sheet_to_row_object_array(checklist.Sheets[firstSheet]);
    
        console.log(excelRows);
        this.setState({
            cards: excelRows
        })
    }

    render() {
        return (
            <div className="admin-container">
                <h1>ADMIN PAGE</h1>
                <label htmlFor="card-year">Year</label>
                <input type="text" name="card-year" id="card-year"/>
                <label htmlFor="manufacturer-name">Manufacturer</label>
                <input type="text" name="manufacturer-name" id="manufacturer-name"/>
                <br />
                <input type="file" id="checklist-input" onChange={e => this.parseFile(e)} accept={".xls,.xlsx"}/>

                <br />
                <ul className="card-list">
                    {this.state.cards && this.state.cards.map((card, i) => 
                        {return(PreviewListItem(this.state.year, this.state.man, card, i))}
                    )}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return (
        {

        }
    );
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);