import React, { Component } from 'react';
import {
    Row, Col,
} from 'react-bootstrap';
import './Members.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteUserPopUpDetails from '../../../Model/DeleteUserPopUpDetails';
import * as UserManagementAction from '../../../../actions/UserManagementAction';

export class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalAppear: false,
            showDelete: false,
            membersArr: [],
            memberArrCount: 0
        };
        this.cellEditProp = {
            mode: 'click',
            blurToSave: true
        };
        this.selectRow = {
            mode: 'checkbox',
            onSelect: this.onTableRowSelect,
            onSelectAll: this.onTableSelectAll
        };
        this.columns = [{
            dataField: 'name',
            text: 'Name',
            sort: true,
            editable: true
          }, {
            dataField: 'email',
            text: 'Email',
            sort: true,
            editable: false
          }, {
            dataField: 'role',
            text: 'Role',
            sort: true,
            editable: true,
            editor: {
                type: Type.SELECT,
                options: [{
                  value: 'Admin',
                  label: 'Admin'
                }, {
                  value: 'Contributor',
                  label: 'Contributor'
                }]
              }
          }, {
            dataField: 'group',
            text: 'Group',
            sort: true,
            editable: true,
            editor: {
                type: Type.SELECT,
                options: [{
                  value: 'Maintenance',
                  label: 'Maintenance   '
                }, {
                  value: 'Tech Team',
                  label: 'Tech Team'
                }, {
                    value: 'Procurement',
                    label: 'Procurement'
                  }]
              }
          }, {
            dataField: 'action',
            text: 'Action',
            sort: true,
            editable: false,
            formatter: this.userManagementIconWrapFormatter,
          }];
    }

    componentWillMount() {
        const { actions } = this.props;
        actions.userManagementRequest();
    }

    onEdit() {
        console.log('edit');
    }

    onDelete = () => {
        this.setState({ isModalAppear: true });
    }

    closeModel = () => {
        this.setState({
            isModalAppear: false,
        });
    }

    onTableRowSelect = (row, isSelected) => {
        const { membersArr } = this.state;
        const staticMemArr = membersArr;
        const index = parseInt(row.id, 10) - 1;
        if (isSelected) {
            staticMemArr.splice(index, 0, row);
        } else {
            const rowindex = this.checkExists(row);
            staticMemArr.splice(rowindex, 1);
        }
            if (staticMemArr.length > 0) {
                this.setState({
                    membersArr: staticMemArr,
                    memberArrCount: staticMemArr.length,
                    showDelete: true
                });
            } else {
                this.setState({
                    staticMemArr: [],
                    memberArrCount: 0,
                    showDelete: false
                });
            }
    }

    checkExists = row => {
        const { membersArr } = this.state;

        for (let i = 0; i < membersArr.length; i++) {
            if (membersArr[i].id === row.id) {
                return i;
            }
        }

        return false;
    }

    onTableSelectAll = (isSelected, rows) => {
        if (isSelected) {
            this.setState({
                membersArr: rows,
                memberArrCount: rows.length,
                showDelete: true
            });
        } else {
            this.setState({
                membersArr: [],
                memberArrCount: 0,
                showDelete: false
            });
        }
    }

    userManagementIconWrapFormatter = () => {
        return (
            <div>
                <div className="UserManagementDeleteIcon" onClick={this.onDelete}>
                    <i className="fa fa-trash-o"/>
                </div>
            </div>
        );
    };


    render() {
        const { isModalAppear, showDelete, membersArr } = this.state;
        const { userDetailsData } = this.props;
        this.products = userDetailsData;

        return (

            <div className="profileWrapBox">

                { isModalAppear
                        ? (
                            <DeleteUserPopUpDetails
                                show={isModalAppear}
                                resetpassword={1}
                                onHide={this.closeModel}
                            />
                    ) : null }

                <Row>
                    <Col lg={12} md={12}>
                        <ul className="profileWrapList">
                            <li><i className="fa fa-user-circle" /></li>
                            <li>Jane Doe</li>
                            <li>janedoe@overstock.com</li>
                            <li>Admin</li>
                            <li>Maintenance</li>
                            <li><a>My profile</a></li>
                        </ul>
                    </Col>
                </Row>

                <BootstrapTable
                    keyField="id"
                    data={this.products}
                    columns={this.columns}
                    bordered={true}
                    selectRow={this.selectRow}
                    dataFormat={this.userManagementIconWrapFormatter}
                    cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
/>
                {showDelete
                    ? (
                        <Row>
                            <Col lg={12} sm={12}>
                                <div className="deleteContainer" onClick={this.onDelete}>
                                    <i className="fa fa-trash-o"/>
                                    <p className="deleteButton" > Remove selected users</p>
                                </div>
                            </Col>
                        </Row>
                ) : null}
            </div>
        );
    }
}
Members.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    userDetailsData: PropTypes.array,
};
const mapStateToProps = state => ({
    userDetailsData: state.userManagement.UserDetails ? state.userManagement.UserDetails : []
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(UserManagementAction), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
