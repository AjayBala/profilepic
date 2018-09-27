import * as AccountsActionTypes from '../actionTypes/AccountsActionTypes';

export const accountRequest = values => ({
    type: AccountsActionTypes.ACCOUNT_REQUEST,
    payload: values,
});

export default {
    accountRequest,
};
