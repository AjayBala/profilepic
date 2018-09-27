import * as SignInActionTypes from '../actionTypes/SignInActionTypes';

export const signInRequest = values => ({
    type: SignInActionTypes.SIGN_IN_REQUEST,
    payload: values,
});

export const sideMenuProps = values => ({
    type: SignInActionTypes.SET_SIDEMENUSTATE,
    payload: values,
});

export const getEmailId = values => ({
    type: SignInActionTypes.GET_EMAILID_TYPE,
    payload: values,
});

export default {
    signInRequest,
    getEmailId,
    sideMenuProps
};
