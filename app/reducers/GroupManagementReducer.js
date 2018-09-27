import * as types from '../actionTypes/GroupManagementActionTypes';

export default function(state = {}, action) {
    let newState = {};

    switch (action.type) {
        case types.CURRENT_MEMBERS_LIST:
            newState = Object.assign({}, state);
            newState.currentMembersList = action.payload;

            return newState;

        case types.DELETE_GROUP:
        newState = Object.assign({}, state);
        newState.groupToBeDeleted = action.payload;

        return newState;

        default:
            return state;
    }
}
