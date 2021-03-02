import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarTab from './views/NavbarTab'
import { setTabActiveFlag } from '../actions/myActions'

import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return({
        tabs: state.navbar.tabs,
        test: state.navbar.test,
    });
}

const mapDispatchToProps = dispatch => ({
    clickNavbarTab: tab => dispatch(setTabActiveFlag(tab)),
});

class Navbar extends Component {

    onTabSelected(tab) {

        let currentTab = {};
        for (let i = 0; i < this.props.tabs.length; i ++) {
            if (this.props.tabs[i].isActive) {
                currentTab = this.props.tabs[i];
            }
        }
        currentTab.isActive = !currentTab.isActive;
        tab.isActive = !tab.isActive;
        this.props.clickNavbarTab(currentTab);
        this.props.clickNavbarTab(tab);

    }

    render() {
        return (
            <div className="navbar-root">
                
                {(this.props.tabs) ? 
                    this.props.tabs.map(
                        (tab) => (
                                <NavbarTab
                                    tab={tab}
                                    key={tab.title}
                                    onClick={(tab) => this.onTabSelected(tab)}
                                ></NavbarTab>
                            )
                    ) :
                    <p>Loading...</p>
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
