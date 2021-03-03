import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogDisplay from './LogDisplay'

export class List extends Component {
    render() {
        return (
            <div>
                <h1>LIST</h1>
                <LogDisplay/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
