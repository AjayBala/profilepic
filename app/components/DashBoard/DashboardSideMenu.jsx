import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Sidebar from 'react-sidebar';
import DashboardSideMenuList from './DashboardSideMenuList';
import * as SignInAction from '../../actions/SignInAction';
import './DashboardSideMenu.scss';


class DashboardSideMenu extends React.Component {
    render() {
        const { sideMenuTrigger } = this.props;

      return (
          <div className="LeftSideMenuWrap">
              <div className="LeftSideProfileWrap">
                  <div className="ProfileTitleWrap">
                      <div className="profilePhoto">
                          <i className="fa fa-user" aria-hidden="true" />
                      </div>
                      <div className="ProfileNameWrap">
                          <h3 className="ProfileUserNameTxt"> John</h3>
                          <h3 className="ProfileCompanyNameTxt"> Company XYZ</h3>
                      </div>
                      <span className="MenuBurgerIcon active" onClick={sideMenuTrigger}>
                          <p />
                          <p />
                          <p />
                      </span>
                  </div>
              </div>
              <DashboardSideMenuList />
          </div>
      );
    }
  }

DashboardSideMenu.propTypes = {
    sideMenuTrigger: PropTypes.func,
};

  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(Object.assign(SignInAction), dispatch),
  });

export default connect(null, mapDispatchToProps)(DashboardSideMenu);
