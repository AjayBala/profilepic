import React from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import Members from '../UserManagementDetails/Members/Members';
import Admins from '../UserManagementDetails/Admins/Admins';
import Contributors from '../UserManagementDetails/Contributors/Contributors';
import MemberPermission from '../UserManagementDetails/MemberPermission/MemberPermission';
import GroupManagement from '../UserManagementDetails/GroupManagement/GroupManagement';
import './UserManagementTabs.scss';
import AddUserPopup from '../../Model/AddUser';

class userManagementTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ isModalAddUsersAppear: false });
    }

   closeModel = () => {
        this.setState({ isModalAddUsersAppear: false });
    }

    openAddUserPopup = () => {
        this.setState({ isModalAddUsersAppear: true });
    }

render() {
    const { location: { pathname } } = this.props;
    const { isModalAddUsersAppear } = this.state;

return (
    <div className="DashboardRightSideWrap">
        <Tabs className="TabOutterWrap">
            <TabList className="TabHeaderWrap">
                <Tab className="TabHeaderTitle">
                    <span>
                            Members
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                            Admins
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                                Contributors
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                                Groups
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                            Member Permissions
                    </span>
                </Tab>
                <span className="UserManagementAddUserBtn">
                    <input type="button" value="+ Add User" className="AddUserBtn" onClick={this.openAddUserPopup}/>
                </span>

            </TabList>
            <div className="TabContentWrap">
                <TabPanel>
                    { pathname && pathname === '/dashboard/user-management' && <Members />}
                </TabPanel>
                <TabPanel>
                    <Admins />
                </TabPanel>
                <TabPanel>
                    <Contributors />
                </TabPanel>
                <TabPanel>
                    <GroupManagement />
                </TabPanel>
                <TabPanel>
                    <MemberPermission />
                </TabPanel>
            </div>
        </Tabs>
        <div>
            {isModalAddUsersAppear
            && (
            <AddUserPopup
                show={isModalAddUsersAppear}
                onHide={this.closeModel} />
)}
        </div>
    </div>
    );
}
}

// SignupPage.propTypes = {
//     location: PropTypes.string.isRequired,
// };

export default userManagementTabs;
