import React from 'react';
import {
    Row, Col, Container,
} from 'react-bootstrap';
// // import { render } from 'react-dom';
// import { Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './Groups.scss';
// import { connect } from 'react-redux';

export const Groups = () => (
    // <div className="container">
    //     <Row>
    //         <Col lg={4} sm={12} className="GroupProcurementBoxWrap">
    //             <h3 className="AdminWrapHeader"> Procurement </h3>
    //             <div className="CircleUser1" />
    //         </Col>
    //         <Col lg={4} sm={12} className="GroupTechBoxWrap">
    //             <h3 className="ContributorWrapHeader"> Tech Team </h3>
    //             <div className="CircleUser1" />
    //         </Col>
    //         <Col lg={4} sm={12} className="GroupMaintenanceBoxWrap">
    //             <h3 className="ContributorWrapHeader"> Maintenance </h3>
    //             <div className="CircleUser1" />
    //         </Col>
    //         <Col lg={4} sm={12} className="GroupAddBoxWrap">
    //             <p className="GroupAddTxtWrap">Add Group </p>
    //         </Col>
    //     </Row>
    // </div>
    <div>
        <Container>
            <Row>
                <Col xs={3}>
                    Add Group
                </Col>
            </Row>
        </Container>
    </div>
);

export default Groups;
