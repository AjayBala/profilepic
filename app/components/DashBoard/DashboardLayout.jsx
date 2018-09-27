import React from 'react';
import PropTypes from 'prop-types';
import {
    Row, Col,
} from 'react-bootstrap';
import DashboardSideMenu from './DashboardSideMenu';
// import './DashboardSideMenu.css';

const DashboardLayout = ({ children }) => (

    <Row>
        <Col md={2}>
            <DashboardSideMenu />
        </Col>
        <Col md={10}>
            {children}
        </Col>
    </Row>

);
DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DashboardLayout;
