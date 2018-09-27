import { takeLatest, put, call, all } from 'redux-saga/effects';
import getUserlist from '../api/UserManagementApi';
import * as UserManagementActionTypes from '../actionTypes/UserManagementActionTypes';

function* getUsers(action) {
    try {
        const getUsersResponse = yield call(getUserlist, action);
        const { userList } = getUsersResponse;
        if (userList.error) {
            const { message } = userList;
            yield put({ type: UserManagementActionTypes.USER_MANAGEMENT_ERROR, error: message });
        } else {
            yield put({ type: UserManagementActionTypes.USER_MANAGEMENT_SUCCESS, userList });
        }
    } catch (error) {
        yield all([
            put({ type: UserManagementActionTypes.USER_MANAGEMENT_ERROR, error }),
        ]);
    }
}

export default function* watchgetUsersSaga() {
    yield all([
        takeLatest(UserManagementActionTypes.USER_MANAGEMENT_REQUEST, getUsers),
    ]);
}
