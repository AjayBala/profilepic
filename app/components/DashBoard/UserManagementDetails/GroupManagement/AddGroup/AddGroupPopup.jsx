import React, { Component, Fragment } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import './AddGroupPopup.scss';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _filter from 'lodash/filter';
import PropTypes from 'prop-types';
import _forEach from 'lodash/forEach';
// import floatingLabelField from '../../../../FloatingLabel/FloatingLabel';
import { MembersList } from '../../../../../common/Constants';
import * as GroupManagementAction from '../../../../../actions/GroupManagementAction';
import InviteExtMember from './InviteExtlMemberPopup';

class AddGroupPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMembersList: false,
            isExpandedList: true,
            membersList: MembersList,
            currentMembersList: [],
            inviteExternalMember: false,
            isExternalMemberAdded: false
        };
    }

    addMember = selectedObj => {
        const { currentMembersList, membersList } = this.state;
        const filteredList = _filter(membersList, obj => {
            return obj.id !== selectedObj.id;
        });

        _forEach(MembersList, obj => {
            if (obj.id === selectedObj.id) {
                currentMembersList.push(obj);
            }
        });

        this.setState({
            displayMembersList: true,
            isExpandedList: true,
            membersList: filteredList,
            currentMembersList
        });
    }

    toggleCurrentList = () => {
        const { isExpandedList } = this.state;
        this.setState({
            isExpandedList: !isExpandedList
        });
    }

    updateGroup = actions => {
        const { currentMembersList } = this.state;
        const { onHide, externalMemberId } = this.props;
        actions.currentMembersList(currentMembersList);
        if (externalMemberId) {
            this.setState({
                inviteExternalMember: true,
                isExternalMemberAdded: true
            });
        } else {
            onHide();
        }
    }

    cancelMembFromAddition = () => {
        this.setState({
            inviteExternalMember: false
        });
    }

    addMembToAccount = () => {
        this.setState({
            isExternalMemberAdded: true
        });
    }

    render() {
        const { onHide, groupName, actions } = this.props;
        const { displayMembersList, isExpandedList, membersList, currentMembersList, inviteExternalMember, isExternalMemberAdded } = this.state;

        return (
            <Fragment>
                <Modal {...this.props} className="customPopupWrap" >
                    <Modal.Header className="header-styles">
                        <Modal.Title id="contained-modal-title-sm">
                            {!inviteExternalMember && groupName}
                            {/* {inviteExternalMember && 'Invite to group'} */}
                            <button onClick={onHide} type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Modal.Title>
                        <form>
                            <Field
                                name="externalMember"
                                type="text"
                                component="input"
                                // component={floatingLabelField}
                                id="externalMember"
                                placeholder="Invite company member"/>
                        </form>
                    </Modal.Header>
                    <Modal.Body className="modal-body-styles">
                        {!inviteExternalMember && (
                        <Fragment>
                            {displayMembersList && (
                                <div className={(currentMembersList.length > 1) ? 'gm-custom-scrollbar' : ''}>
                                    <h3>
                                        {`${currentMembersList.length} current members`}
                                        <i onClick={this.toggleCurrentList} className={isExpandedList ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
                                    </h3>
                                    {isExpandedList && (
                                        <ul>
                                            {currentMembersList.map(obj => (
                                                <li>
                                                    <Row className="gm-current-members">
                                                        <Col xs={2}><span className="circle-icon-plus">jd</span></Col>
                                                        <Col xs={8}>
                                                            <p>{obj.email}</p>
                                                            <p>{obj.role}</p>
                                                        </Col>
                                                        <Col xs={2}><i className="fa fa-check circle-icon-plus" /></Col>
                                                    </Row>
                                                    <hr />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>)
                            }
                            <div className={(membersList.length > 4) ? 'gm-custom-scrollbar' : ''}>
                                <h3>Add members</h3>
                                <ul>
                                    {membersList.map(obj => (
                                        <li>
                                            <Row>
                                                <Col xs={2}><span className="circle-icon-plus">jd</span></Col>
                                                <Col xs={8}>
                                                    <p>{obj.email}</p>
                                                    <p>{obj.role}</p>
                                                </Col>
                                                <Col xs={2}><i onClick={() => { this.addMember(obj); }} className="fa fa-plus circle-icon-plus" /></Col>
                                            </Row>
                                            <hr />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Fragment>
                        )}
                    </Modal.Body>
                    <Modal.Footer className="modal-footer-styles">
                        {!inviteExternalMember && <Button className="modal-button-styles" onClick={() => { this.updateGroup(actions); }}>Update Group</Button>}
                    </Modal.Footer>
                </Modal>
                {isExternalMemberAdded && <InviteExtMember show={inviteExternalMember} onHide={() => { this.setState({ inviteExternalMember: false }); }}/>}
            </Fragment>
        );
    }
}

AddGroupPopup.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func)
};

const AddGroup = reduxForm({
    form: 'AddGroupPopup',
})(AddGroupPopup);

const selector = formValueSelector('AddGroupPopup');
const mapStateToProps = state => ({
    externalMemberId: selector(state, 'externalMember')
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(GroupManagementAction), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);

// export default connect(null, mapDispatchToProps)(AddGroupPopup);
