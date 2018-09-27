
import React from 'react';
import {
    Button, Row, Col,
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './DeactivateComAccount.scss';
import history from '../../../../history';


class DeactivateComAccount extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        const handleSubmitForm = () => {
            history.push('./Email Concierge');
        };

return (
    <div className="deleteUserWrap signupFormWrap">
        <h1 className="deleteUserHeaderWrap">
        Please Contact Concierge to Deactivate your Company Account.
        </h1>
        <p className="deleteUserMidContentWrap"> In order to deactivate your company accout you must contact our concierge service. You can reach our concierge office via email or phone call. You can reach the concierge team here: </p>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Row>
                <Col lg={12} sm={12}>
                    <div className="deactivatePhone deactivateCompanyAcc">
                1-800-123-4567
                    </div>
                </Col>
                <Col lg={12} sm={12}>
                    <div className="deactivatePhone deactivateCompanyAcc"> or </div>
                </Col>
                <Col lg={12} sm={12}>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="deactivateComButtonWrap">
                      Email Concierge
                        </Button>
                    </div>
                </Col>
            </Row>
        </form>
    </div>
            );
        }
    }

    DeactivateComAccount.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'DeleteUserPopUpDetails',
})(DeactivateComAccount);
