import React from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import MyProfile from '../AccountDetails/MyProfile/MyProfile';
import CompanyProfile from '../AccountDetails/CompanyProfile/CompanyProfile';
import Activity from '../AccountDetails/Activity/Activity';
import './AccountTabs.scss';


/* eslint-disable react/prop-types */
const AccountTabs = ({ location }) => {
    const { pathname } = location;

return (
    <div className="DashboardRightSideWrap">
        <Tabs className="TabOutterWrap">
            <TabList className="TabHeaderWrap">
                <Tab className="TabHeaderTitle">
                    <span>
                        My Profile
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                        Company Profile
                    </span>
                </Tab>
                <Tab className="TabHeaderTitle">
                    <span>
                        Activity    
                    </span>
                </Tab>
            </TabList>
            <div className="TabContentWrap">
                <TabPanel>
                    { pathname && pathname === '/dashboard/accountabs' && <MyProfile />}
                </TabPanel>
                <TabPanel>
                    <CompanyProfile />
                </TabPanel>
                <TabPanel>
                    <Activity />
                </TabPanel>
            </div>
        </Tabs>
    </div>
    );
};

// SignupPage.propTypes = {
//     location: PropTypes.string.isRequired,
// };

export default AccountTabs;
