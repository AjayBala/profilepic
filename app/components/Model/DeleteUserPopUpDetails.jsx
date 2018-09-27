import React from 'react';
import {
    Button, Row, Col, Modal
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './DeleteUserPopUp.scss';


class DeleteUserPopUpDetails extends React.Component {

    render() {
        const { handleSubmit, onHide } = this.props;
        const handleSubmitForm = () => {
        };

return (
    <Modal {...this.props} id="newUserPopUp">
        <Modal.Body>
            <div className="deleteUserWrap signupFormWrap">
                <h1 className="deleteUserHeaderWrap">
          Are you sure you want to remove this user?
                </h1>
                <p className="deleteUserMidContentWrap"> You are removing this user from your company account. This user will no longer be a member of Oprofessional and will not have access to the exclusive deals and offers Oprofessional has to offer. </p>

                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="form-group formRowWrap">
                                <Button
                                    type="submit"
                                    onClick={() => onHide()}
                                    className="deleteUserButtonWrap">
                        Cancel
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="form-group formRowWrap">
                                <Button
                                    type="submit"
                                    className="deleteUserButtonWrap">
                        Confirm & Proceed
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        </Modal.Body>
    </Modal>
            );
        }
    }

DeleteUserPopUpDetails.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onHide: PropTypes.func
};

export default reduxForm({
    form: 'DeleteUserPopUpDetails',
})(DeleteUserPopUpDetails);
