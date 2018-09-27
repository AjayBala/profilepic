import * as GroupManagementActionTypes from '../actionTypes/GroupManagementActionTypes';

export const currentMembersList = list => ({
    type: GroupManagementActionTypes.CURRENT_MEMBERS_LIST,
    payload: list,
});

export const deleteGroup = obj => ({
    type: GroupManagementActionTypes.DELETE_GROUP,
    payload: obj,
});

export default currentMembersList;
