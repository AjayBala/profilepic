import React from 'react';
import { Router, Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Favicon from 'react-favicon';
// import PropTypes from 'prop-types';
import history from '../../history';
import FavImg from '../../../assets/Images/favicon.ico';
import userManagementTabs from './UserManagementTabs/UserManagementTabs';
import AccountTabs from './AccountTabs/AccountTabs';
import DashboardSideMenu from './DashboardSideMenu';
// import DashboardLayout from './DashboardLayout';
import * as SignInAction from '../../actions/SignInAction';

class DashboardScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: true
        };
    }

    menuClickHandler = () => {
        const { isOpen } = this.state;
        const toggledIsOpen = isOpen ? false : true;
        this.setState({
            isOpen: toggledIsOpen
        });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div className="DashboardOutterWrap" id={isOpen ? 'MenuActived' : ''}>
                <DashboardSideMenu sideMenuTrigger={this.menuClickHandler}/>
                <Favicon url={FavImg} />
                <Router history={history}>
                    <React.Fragment>
                        <Route path="/dashboard/accountabs" component={AccountTabs} />
                        <Route path="/dashboard/user-management" component={userManagementTabs} />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(SignInAction), dispatch),
});

export default connect(null, mapDispatchToProps)(DashboardScreen);
