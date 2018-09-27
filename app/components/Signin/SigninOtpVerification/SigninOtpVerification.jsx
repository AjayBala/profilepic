
import React from 'react';
import './SignInOtpVerification.scss';
import {
    Row, Col, Button,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Field, reduxForm, formValueSelector,
} from 'redux-form';
import axios from 'axios';
import history from '../../../history';
import { normalizeZip } from '../../../common/Utils';

export const validate = values => {
    const error = {};

    if (!values.comPhoneText1) {
        error.comPhoneText1 = 'Required';
    }
    if (!values.comPhoneText2) {
        error.comPhoneText1 = 'Required';
    }
    if (!values.comPhoneText3) {
        error.comPhoneText1 = 'Required';
    }
    if (!values.comPhoneText4) {
        error.comPhoneText1 = 'Required';
    }
    if (!values.comPhoneText5) {
        error.comPhoneText1 = 'Required';
    }
    if (!values.comPhoneText6) {
        error.comPhoneText1 = 'Required';
    }

    return error;
};

export const phoneChange = (length, event) => {
    const elemtName = event.target.name;
    const value = event.target.value.toString();
    const valueLength = value.length;

    if (valueLength >= length) {
        if (elemtName === 'comPhoneText1') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText3')[0].focus();
        } else if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText4')[0].focus();
        } else if (elemtName === 'comPhoneText4') {
            document.getElementsByName('comPhoneText5')[0].focus();
        } else if (elemtName === 'comPhoneText5') {
            document.getElementsByName('comPhoneText6')[0].focus();
        }
    }
    if (valueLength === 0) {
        if (elemtName === 'comPhoneText6') {
            document.getElementsByName('comPhoneText5')[0].focus();
        } else if (elemtName === 'comPhoneText5') {
            document.getElementsByName('comPhoneText4')[0].focus();
        } else if (elemtName === 'comPhoneText4') {
            document.getElementsByName('comPhoneText3')[0].focus();
        } else if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText1')[0].focus();
        }
    }
};

export const customPhoneField = ({
    maxLength, placeholder, input, type, meta: { touched, error },
}) => (
    <div className="form-group customPhoneField">
        <input
            {...input}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText new"
            onKeyUp={phoneChange.bind(this, maxLength)} />
        {touched && ((error && (<span className="error_text">{error}</span>)))}
    </div>
);

/* eslint-disable react/prop-types */
export const checkBoxField = ({
    placeholder, label, checkOrNot, type, input,
}) => (
    <p>
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            checked={checkOrNot}
            className="checkBoxStyle" />
        {label}
    </p>);

export class SignInOtpVerification extends React.Component {
    constructor() {
        super();
        this.state = {
            otpNumber: '',
            otpError: false,
            rememberMeCheck: true,
        };
    }

    componentWillMount() {
        const { change } = this.props;
        change('rememberMeCheck', 'true');
    }

    componentDidMount() {
        axios.get('../../../../data.json')
        .then(res => {
            const otpNumber = res.data && res.data.otpNumber;
            this.setState({ otpNumber });
        });
    }

    handleChange = event => {
        const { emailId, password } = this.props;
        if (event.target.checked) {
            Cookies.set('LoginUser', { email: emailId, password });
            this.setState({ rememberMeCheck: true });
        } else {
            Cookies.remove('LoginUser');
            this.setState({ rememberMeCheck: false });
        }
    };

    render() {
        const { handleSubmit, phone } = this.props;
        const { otpError } = this.state;

        const handleSubmitForm = values => {
            const { otpNumber } = this.state;
            const otp = parseInt(`${values.comPhoneText1}${values.comPhoneText2}${values.comPhoneText3}${values.comPhoneText4}${values.comPhoneText5}${values.comPhoneText6}`, 10);
            const myotpNumber = otpNumber;
            if (otp === myotpNumber) {
                this.setState({ otpError: false });
                // console.log(values.rememberMeCheck);
                if (values.rememberMeCheck) {
                    const { emailId, password } = this.props;
                    Cookies.set('LoginUser', { email: emailId, password });
                }
                history.push('./professionalHome');
            } else {
                this.setState({ otpError: true });
            }
        };
        const { pathname } = location;
        // const phoneValid = phone;
        // const phoneValidTxt = phoneValid.substr(8, phoneValid.length - 4);
        const { rememberMeCheck } = this.state;

        return (
            <div className={pathname && pathname === '/signup' ? 'formWrap secureVerifyTxt' : 'formWrap secureVerifyTxt loginAuthInsideWrap'}>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Row>
                        <Col sm={12} lg={12}>
                            <h3 className="twoStepTitle">Two-Step Authentication</h3>
                            <p>
                                Enter the confirmation code
                               that was sent to your phone at
                                {' '}
                                {phone}
                            </p>
                        </Col >
                        <Col className="rememberDevice" sm={12} lg={12}>
                            <Field
                                name="rememberMeCheck"
                                type="checkbox"
                                component={checkBoxField}
                                checkOrNot={rememberMeCheck}
                                onChange={this.handleChange}
                                label="Remember this device (not recommended for public or shared devices)."/>
                        </Col >
                    </Row>
                    <Row>
                        <Col md={12} >
                            <ul className="phonenumberBox">
                                <li>
                                    <Field
                                        name="comPhoneText1"
                                        type="text"
                                        normalize={normalizeZip}
                                        style={{ width: '80px' }}
                                        maxLength="1"
                                        component={customPhoneField}/>
                                </li>
                                <li>
                                    <Field
                                        name="comPhoneText2"
                                        type="text"
                                        normalize={normalizeZip}
                                        maxLength="1"
                                        component={customPhoneField}/>
                                </li>
                                <li>
                                    <Field
                                        name="comPhoneText3"
                                        type="text"
                                        normalize={normalizeZip}
                                        maxLength="1"
                                        component={customPhoneField} />
                                </li>
                                <li>
                                    <Field
                                        name="comPhoneText4"
                                        type="text"
                                        normalize={normalizeZip}
                                        maxLength="1"
                                        component={customPhoneField} />
                                </li>
                                <li>
                                    <Field
                                        name="comPhoneText5"
                                        type="text"
                                        normalize={normalizeZip}
                                        maxLength="1"
                                        component={customPhoneField} />
                                </li>
                                <li>
                                    <Field
                                        name="comPhoneText6"
                                        type="text"
                                        normalize={normalizeZip}
                                        maxLength="1"
                                        component={customPhoneField} />
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="invalidOtp">
                        <div m={12} lg={12}>
                            {
                            otpError
                            ? 'Incorrect confirmation code,please try again.'
                            : ''
                            }
                        </div>
                    </Row>
                    <Row>
                        <Col className="otpFirst" sm={12} lg={12}>
                            <div className="form-group formRowWrap">
                                <Button
                                    type="submit"
                                    className="btnBlueStyle createAccBtn">
                                        Confirm
                                </Button>
                            </div>
                        </Col >
                        <Col sm={12} lg={12} className="requestNewCode">
                            If you did not receive a code, wait a few minutes and request a new one.
                        </Col >
                        <Col className="requestCode" sm={12} lg={12}>
                                  Request new code
                        </Col >
                    </Row>
                </form>
            </div>

        );
    }
}

SignInOtpVerification.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    emailId: PropTypes.string,
    password: PropTypes.string,
    phone: PropTypes.string,
};

export const SignInOtpVerificationForm = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(SignInOtpVerification);

const selector = formValueSelector('login');
const mapStateToProps = state => ({
    emailId: selector(state, 'email'),
    phone: selector(state, 'phone'),
});

export default connect(mapStateToProps)(SignInOtpVerificationForm);
