import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './GroupManagement.scss';
// import { connect } from 'react-redux';
// import AddGroupPopup from './AddGroup/AddGroupPopup';
import AddNewGroup from './AddGroup/AddGroup';

export class GroupManagement extends Component {
    constructor() {
        super();
        this.state = {
            newGroup: {
            },
        };
        this.count = 0;
    }

    addNewGroup = () => {
        const { newGroup } = this.state;
        this.count = this.count + 1;
        newGroup[`groupId-${this.count}`] = 'Name Your Group';
        console.log('Helll00000', newGroup);
        this.setState({
            ...newGroup
        });
    }

    // closePopup = () => {
    //     this.setState({
    //         addGroup: false
    //     });
    // }

    render () {
        const { newGroup } = this.state;
        // const { currentMembers } = this.props;
        console.log('render', newGroup);

        return (
            <div className="container">
                {/* {addGroup && <AddGroupPopup show={addGroup} bodycontent="HUI" onHide={this.closePopup}/>} */}
                <Row>
                    <AddNewGroup newGroup={newGroup}/>
                    <div onClick={this.addNewGroup}>
                        <Col xs={4} className="gm-add-group">
                            Add New Group
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     currentMembers: (state.groupManagement.currentMembersList ? state.groupManagement.currentMembersList : '')
// });

export default GroupManagement;
