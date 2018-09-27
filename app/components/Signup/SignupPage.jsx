import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import SignUpForm from './SignUpForm';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import './SignUp.scss';
import SignIn from '../SignIn/SignIn';
import BenefitCompareTable from './BenefitCompareTable';
import FooterDetail from '../FooterDetail/FooterDetail';
import UserMigrationConfirmation from '../UserMigrationConfirmation/UserMigrationConfirmation';

/* eslint-disable react/prop-types */
const SignUpPage = ({ location }) => {
    const { pathname } = location;

return (
    <Fragment>
        <div className="bgStyle">
            <Grid>
                <Row>
                    <h1 className="bannerTitle_1"> Discover the one-stop shop that works for you. </h1>

                    <Col lg={6} md={6} sm={12}>
                        <div className="bnrFormOutWrap">
                            <h1 className="signupTitle_1">  Welcome to Oprofessional </h1>
                            <Tabs className="SignTabWrap">
                                <TabList className="SignTabHeadWrap">
                                    <Tab className="SignTabHead">
                                        <span>
                                                Sign Up
                                        </span>
                                    </Tab>
                                    <Tab className="SignTabHead">
                                        <span>
                                                Sign In
                                        </span>
                                    </Tab>
                                    <Tab className="SignTabHead">
                                        <span>
                                                Forgot
                                        </span>
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    { pathname && pathname === '/signup' && <SignUpForm />}
                                    { pathname && pathname === '/user-migration-confirmation' && <UserMigrationConfirmation />}
                                </TabPanel>
                                <TabPanel>
                                    <SignIn />
                                </TabPanel>
                                <TabPanel>
                                    <ForgotPassword />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <BenefitCompareTable/>
                    </Col>
                </Row>
            </Grid>
        </div>
        <FooterDetail />
    </Fragment>
    );
};

export default SignUpPage;
