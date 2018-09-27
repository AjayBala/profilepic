import React from 'react';
import {
    Row, Col,
} from 'react-bootstrap';
// // import { render } from 'react-dom';
// import { Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './MemberPermission.scss';
// import { connect } from 'react-redux';

export const MemberPermission = () => (
    <div className="container">
        <Row>
            <Col lg={6} sm={12} className="AdminBoxWrap">
                <h3 className="AdminWrapHeader"> Admin </h3>
                <p>Can invite external users to the company profile and groups </p>
                <hr/>
                <p className="AdminPurchaseTxtWrap"> Make purchases </p>
                <i className="fa fa-toggle-on" aria-hidden="true" />
            </Col>
            <Col lg={6} sm={12} className="ContributorBoxWrap">
                <h3 className="ContributorWrapHeader"> Contributor </h3>
                <p className="AdminPurchaseTxtWrap">Can invite external users to the company profile and groups </p>
                <i className="fa fa-toggle-on" aria-hidden="true" />
                <hr/>
                <p className="AdminPurchaseTxtWrap"> Make purchases </p>
                <i className="fa fa fa-toggle-off" aria-hidden="true" />
            </Col>
        </Row>
    </div>
);

export default MemberPermission;
