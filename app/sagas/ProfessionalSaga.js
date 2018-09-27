import { takeLatest, put, call, all } from 'redux-saga/effects';
import _isEmpty from 'lodash/isEmpty';
import getCategroysInBusiness from '../api/ProfessionalApi';
import * as ProfessionalActionTypes from '../actionTypes/ProfessionalActionTypes';

function* getGovtCategorys(action) {
    try {
        const categorysResponse = yield call(getCategroysInBusiness, action);
        let { data } = categorysResponse;
    if (data && !_isEmpty(data)) {
        data = data.map(Obj => {
            Obj.value = Obj.categoryName;
            Obj.text = Obj.categoryName;

            return Obj;
        });
    }
        yield put({ type: ProfessionalActionTypes.GET_BUSINESS_CATEGORYS_SUCCESS, data });
    } catch (error) {
        yield all([
            put({ type: ProfessionalActionTypes.GET_BUSINESS_CATEGORYS_ERROR, error }),
        ]);
    }
}

export default function* watchProfessionalSaga() {
    yield all([
        takeLatest(ProfessionalActionTypes.GET_BUSINESS_CATEGORYS_REQUEST, getGovtCategorys),
    ]);
}
