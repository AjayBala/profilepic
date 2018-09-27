import React, { Component } from 'react';
import {
    ControlLabel, FormGroup, Button,
} from 'react-bootstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import './SignUp.scss';
import Recaptcha from 'react-recaptcha';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as SignUpAction from '../../actions/SignUpAction';
import floatingLabelField from '../FloatingLabel/FloatingLabel';
import { validateEmail, validatePassword, getEmailDomain } from '../../common/Utils';

export const validate = values => {
    const error = {};
    let length = document.getElementById('length');
    let capital = document.getElementById('capital');
    let special = document.getElementById('special');

    if (length == null) {
        values.password = '';
    }

    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

    const errorObj = validatePassword(values, length, capital, special);
    if (errorObj.error) {
        error.password = errorObj.error;
        length = errorObj.length;
        capital = errorObj.capital;
        special = errorObj.special;
    }

   return error;
};


export class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            recaptchaVerified: false,
            hasGovEmail: false,
            isGovEmail: false,
        };
        this.qualifiedGovId = ['.gov', '.mil', '.state', '.edu'];
    }

    recaptchaVerifyCallback = () => {
        this.setState({
            recaptchaVerified: true,
        });
    }

    checkHasGovEmail = value => {
        const { change, emailId } = this.props;
        let isGovEmail = false;
        if (value.target.checked) {
            const getDomain = getEmailDomain(emailId);
            if (!this.qualifiedGovId.includes(getDomain)) {
                change('email', '');
                isGovEmail = true;
            }
        } else if (!value.target.checked) {
            isGovEmail = false;
        }
        this.setState({
            hasGovEmail: isGovEmail,
            isGovEmail: value.target.checked
        });
    };

    isEmailHasGovermentEmail = e => {
        const { change, checkboxState, emailId } = this.props;
        const getDomain = getEmailDomain(emailId);

        if (getDomain && !this.qualifiedGovId.includes(getDomain) && checkboxState) {
            change('email', '');
            e.preventDefault();
            this.setState({
                hasGovEmail: true,
            });
        }
    }

    recaptchaOnLoadCallback = () => '';

    render() {
        const { handleSubmit, SignUpError } = this.props;
        console.log('SignUpError', SignUpError);
        const { recaptchaVerified, hasGovEmail, isGovEmail } = this.state;
        const passwordCriteriaBox = document.getElementById('passwordCriteriaBox');

        const signupFormOnSubmit = values => {
            const { actions } = this.props;
            console.log('actions', actions);
            actions.signUpRequest(values);
        };

        return (

            <div className="formWrap signupFormWrap">
                <form onSubmit={handleSubmit(signupFormOnSubmit)}>
                    <Field
                        name="emailId"
                        type="text"
                        component={floatingLabelField}
                        label={hasGovEmail
                            ? 'Enter government email ID' : 'Email'}
                        id="emailId"
                        onBlur={this.isEmailHasGovermentEmail}/>
                    <Field
                        name="password"
                        type="password"
                        component={floatingLabelField}
                        label="Create Password"
                        id="pswd"
                        onFocus={() => {
                            passwordCriteriaBox.style.display = 'block';
                        }}/>
                    <div id="passwordCriteriaBox">
                        <p id="length">
                            ✔ 8 characters minimum
                        </p>
                        <p id="capital">
                            ✔ At least 1 capital letter
                        </p>
                        <p id="special">
                            ✔ At least 1 special character (!,*,$,@)
                        </p>
                    </div>
                    <FormGroup className="formRowWrap">
                        <ControlLabel className="label-styles">
                            Select only if applicable to your business
                        </ControlLabel>
                        <Field
                            name="checkbox"
                            type="checkbox"
                            checked={isGovEmail}
                            component="input"
                            className="checkbox-overrides"
                            onChange={this.checkHasGovEmail} />
                        <span className="checkbox-labelStyle">
                            I work for a government entity and I
                            have a government email
                        </span>
                    </FormGroup>
                    <FormGroup className="formRowWrap">
                        <Recaptcha
                            className="rca-styles"
                            sitekey="6LfKaWoUAAAAAJDt-nKlTsZ92TkprXJ2xqgZ-YND"
                            render="explicit"
                            verifyCallback={this.recaptchaVerifyCallback}
                            onloadCallback={this.recaptchaOnLoadCallback}
                        />
                    </FormGroup>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="btnBlueStyle createAccBtn"
                            disabled={!recaptchaVerified}>
                        Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    emailId: PropTypes.string,
    checkboxState: PropTypes.bool,
    actions: PropTypes.objectOf(PropTypes.func),
    SignUpError: PropTypes.string,
};


const SignUpReduxForm = reduxForm({
    form: 'SignUpForm',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(SignUpForm);

const selector = formValueSelector('SignUpForm');
const mapStateToProps = state => ({
    emailId: selector(state, 'email'),
    checkboxState: selector(state, 'checkbox'),
    SignUpError: state.signUp.error ? state.signUp.error : ''
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(SignUpAction), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpReduxForm);
