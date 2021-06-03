import React, { Component } from 'react'
import connect from 'react-redux'
import { useTable } from 'react-table'


const CardTable = (props) => {

    const columns = React.useMemo(
        () => [
            {
            Header: 'Player Name',
            accessor: 'playerName', // accessor is the "key" in the data
            },
            {
            Header: 'Card Manufacturer',
            accessor: 'cardManufacturer',
            },
            {
            Header: 'Team Name',
            accessor: 'teamName',
            },
        ],
        []
    )
    const data = React.useMemo(
        () => [
            {
                playerName: `Matt Chapman`,
                cardManufacturer: 'Topps',
                teamName: `Oakland A's`
            },
            {
                playerName: `Matt Olson`,
                cardManufacturer: 'Donruss',
                teamName: `Oakland A's`
            },
            {
                playerName: `Jesus Luzado`,
                cardManufacturer: 'Bowman',
                teamName: `Oakland A's`
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
      
      return (
        // apply the table props
        <table {...getTableProps()}>
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
}

export default CardTable;