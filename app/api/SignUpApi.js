import RestClient from './RestClient';
import { OverstockRestConfig, defaultHeaders } from '../common/OverstockRestConfig';
import * as ApiConstants from './ApiConstants';

export default function signUpCase (data) {
    const config = {};
    config.url = `${OverstockRestConfig.ApiConfig()}${ApiConstants.CUSTOMER_SIGNUP}`;
    config.headers = defaultHeaders;
    config.data = data.payload;

    return RestClient.post(config)
        .then(json => json);
}
