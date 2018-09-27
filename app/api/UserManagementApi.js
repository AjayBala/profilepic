// import RestClient from './RestClient';
// import { OverstockRestConfig, defaultHeaders } from '../common/OverstockRestConfig';
// import * as ApiConstants from './ApiConstants';
import userList from '../json/Userlist.json';

export default function getUserlist (data) {
    const config = {};
    // config.url = `${OverstockRestConfig.ApiConfig()}${ApiConstants.CUSTOMER_SIGNUP}`;
    // config.headers = defaultHeaders;
    config.data = data.payload;

    return userList;
}
