import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import './GovtBusinessInfo.scss';
import { connect } from 'react-redux';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';
import { validateEmail, required } from '../../../common/Utils';
import MultiSelectDropdown from '../../MultiSelectDropdown/MultiSelectDropdown';
import FileUpload from '../../FileUpload/FileUpload';

export const validate = values => {
    const error = {};

    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

return error;
};


export const renderField = ({
    placeholder, input, label, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <ControlLabel className="labelTxt">{label}</ControlLabel>
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText" />
        {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
);

export class govtBusinessInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            BusinessCategoryHasValue: false,
            BusinessCategoryHasUpload: false,
            BusinessOtherCategory: false,
        };
    }

    BusinessCategoryOnChange = (e, { value }) => {
        // e.persist();
        const { change } = this.props;
        if (value === undefined || value.length === 0) {
            this.setState({
                BusinessCategoryHasValue: false,
            });
        } else {
            change('categorys', value);
            this.setState({
                BusinessCategoryHasValue: true,
            });
        }
        if (value.indexOf('Contractor') > -1 || value.indexOf('Real estate agent') > -1) {
            this.setState({
                BusinessCategoryHasUpload: true,
            });
        } else {
            this.setState({
                BusinessCategoryHasUpload: false,
            });
        }
        if (value.indexOf('Other') > -1) {
            this.setState({
                BusinessOtherCategory: true,
            });
        } else {
            this.setState({
                BusinessOtherCategory: false,
            });
        }
    };

    render() {
        const { handleSubmit, submitting, categorysList } = this.props;
        const { BusinessCategoryHasValue, BusinessCategoryHasUpload, BusinessOtherCategory } = this.state;

        return (
            <div className="formOutterWrap">
                <Row>
                    <Col lg={12} sm={12}>
                        <p className="formTextTitle">Tell us about your organization </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12} >
                        <form
                            onSubmit={handleSubmit}
                            className="Com-form-style">
                            <ul className="formListWrap">
                                <li>
                                    <Field
                                        name="comName"
                                        type="text"
                                        label="Your Full Name*"
                                        component={floatingLabelField}
                                        validate={required} />
                                </li>
                                <li>
                                    <Field
                                        name="email"
                                        type="text"
                                        label="Email*"
                                        component={floatingLabelField}
                                        validate={required} />
                                </li>
                                <li>
                                    <Field
                                        name="categorys"
                                        className="categorys"
                                        component={MultiSelectDropdown}
                                        optionList={categorysList}
                                        emptyOrNot={BusinessCategoryHasValue}
                                        onChangeMethod={this.BusinessCategoryOnChange}
                                        label="Organization Category (optional)"/>
                                </li>
                                {BusinessOtherCategory
                                        ? (
                                            <li>
                                                <Field
                                                    name="OtherCategory"
                                                    type="text"
                                                    label="Other Category*"
                                                    component={floatingLabelField}
                                                    validate={required} />
                                            </li>
                                            ) : ''}
                                <li>
                                    <Field
                                        name="agencyName"
                                        type="text"
                                        label="Agency Name"
                                        component={floatingLabelField}/>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <ControlLabel>
                                            <input type="checkbox"/>
                                            I am a non-profit 501(c) organization
                                        </ControlLabel>
                                    </div>
                                </li>
                            </ul>

                            {BusinessCategoryHasUpload ? <FileUpload /> : null}
                            <div className="formBtnWrap">
                                <button
                                    className="formBtn"
                                    type="submit"
                                    disabled={submitting}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

govtBusinessInfo.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    change: PropTypes.func,
    categorysList: PropTypes.array
};

const GovtBusinessPage = reduxForm({
    form: 'Govt', // a unique identifier for this form
    validate,
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(govtBusinessInfo);


const selector = formValueSelector('Govt');

const mapStateToProps = state => ({
    CategoryValue: selector(state, 'categorys'),
    initialValues:
     { email: state.signUp.SignUpUser ? state.signUp.SignUpUser.emailId : '' },
});

export default connect(mapStateToProps)(GovtBusinessPage);
