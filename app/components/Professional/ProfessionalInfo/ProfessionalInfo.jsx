import React, { Component } from 'react';
import {
    ControlLabel, Col,
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './ProfessionalInfo.scss';
import { connect } from 'react-redux';
// import { Dropdown } from 'semantic-ui-react';
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

export class ProfessionalInfo extends Component {
    constructor() {
        super();
        this.state = {
            BusinessCategoryHasValue: false,
            BusinessCategoryHasUpload: false,
            BusinessOtherCategory: false,
        };
    }


    BusinessCategoryOnChange = (e, { value }) => {
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
        const {
            handleSubmit, submitting, businessCategorys
        } = this.props;

        // const professionalFormOnSubmit = values => {
        //     console.log(values);
        // };

        console.log('businessCategorys', businessCategorys);
        const { BusinessCategoryHasValue, BusinessCategoryHasUpload, BusinessOtherCategory } = this.state;

        return (
            <div>
                <div className="HeaderTxtWrap">
                    <Col lg={12} sm={12}>
                        <p className="HeaderTxt_ComBusiness">
                            <b>
                                Select the option that best describes your business
                            </b>
                        </p>
                    </Col>
                </div>
                <div className="formOutterWrap">
                    <form onSubmit={handleSubmit} className="Com-form-style">
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
                                    name="comBusinessName"
                                    type="text"
                                    label="Name of Business*"
                                    component={floatingLabelField}
                                    validate={required} />
                            </li>
                            <li>
                                <Field
                                    name="categorys"
                                    className="categorys"
                                    validate={required}
                                    component={MultiSelectDropdown}
                                    optionList={businessCategorys}
                                    emptyOrNot={BusinessCategoryHasValue}
                                    onChangeMethod={this.BusinessCategoryOnChange}
                                    label="Business Category*"/>
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
                                    name="comCity"
                                    type="text"
                                    label="EIN*"
                                    component={floatingLabelField}
                                    validate={required} />
                            </li>
                            <li>
                                <div className="form-group">
                                    <ControlLabel>
                                        <input type="checkbox"/>
                                        I am a non-profit 501(c) organization
                                    </ControlLabel>
                                </div>
                                <div className="form-group">
                                    <ControlLabel>
                                        <input type="checkbox"/>
                                    I am a reseller
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
                </div>
            </div>
        );
    }
}

ProfessionalInfo.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    change: PropTypes.func,
    businessCategorys: PropTypes.array,
};

const ProfessionalInfoForm = reduxForm({
    form: 'ProfessionalForm', // a unique identifier for this form
    destroyOnUnmount: false,
    validate,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true,
})(ProfessionalInfo);

const mapStateToProps = state => ({
    initialValues:
     { email: state.signUp.SignUpUser ? state.signUp.SignUpUser.emailId : '' },
});

export default connect(mapStateToProps)(ProfessionalInfoForm);
