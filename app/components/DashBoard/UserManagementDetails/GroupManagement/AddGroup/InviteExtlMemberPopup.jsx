import React, { Component, Fragment } from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import './InviteExtlMemberPopup.scss';
import { Field } from 'redux-form';
import PendingInvitation from './PendingInvitaionPopup';

class InviteExtMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExternalMemberAdded: false
        };
    }

    redirect = () => {
        this.setState({
            isExternalMemberAdded: true
        });
    }

    render() {
    const { onHide } = this.props;
    const { isExternalMemberAdded } = this.state;

        return (
            <Fragment>
                {isExternalMemberAdded && <PendingInvitation show={isExternalMemberAdded} onHide={() => { this.setState({ isExternalMemberAdded: false }); }} />}
                {!isExternalMemberAdded && (
                <Modal {...this.props} className="customPopupWrap" >
                    <Modal.Header className="header-styles">
                        <Modal.Title id="contained-modal-title-sm">
                            Invite to group
                            <button onClick={onHide} type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Modal.Title>
                        <form>
                            <Field
                                name="externalMember"
                                type="text"
                                component="input"
                                value="test"
                                // component={floatingLabelField}
                                id="externalMember"
                                placeholder="Invite company member"/>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Contributor</option>
                                    <option value="other">Admin</option>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Modal.Header>
                    <Modal.Body className="modal-body-styles">
                        noname@gmail.com is not a member of your account. Would  you like to add this external user to account?
                    </Modal.Body>
                    <Modal.Footer className="modal-footer-styles">
                        <Button className="modal-button-styles" onClick={onHide}>No</Button>
                        <Button className="modal-button-styles" onClick={this.redirect}>Yes</Button>
                    </Modal.Footer>
                </Modal>)}
            </Fragment>
        );
    }
}

export default InviteExtMember;
