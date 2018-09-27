import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import '../ForgotPassword.scss';
// import history from '../../../history';
import '../../SignIn/SignIn.scss';
import PropTypes from 'prop-types';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';
import { validateEmail } from '../../../common/Utils';

export const validate = values => {
    const error = {};

    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

    return error;
};


export const PasswordResetLinkSend = props => {
    const { handleSubmit } = props;

return (

    <div className="forgotPswdBox">
        <h1 className="title_h1 SendEmail">
                Forgot your password?
        </h1>
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="text"
                component={floatingLabelField}
                label="Email" />

            <div className="form-group formRowWrap">
                <button
                    type="submit"
                    className="btnBlueStyle createAccBtn">
                    Send Reset Link
                </button>
            </div>

        </form>
    </div>
    );
};

PasswordResetLinkSend.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

const PasswordResetLinkSendForm = reduxForm({
    form: 'PasswordResetLinkSend',
    validate,
})(PasswordResetLinkSend);

export const mapStateToProps = state => ({
    enableReinitialize: true,
    initialValues: {
        email: state.signIn.emailId,
    },
});

export default connect(mapStateToProps)(PasswordResetLinkSendForm);
