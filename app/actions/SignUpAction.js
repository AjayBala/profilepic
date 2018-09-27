import * as SignUpActionTypes from '../actionTypes/SignUpActionTypes';

export const signUpRequest = values => ({
    type: SignUpActionTypes.SIGN_UP_REQUEST,
    payload: values,
});

export default {
    signUpRequest,
};
