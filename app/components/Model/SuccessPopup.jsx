import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import success from '../../../assets/Images/success_modal.png';
import './SuccessPopup.scss';
import close from '../../../assets/Images/close_icon.png';

const ModalPopup = props => {
    const {
        footercontent, bodycontent, onHide, successignup, resetpassword, deleteuser, documentsdisplay
    } = props;

return (
    <Modal {...props} className="popUpContentStyles">
        {bodycontent && (
        <Modal.Body className="popUpBodyStyles">
            {successignup && (
                <div className="successTextStyles successBox">
                    <img className="successImgStyle" src={success} alt="success"/>
                    <div className="temp">{bodycontent}</div>
                </div>
            )}
            {resetpassword && (
            <div className="successTextStyles passwordBox">
                <div className="temp">{bodycontent}</div>
            </div>
                    )}
            {deleteuser && (
            <div className="successTextStyles successBox">
                <img className="closeImgStyle" src={close} alt="close"/>
                <div className="temp">{bodycontent}</div>
            </div>
                    )}

            {documentsdisplay && (
            <div className="successTextStyles documentsBox">
                <div className="temp">{bodycontent}</div>
            </div>
            )}

        </Modal.Body>
            )}
        {footercontent && (
        <Modal.Footer>
            <Button onClick={onHide}>Cancel</Button>
            <Button>Confirm & Proceed</Button>
        </Modal.Footer>
            ) }
    </Modal>
    );
};

export default ModalPopup;
