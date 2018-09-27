import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ControlLabel, Row, Col } from 'react-bootstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { userGroups, userRoles } from '../../common/Constants';
import floatingLabelField from '../FloatingLabel/FloatingLabel';
import { required, validateEmail } from '../../common/Utils';
import './SuccessPopup.scss';
import AddGroupPopup from '../DashBoard/UserManagementDetails/GroupManagement/AddGroup/AddGroupPopup';

export const userGroupsDropDown = ({ label, input, meta: { touched, error } }) => (
    <div className={input.value === ''
        ? 'form-group' : 'form-group labelActive'}>
        <div className={touched
            && error ? 'floatLabelWrap errorBorder' : 'floatLabelWrap'}>
            <select {...input} className="inputTxtStyle">
                <option value="" disabled />
                {userGroups.map(obj => (
                    <option value={obj.value} key={obj.id}>
                        {obj.value}
                    </option>
                ))}
            </select>
            <ControlLabel className="labelTxt">{label}</ControlLabel>
            {touched && error && <span className="error_text">{error}</span>}
        </div>
    </div>
);

export const userRolesDropDown = ({ label, input, meta: { touched, error } }) => (
    <div className={input.value === ''
        ? 'form-group' : 'form-group labelActive'}>
        <div className={touched
            && error ? 'floatLabelWrap errorBorder' : 'floatLabelWrap'}>
            <select {...input} className="inputTxtStyle">
                <option value="" disabled />
                {userRoles.map(obj => (
                    <option value={obj.value} key={obj.id}>
                        {obj.value}
                    </option>
                ))}
            </select>
            <ControlLabel className="labelTxt">{label}</ControlLabel>
            {touched && error && <span className="error_text">{error}</span>}
        </div>
    </div>
);
export const validate = values => {
    const error = {};
    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

return error;
};

export class AddUserPopup extends Component {
    constructor(props) {
        super(props);
        const { reset } = this.props;
        reset();
        this.state = {
            showNewUserGroupsPopUp: false,
            defaultValue: '',
            addNewMembersPopUp: false,
            showAddNewGroup: props.addNewGroup
        };
    }

    handleOnChange = event => {
        const { change } = this.props;
        change('newGroup', '');
        if (event.target.value === 'New Group') {
            this.setState({
                showNewUserGroupsPopUp: true
            });
        }
    };

     render() {
        const { onHide, handleSubmit } = this.props;
        const { showNewUserGroupsPopUp, defaultValue, addNewMembersPopUp, showAddNewGroup } = this.state;
        const handleNewUserClick = () => {
            onHide();
        };

        const handleNewGroupsClick = () => {
            const { change } = this.props;
            const groupNameValue = document.getElementsByName('newGroup')[0].value;
            userGroups.push({ id: userGroups.length + 1, value: groupNameValue });
            this.setState({
                showNewUserGroupsPopUp: false,
                defaultValue: ''
            });
            change('groups', groupNameValue);
        };

        return (
            <div>
                {addNewMembersPopUp && <AddGroupPopup show={addNewMembersPopUp} onHide={() => { this.setState({ addNewMembersPopUp: false }); }}/>}
                { !showNewUserGroupsPopUp && !showAddNewGroup
                    ? (
                        <Modal {...this.props} id="newUserPopUp">
                            <Modal.Body className="popUpBodyStyles">
                                <form onSubmit={handleSubmit(handleNewUserClick)}>
                                    <Row>
                                        <Col sm={12}>
                                            <button type="button" className="close" id="newUserPopUpClose" onClick={onHide} aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </Col>
                                        <Col sm={12} align="Center" className="addnewUserTitle">
                                            <span >
                                            Add new user
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Field
                                                name="email"
                                                type="email"
                                                id="newUserPopUpEmailField"
                                                label="Enter email"
                                                component={floatingLabelField}
                                                validate={required} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            {<Field
                                                name="roles"
                                                className="roles"
                                                id="newUserPopUpRolesDropDown"
                                                component={userRolesDropDown}
                                                validate={required}
                                                label="Roles" />
                                        }
                                        </Col>
                                        <Col sm={6}>
                                            {<Field
                                                name="groups"
                                                className="groups"
                                                id="newUserPopUpGroupsDropDown"
                                                component={userGroupsDropDown}
                                                validate={required}
                                                onChange={this.handleOnChange}
                                                value={defaultValue}
                                                label="Groups" />
                                        }
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="formBtnWrap">
                                            <button
                                                id="addNewUserSubmit"
                                                className="formBtn"
                                                type="submit"
                                                onClick={this.handleNewUserClick}>
                                                Add Users
                                            </button>
                                        </div>
                                    </Row>
                                </form>
                            </Modal.Body>
                        </Modal>)
            : (
                <Modal {...this.props}>

                    <Modal.Body className="popUpBodyStyles" id="addNewGroupPopup">
                        <form onSubmit={handleSubmit(handleNewGroupsClick)}>
                            <Row>
                                <Col sm={12}>
                                    <button id="addNewGroupPopupClose" type="button" onClick={onHide} className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </Col>
                                <Col sm={12} align="Center" className="addnewUserTitle">
                                    <span >
                                        Name Your Group
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Field
                                        name="newGroup"
                                        id="addNewGroupPopupGroupField"
                                        type="text"
                                        label="Name Your Group"
                                        component={floatingLabelField}
                                        validate={required} />
                                </Col>
                            </Row>
                            <Row>
                                <div className="formBtnWrap">
                                    <button type="submit" id="addNewGroupPopupSubmit" className="formBtn"> Add Users </button>
                                </div>
                            </Row>
                        </form>
                    </Modal.Body>
                </Modal>
) }
            </div>
        );
    }
}

const addUsersForm = reduxForm({
    form: 'addUsers', // a unique identifier for this form
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(AddUserPopup);

const selector = formValueSelector('addUsers');
const mapStateToProps = state => ({
    emailId: selector(state, 'email'),
    role: selector(state, 'roles'),
    newGroup: selector(state, 'newGroup'),
    initialValues: { newGroup: '' }
});

AddUserPopup.propTypes = {
    successignup: PropTypes.number,
    show: PropTypes.bool,
    bodycontent: PropTypes.string,
    onHide: PropTypes.func,
    role: PropTypes.string,
    emailId: PropTypes.string,
    newGroup: PropTypes.string
};
export default connect(mapStateToProps)(addUsersForm);
