import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    NB_TAB_ROOT: "navbar-tab-root",
    NB_TAB_ROOT_SELECTED: "navbar-tab-root tab-selected",
}

class NavbarTab extends Component {


    render() {

        const rootClassName = (this.props.tab.isActive) ? STYLES.NB_TAB_ROOT_SELECTED : STYLES.NB_TAB_ROOT;

        return (
            <div
                className={rootClassName}
                id={`navbar-tab-${this.props.tab.title}`}
                onClick={() => this.props.onClick(this.props.tab)}
                key={this.props.key}
            >
                <Link to={`/${this.props.tab.title}`}>
                    <div className="navbar-tab-img-root">

                    </div>
                    <p className="navbar-tab-title">{this.props.tab.title.toUpperCase()}</p>
                </Link>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarTab);