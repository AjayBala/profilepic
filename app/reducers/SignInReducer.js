import * as types from '../actionTypes/SignInActionTypes';

export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
            newState = Object.assign({}, state);
            newState.payload = action.payload;

        return newState;

        case types.SIGN_IN_SUCCESS:
            newState = Object.assign({}, state);
            const data = action.data;
            newState.SignInUser = data;

        return newState;

        case types.SIGN_IN_ERROR:
            newState = Object.assign({}, state);
            newState.error = action.error;

        return newState;

        case types.GET_EMAILID_TYPE:
            newState = Object.assign({}, state);
            newState.emailId = action.payload;

        return newState;

        default:
            return state;
    }
}
