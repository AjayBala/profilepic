import React from 'react';
import {
    ControlLabel, Row, Col,
} from 'react-bootstrap';
import { Field } from 'redux-form';
import { required } from '../../common/Utils';
import './FileUpload.scss';

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
        <ControlLabel htmlFor="file-input">Upload</ControlLabel>
        {touched && ((error
                && (<span className="error_text">{error}</span>)))}
    </div>
);

export const FileUpload = () => (
    <div className="fileuploadwrap" id="fileupload">
        <Row>
            <Col lg={12} sm={12}>
                <div className="fileupload" >
                    <p >
                        Please upload any supporting documents.
                        Please note verification of these documents can take up to 24 hours.
                        <br/>
                        <br/>
                        <b>Supported documents include:</b>
                        Resale certificate, Business License,
                        Professional license or permit, State tax exemption, Membership document
                    </p>
                </div>
            </Col>
            <Col lg={12} sm={12}>
                <div className="fileuploadbuton">
                    <Field
                        name="uploadFile"
                        component={FieldFileInput}
                        validate={required}
                    />
                </div>
            </Col>
        </Row>
    </div>
);

export default FileUpload;
