import * as ProfessionalActionTypes from '../actionTypes/ProfessionalActionTypes';

export const getBusinessCategorys = (values = {}) => ({
    type: ProfessionalActionTypes.GET_BUSINESS_CATEGORYS_REQUEST,
    payload: values,
});

export default {
    getBusinessCategorys
};
