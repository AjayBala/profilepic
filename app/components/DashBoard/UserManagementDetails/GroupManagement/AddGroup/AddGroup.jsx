import React, { Component } from 'react';
import { Col, NavDropdown, MenuItem, Row } from 'react-bootstrap';
import './AddGroup.scss';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddGroupPopup from './AddGroupPopup';
import DeleteConfirmation from '../../../../Model/DeleteConfirmation';
import { DeleteConfirmationMessage } from '../../../../../common/Constants';

class AddNewGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddUserClicked: false,
            isDeleteGroupClicked: false,
            editName: false
        };
        this.newGroupName;
    }

     deleteGroup = () => {
        // const { actions } = this.props;
        // actions.deleteGroup(key);
        this.setState({
            isDeleteGroupClicked: true
         });
     };

     editGroupName = () => {
        this.setState({ editName: true });
     };

    render() {
        const { newGroup } = this.props;
        const { isAddUserClicked, isDeleteGroupClicked, editName } = this.state;

        return (
            <div>
                { newGroup && Object.keys(newGroup).map((key, index) => {
                        this.newGroupName = newGroup[key];

                        return (
                            <div onClick={this.editGroupName}>
                                <Col Key={index} xs={4} className="newGroupStyle">
                                    <div Key={index}>
                                        <Row>
                                            <Col md={10}>
                                                <input type="text" className={editName ? 'gm-edit-name newGroupLabel' : 'newGroupLabel'} value={this.newGroupName} />
                                            </Col>
                                            <Col md={2}>
                                                <NavDropdown
                                                    pullRight
                                                    eventKey={1}
                                                    title={(
                                                        <div style={{ display: 'inline-block' }}>
                                                            <span className="newGroupOption" />
                                                        </div>
                                                    )}>
                                                    <MenuItem active eventKey={1.1} onClick={() => { this.setState({ isAddUserClicked: true }); }}>Edit members</MenuItem>
                                                    <MenuItem eventKey={1.2} onClick={this.deleteGroup}>Delete group</MenuItem>
                                                </NavDropdown>
                                            </Col>
                                        </Row>
                                        <div>
                                            0 members
                                        </div>
                                        <i onClick={() => { this.setState({ isAddUserClicked: true }); }} className="fa fa-plus fa-2x" aria-hidden="true" />
                                    </div>
                                </Col>
                            </div>
                        );
                    })
                }
                {isDeleteGroupClicked && <DeleteConfirmation show={isDeleteGroupClicked} bodycontent={DeleteConfirmationMessage} onHide={() => { this.setState({ isDeleteGroupClicked: false }); }}/>}
                {isAddUserClicked && <AddGroupPopup show={isAddUserClicked} groupName={this.newGroupName} onHide={() => { this.setState({ isAddUserClicked: false }); }}/>}
            </div>
        );
    }
}

AddNewGroup.propTypes = {
    newGroup: PropTypes.object
};

export default AddNewGroup;

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Object.assign(AddNewGroup), dispatch),
// });

// // export default connect(null, mapDispatchToProps)(AddNewGroup);

// const mapStateToProps = state => ({
//     storeObject: state.groupManagement.currentMembersList,
//     currentMembers: [state.groupManagement.currentMembersList ? state.groupManagement.currentMembersList : []]
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddNewGroup);
