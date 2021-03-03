import React, { Component } from 'react'
import { connect } from 'react-redux'

import { useTable } from 'react-table';
import firebase from 'firebase';


function TestTable() {

    let db = firebase.firestore();

     let cards = []
    db.collection("cards").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id}`);
            let card = doc.data()
            cards.push(card)
            
        });
    });
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'Year',
            accessor: 'year', // accessor is the "key" in the data
        },
        {
            Header: 'Card Manufacturer',
            accessor: 'cardManufacturer',
        },
        {
            Header: 'Player Name',
            accessor: 'playerName',
        },
        {
            Header: 'Notes',
            accessor: 'notes',
        },
        {
            Header: 'Team Name',
            accessor: 'teamName',
        },
        {
            Header: 'Card Number',
            accessor: 'cardNumber',
        },
        {
            Header: 'Sport',
            accessor: 'sport',
        },
        ],
        []
    )
    console.log("DATA")
    console.log(cards)
    console.log("Columns")
    console.log(columns)

    let order = []

    let headerRows = columns.map((column) => {
        return <th key={`table-head-${column.accessor}`}>
            {column.Header}
        </th>
    })

    let dataRows = cards.map((d, i) => {
        console.log(d)
        return <tr key={`row-${i}`}>
            <td key={`table-data-${i}-year`}>{d.year}</td>
            <td key={`table-data-${i}-cman`}>{d.cardManufacturer}</td>
            <td key={`table-data-${i}-pname`}>{d.playerName}</td>
            <td key={`table-data-${i}-notes`}>{d.notes}</td>
            <td key={`table-data-${i}-tname`}>{d.teamName}</td>
            <td key={`table-data-${i}-cnum`}>{d.cardNumber}</td>
            <td key={`table-data-${i}-sport`}>{d.sport}</td>
        </tr>
    })
    console.log("DATA ROWS")
    console.log(dataRows)
    return (
        <div>

            <table >
                <thead>
                    <tr>
                        {headerRows}
                    </tr>
                </thead>
                <tbody>
                    {dataRows}
                </tbody>
            </table>
            
        </div>
    )
}


export class LogDisplay extends Component {
    
    
    
    render() {
        return(
            <div>
                <TestTable/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(LogDisplay)
