import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormGroup, FormControl } from 'react-bootstrap';
import './InviteExtlMemberPopup.scss';

class PendingInvitation extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { onHide } = this.props;

        return (
            <Modal {...this.props} className="customPopupWrap" >
                <Modal.Header className="modal-header-styles">
                    <Modal.Title id="contained-modal-title-sm">
                        Pending Invitation
                        <button onClick={onHide} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-styles">
                    <p>
                        You sent noname@gmail.com an invitation to join your company group. We are waiting for noname@gmail.com
                        to accept your invitation.
                    </p>
                    <div>
                        Would like to send another invitation to this user?
                        <Button className="modal-button-styles">No Thanks</Button>
                        <Button className="modal-button-styles">Yes</Button>
                    </div>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" placeholder="Send invitation to a different email"/>
                            <InputGroup.Button>
                                <Button>send</Button>
                            </InputGroup.Button>
                        </InputGroup>
                        <p>remove invitation to noname@gmail.com</p>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer className="modal-footer-styles">
                    Current status: Waiting on response
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PendingInvitation;
