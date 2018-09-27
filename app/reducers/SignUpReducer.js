import * as types from '../actionTypes/SignUpActionTypes';

export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case types.SIGN_UP_REQUEST:
            newState = Object.assign({}, state);
            newState.payload = action.payload;

        return newState;

        case types.SIGN_UP_SUCCESS:
            newState = Object.assign({}, state);
            const data = action.data;
            newState.SignUpUser = data;

        return newState;

        case types.SIGN_UP_ERROR:
            newState = Object.assign({}, state);
            newState.error = action.error;

        return newState;

        default:
            return state;
    }
}
