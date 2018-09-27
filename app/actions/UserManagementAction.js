import * as UserManagementActionTypes from '../actionTypes/UserManagementActionTypes';

export const userManagementRequest = values => ({
    type: UserManagementActionTypes.USER_MANAGEMENT_REQUEST,
    payload: values,
});

export default {
    userManagementRequest,
};
