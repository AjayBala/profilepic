import * as types from '../actionTypes/AccountsActionTypes';

export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case types.ACCOUNT_REQUEST:
            newState = Object.assign({}, state);
            newState.payload = action.payload;

        return newState;

        case types.ACCOUNT_SUCCESS:
            newState = Object.assign({}, state);
            const data = action.userList;
            newState.UserDetails = data;

        return newState;

        case types.ACCOUNT_ERROR:
            newState = Object.assign({}, state);
            newState.error = action.error;

        return newState;

        default:
           return state;
    }
}
