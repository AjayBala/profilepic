import { takeLatest, put, call, all } from 'redux-saga/effects';
import _isEmpty from 'lodash/isEmpty';
import getCategroysInGovt from '../api/GovtApi';
import * as GovtActionTypes from '../actionTypes/GovtActionTypes';

function* getGovtCategorys(action) {
    try {
        const categorysResponse = yield call(getCategroysInGovt, action);
        let { data } = categorysResponse;
        if (data && !_isEmpty(data)) {
            data = data.map(Obj => {
                Obj.value = Obj.categoryName;
                Obj.text = Obj.categoryName;

                return Obj;
            });
        }
        yield put({ type: GovtActionTypes.GET_CATEGORYS_SUCCESS, data });
    } catch (error) {
        yield all([
            put({ type: GovtActionTypes.GET_CATEGORYS_ERROR, error }),
        ]);
    }
}

export default function* watchGovtSaga() {
    yield all([
        takeLatest(GovtActionTypes.GET_CATEGORYS_REQUEST, getGovtCategorys),
    ]);
}
