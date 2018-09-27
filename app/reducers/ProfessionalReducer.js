import * as types from '../actionTypes/ProfessionalActionTypes';

export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case types.GET_BUSINESS_CATEGORYS_REQUEST:
            newState = Object.assign({}, state);
            newState = action.payload;

        return newState;

        case types.GET_BUSINESS_CATEGORYS_SUCCESS:
            newState = Object.assign({}, state);
            const data = action.data;
            newState.businessCategorys = data;

        return newState;

        case types.GET_BUSINESS_CATEGORYS_ERROR:
            newState = Object.assign({}, state);
            newState.error = action.error;

        return newState;

        default:
            return state;
    }
}
