import * as types from '../actionTypes/UserManagementActionTypes';

export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case types.USER_MANAGEMENT_REQUEST:
            newState = Object.assign({}, state);
            newState.payload = action.payload;

        return newState;

        case types.USER_MANAGEMENT_SUCCESS:
            newState = Object.assign({}, state);
            const data = action.userList;
            newState.UserDetails = data;

        return newState;

        case types.USER_MANAGEMENT_ERROR:
            newState = Object.assign({}, state);
            newState.error = action.error;

        return newState;

        default:
            return state;
    }
}
