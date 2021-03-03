import React, { Component } from 'react'
import { connect } from 'react-redux'

import NewCardForm from './NewCardForm';

export class log extends Component {
    render() {
        return (
            <div>
                <h1>LOG</h1>
                <NewCardForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(log);
