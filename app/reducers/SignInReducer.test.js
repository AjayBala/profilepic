import { expect } from 'chai';
import SignInReducer from './SignInReducer';
// import * as actions from '../actionTypes/SignInActionTypes';

describe('SearchFilterReducer', () => {
    const loginData = {
        emailId: 'professional@overstock.com',
        password: 'Overstock18',
    };
    it('Should be called LOGIN_VALUES', () => {
        expect(
            SignInReducer(undefined, {
                type: 'LOGIN_VALUES',
                payload: loginData,
            }),
        ).to.deep.equal({ userValues: loginData });
    });

    it('Should be called LOGIN_VALUES', () => {
        expect(
            SignInReducer([], {
                type: 'LOGIN_VALUES',
                payload: loginData,
            }),
        ).to.deep.equal({ userValues: loginData });
    });


    it('Should be called GET_EMAILID', () => {
        expect(
            SignInReducer(undefined, {
                type: 'GET_EMAILID',
                payload: loginData.emailId,
            }),
        ).to.deep.equal({ emailId: loginData.emailId });
    });
    it('initialstate', () => {
        expect(
            SignInReducer(undefined, {}),
        ).to.deep.equal({});
    });
});
