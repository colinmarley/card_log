import React, { Component } from 'react'
import { connect } from 'react-redux'

class Admin extends Component {

    render() {
        return(
            <div className="admin-page">
                <h1>Admin Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, myProps) => {
    return ({

    })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin)