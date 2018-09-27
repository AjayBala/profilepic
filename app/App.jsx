import React from 'react';
import { Router, Route } from 'react-router';
import Favicon from 'react-favicon';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import history from './history';
import BtoCMigrationFrom from './components/BtoCMigrationFrom/BtoCMigrationFrom';
import SignUpPage from './components/SignUp/SignUpPage';
import HomePage from './components/HomePage/HomePage';
import ForgotPasswordEmailTemplate from './components/ForgotPassword/ForgotPasswordEmailTemplate/ForgotPasswordEmailTemplate';
import MainLayout from './components/MainLayout';
import FavImg from '../assets/Images/favicon.ico';
import Professional from './components/Professional/Professional';
import Govt from './components/Govt/Govt';
import ForgotPasswordPopUp from './components/ForgotPassword/ForgotPasswordPopUp/ForgotPasswordPopUp';
import SignInTwoStepAuthentication from './components/SignIn/SignInTwoStepAuthentication/SignInTwoStepAuthentication';
import SignIn from './components/SignIn/SignIn';
import { createAccountPopContent, loginPopContent } from './common/Constants';
import DashboardScreen from './components/DashBoard/DashboardScreen';
// import userManagementTabs from './components/DashBoard/UserManagementTabs/userManagementTabs';

const App = () => (
    <MainLayout>
        <Favicon url={FavImg} />
        <section id="mainWrap">
            <Router history={history}>
                <React.Fragment>
                    <PrivateRoute exact path="/" component={<h1>Haii this is home Page</h1>} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/btoc-migration-from" component={BtoCMigrationFrom}/>
                    <Route path="/professional" component={Professional}/>
                    <Route path="/gov" component={Govt} />
                    <Route path="/user-migration-confirmation" component={SignUpPage}/>
                    <Route path="/home" render={routeProps => <HomePage {...routeProps} bodycontent={createAccountPopContent} />} />
                    <Route path="/email-template" component={ForgotPasswordEmailTemplate} />
                    <Route path="/reset-new-password" component={ForgotPasswordPopUp} />
                    <Route path="/signin-two-way-auth" component={ForgotPasswordPopUp} />
                    <Route path="/professionalHome" render={routeProps => <HomePage {...routeProps} bodycontent={loginPopContent} />} />
                    <Route path="/signin-two-step-authentication" component={SignInTwoStepAuthentication} />
                    <Route path="/dashboard" component={DashboardScreen} />
                </React.Fragment>
            </Router>
        </section>
    </MainLayout>
);

export default App;
