

import React, { Component } from 'react';
import {
    ControlLabel, Col, Row
} from 'react-bootstrap';
// import { render } from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import floatingLabelField from '../../../FloatingLabel/FloatingLabel';
import DocumentsPopUp from '../../../Model/SuccessPopup';
import Documents from '../DocumentsPopUp/Documents';
import './CompanyProfile.scss';
import DeactivateComAccount from '../DeactivateComAccount/DeactivateComAccount';
import RemoveCompanyFile from '../RemoveCompanyFile/RemoveCompanyFile';
import { validateEmail, normalizeZip } from '../../../../common/Utils';


export const positiveValue = value => (
    value && value <= 0 ? 'Must be positive values' : undefined);

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


export const phoneChange = (length, event) => {
    const elemtName = event.target.name;
    const value = event.target.value.toString();
    const valueLength = value.length;
    if (valueLength >= length) {
        if (elemtName === 'comPhoneText1') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText3')[0].focus();
        }
    }
    if (valueLength === 0) {
        if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText1')[0].focus();
        }
    }
};


export const customPhoneField = ({
    maxLength, placeholder, input, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <input
            {...input}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText"
            onKeyUp={phoneChange.bind(this, maxLength)} />
        {touched && ((error && (<span className="errorPhnTxt">{error}</span>)))}
    </div>
);
/* eslint-disable react/prop-types */
export const FieldFileInput = ({
    input: { onChange }, meta: { touched, error },
}) => (
    <div className="file">
        <input
            type="file"
            id="file-input"
            accept=".jpg, .png, .jpeg, .pdf, .txt"
            onChange={e => onChange(e.target.files[0])} />
        <ControlLabel htmlFor="file-input">Change</ControlLabel>
        {touched && ((error
                && (<span className="error_text">{error}</span>)))}
    </div>
);

export const AddFile = ({
    input: { onChange }, meta: { touched, error },
}) => (
    <div className="file">
        <input
            type="file"
            id="file-input"
            accept=".jpg, .png, .jpeg, .pdf, .txt"
            onChange={e => onChange(e.target.files[0])} />
        <ControlLabel htmlFor="file-input">Add File</ControlLabel>
        {touched && ((error
                && (<span className="error_text">{error}</span>)))}
    </div>
);

const normalizePhone = value => {
    if (!value) {
      return value;
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 3) {
      return onlyNums;
    }
    if (onlyNums.length <= 7) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }

return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
      6,
      10
    )}`;
  };

    class CompanyProfile extends Component {
        constructor(props) {
            super(props);
            this.state = {
                companyName: '',
                property: props,
                companyEmail: '',
                ein: '',
                einLoaded: false,
                isFocused: false,
                saveCh: false,
                isModalAppear: false,
                previewTrue: false,
                deactivateAcc: false,
                RemoveComFileIcon: false
            };
        }

        componentDidMount() {
            axios.get('../../../../data.json')
            .then(res => {
                const companyName1 = res.data && res.data.companyName;
                const companyEmail1 = res.data && res.data.companyEmail;
                const ein1 = res.data && res.data.ein;
                this.setState({
                    companyName: companyName1,
                    companyEmail: companyEmail1,
                    ein: ein1
                });

                // this.setState({ companyEmail });
                // this.setState({ ein });

                this.props.initialize({
                    comName: companyName1,
                    email: companyEmail1,
                    profileEin: ein1,
                });
                // this.props.initialize({ });
            });
        }

        changeButton = () => {
            console.log('comes her');
            this.setState({
                isFocused: true,
                saveCh: false,
            });
        };

        saveChanges = () => {
            this.setState({
                saveCh: true,
            });
        };

        closeModel = () => {
            console.log('clicked');
            this.setState({
                deactivateAcc: false,
                isModalAppear: false,
            });
        }

        closeModelAcc = () => {
            console.log('clicked');
            this.setState({
                deactivateAcc: false,
            });
        }

        closeModelRemoveFile = () => {
            console.log('clicked');
            this.setState({

                RemoveComFileIcon: false,
            });
        }

        handlePdfFunction = () => {
            const { previewTrue } = this.state;
            this.setState({ previewTrue: true });
            if (previewTrue) {
                this.setState({ isModalAppear: true });
            }
        };

        deactivateAccount = () => {
            const { deactivateAcc } = this.state;
            this.setState({ deactivateAcc: true });
        };

        RemoveComFile = () => {
            const { RemoveComFileIcon } = this.state;
            this.setState({ RemoveComFileIcon: true });
        };

        render() {
        const { property, saveCh, isModalAppear, previewTrue, deactivateAcc, RemoveComFileIcon } = this.state;
        const { handleSubmit } = property;

    return (
        <div>
            { isModalAppear
                ? (
                    <DocumentsPopUp
                        show={isModalAppear}
                        documentsdisplay={1}

                        bodycontent={<Documents />}
                        onHide={this.closeModel}
                    />
            ) : null }
            { deactivateAcc
                ? (
                    <DocumentsPopUp
                        show={deactivateAcc}
                        documentsdisplay={1}
                        bodycontent={<DeactivateComAccount />}
                        onHide={this.closeModelAcc}
                    />
            ) : null }
            { RemoveComFileIcon
                ? (
                    <DocumentsPopUp
                        show={RemoveComFileIcon}
                        documentsdisplay={1}
                        bodycontent={<RemoveCompanyFile />}
                        onHide={this.closeModelRemoveFile}
                    />
            ) : null }
            <div className="formOutterWrap">
                <form onSubmit={handleSubmit(this.saveChanges)} className="formListWrap" onFocus={this.changeButton}>
                    <Row>
                        <Col lg={4} sm={4} >
                            <ul>
                                <Row>
                                    <Col lg={12} sm={12}>
                                        <p className="HeaderTxt_ComBu">
                                            <b>
Welcome Company XYZ, manage your company profile here
                                            </b>
                                        </p>
                                    </Col>
                                    <Col lg={1} sm={1} >
                                        <i className="fa fa-building userIcon" />
                                        {' '}
                                    </Col>
                                    <Col lg={4} sm={4} >
                                        <div className="fileuploadbuton">
                                            <Field
                                                name="uploadFile"
                                                component={FieldFileInput}

                                    />
                                        </div>
                                    </Col>

                                </Row>
                                <li>
                                    <Field
                                        name="comName"
                                        type="text"
                                        label="Company Name"
                                        component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                        name="email"
                                        type="text"
                                        label="Company Email"
                                        component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                        name="profilePhone"
                                        type="text"
                                        label="Phone"
                                        component={floatingLabelField}
                                        normalize={normalizePhone}
                                 />
                                </li>
                                <li>
                                    <Field
                                        name="profileAddress"
                                        type="text"
                                        label="Street address"
                                        component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                        name="profileCity"
                                        type="text"
                                        label="City"
                                        component={floatingLabelField}
                                 />
                                </li>
                                <Row>
                                    <Col lg={6} sm={6} >
                                        <li>
                                            <Field
                                                name="profileState"
                                                type="text"
                                                label="State"
                                                component={floatingLabelField}
                                 />
                                        </li>
                                    </Col>
                                    <Col lg={6} sm={6} >
                                        <li>
                                            <Field name="Zip" type="text" component={floatingLabelField} label="Zip" normalize={normalizeZip}/>
                                        </li>
                                    </Col>
                                </Row>


                            </ul>
                        </Col>
                        <Col lg={6} sm={6} className="preferences">
                            <Row>
                                <ul>


                                    <li className="einField">
                                        <Col lg={6} sm={6}>
                                            <Field
                                                name="profileEin"
                                                type="text"
                                                label="EIN"
                                                component={floatingLabelField}
                                                disabled="true"
                                            />
                                        </Col>
                                    </li>
                                    <li className="preferences">
                                        <Col lg={12} sm={12}>
                                            <Row>
                                                <Col lg={6} sm={6}>
                                                    <b>

Documents:

                                                    </b>
                                                   Resale certificate, Business License.
Professional license or permit, State tax exemption,
Membership document
                                                </Col>

                                            </Row>


                                        </Col>
                                    </li>
                                    <li className="preferences ">
                                        <Col lg={6} sm={6} className="reSaleCertification">
                                            <Row>
                                                <Col lg={9} sm={9}>
                                                    <div onClick={this.handlePdfFunction.bind(this)}>
                                                        {previewTrue ? 'Preview' : 'SampleFile.pdf'}
                                                    </div>
                                                </Col>

                                                <Col lg={1} sm={1}>
                                                    <div >
                                                        <i className="fa
                                                         fa-download" />
                                                    </div>
                                                </Col>
                                                <Col lg={2} sm={2}>
                                                    <div onClick={this.RemoveComFile.bind(this)}>
                                                        <i className="fa
                                                         fa-times-circle" />
                                                    </div>
                                                </Col>


                                            </Row>
                                        </Col>
                                    </li>

                                    <li className="preferences">
                                        <Col lg={12} sm={12}>
                                            <Row>
                                                <Col lg={6} sm={6}>
                                                    <div
                                                        className="fileuploadbuton">
                                                        <Field
                                                            name="uploadFile"
                                                            component={AddFile}

                                    />
                                                    </div>
                                                </Col>

                                            </Row>


                                        </Col>
                                    </li>

                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <div className="formBtnWrap">
                        <button
                            className="formBtn saveBtn"
                            type="submit"
                            disabled={!this.state.isFocused}>
                            {saveCh ? 'Changes Saved Successfully!!'
                             : 'Save changes'}
                        </button>
                    </div>
                    <div className="deactivateAccount" onClick={this.deactivateAccount.bind(this)}>
                    deactivate company account
                    </div>
                </form>
            </div>
        </div>
    );
}
    }

export default reduxForm({
    form: 'login',
    validate,
})(CompanyProfile);
