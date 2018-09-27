import React from 'react';
import './SignIn.scss';
import PropTypes from 'prop-types';
import SignInForm from './SignInForm/SignInForm';
import SignInOtpPhoneNumber from './SignInOtpPhoneNumber/SignInOtpPhoneNumber';
import SignInOtpVerification from './SignInOtpVerification/SignInOtpVerification';
import history from '../../history';

const steps = [{ id: 0 }, { id: 1 }, { id: 2 }];
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = ({
            currentStep: steps[0],
        });
    }

  nextPage = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: steps[currentStep.id + 1] });
  }

  previousPage = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: steps[currentStep.id - 1] });
  }

  AuthenticationRequired= values => {
    const isAuthenticationRequired = values.isAuthenticationRequired;
    // const CookiesVerifyed = values.isCookiesVerifyed;
    if (isAuthenticationRequired === true) {
        this.nextPage();
        // console.log(CookiesVerifyed);
    } else {
        history.push('./signin-two-step-authentication');
    }
  }

  render() {
    const { currentStep } = this.state;
    // const { pathname } = location;
    //   console.log(this.props.location);
    let routingTo = '';
    const { location } = this.props;
    // const propsLocation = this.props.location;
    if (location && location.query && location.query.routingTo) {
        routingTo = location.query.routingTo;
        location.query.routingTo = undefined;
    }

return (
    <div>
        {routingTo === 'redirectingToTwoStepAuth'
            ? [this.nextPage()]
            : null
        }
        {currentStep.id === 0
    && (
        <SignInForm
            onSubmit={this.AuthenticationRequired}
        />
    )}
        {currentStep.id === 1
    && (
        <SignInOtpPhoneNumber
            previousPage={this.previousPage}
            onSubmit={this.nextPage} />
    )}
        {currentStep.id === 2
    && (
        <SignInOtpVerification
            previousPage={this.previousPage}
            onSubmit={this.nextPage} />
    )}
    </div>
    );
  }
}

SignIn.propTypes = {
    location: PropTypes.object
};

export default SignIn;
