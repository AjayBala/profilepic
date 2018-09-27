import { expect } from 'chai';
import * as SignInActionTypes from '../actionTypes/SignInActionTypes';
import * as actions from './SigninAction';

describe('SignIn Actions', () => {
    describe('SignIn Action Form', () => {
        let signInAction = null;
        it('returns correct action type get note', () => {
            signInAction = actions.loginValues();
            expect(signInAction.type).to.equal(SignInActionTypes.GET_LOGIN_VALUES_TYPE);
        });
        it('returns correct action type get note', () => {
            signInAction = actions.getEmailId();
            expect(signInAction.type).to.equal(SignInActionTypes.GET_EMAILID_TYPE);
        });
    });
});
