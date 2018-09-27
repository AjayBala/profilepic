
import React from 'react';
import {
    Button, Row, Col,
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './RemoveCompanyFile.scss';
import history from '../../../../history';


class RemoveCompanyFile extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        const handleSubmitForm = () => {
            history.push('./Email Concierge');
        };

return (
    <div className="deleteUserWrap signupFormWrap">
        <h1 className="deleteUserHeaderWrap">
        Removing This File Will Deactivate Your Company Account.
        </h1>
        <p className="deleteUserMidContentWrap"> If your document has expired and you need to upload a new one, please add the updated file before removing the existing file. </p>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Row>
                <Col lg={6} sm={6}>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="deleteUserButtonWrap">
                     Cancel
                        </Button>
                    </div>
                </Col>
                <Col lg={6} sm={6}>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="deleteUserButtonWrap">
                      Remove This File
                        </Button>
                    </div>
                    {/* <div className="forgotTxt">
                                    Already a member of Overstock Professional?
                                    <a onClick={() => history.push('/')}>
                                    Sign In
                                    </a>
                                </div> */}
                </Col>
            </Row>
        </form>
    </div>
            );
        }
    }

    RemoveCompanyFile.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'DeleteUserPopUpDetails',
})(RemoveCompanyFile);
