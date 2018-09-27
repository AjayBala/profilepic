import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as SignInActionTypes from '../actionTypes/SignInActionTypes';
import SignInCase from '../api/SignInApi';

function* SignIn(action) {
    try {
        console.log('Hello');
        const signInResponse = yield call(SignInCase, action);
        console.log('HellosignInResponse');
        const { data } = signInResponse;
        if (data.error) {
            const { message } = data;
            yield put({ type: SignInActionTypes.SIGN_IN_ERROR, error: message });
        } else {
            yield put({ type: SignInActionTypes.SIGN_IN_SUCCESS, data });
        }
    } catch (error) {
        yield all([
            put({ type: SignInActionTypes.SIGN_IN_ERROR, error }),
        ]);
    }
}

export default function* watchSignInSaga() {
    yield all([
        takeLatest(SignInActionTypes.SIGN_IN_REQUEST, SignIn),
    ]);
}
