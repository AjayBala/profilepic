import RestClient from './RestClient';
import { OverstockRestConfig, defaultHeaders } from '../common/OverstockRestConfig';
import * as ApiConstants from './ApiConstants';

export default function signInCase (data) {
    const config = {};
    config.url = `${OverstockRestConfig.ApiConfig()}${ApiConstants.CUSTOMER_SIGNIN}`;
    config.headers = defaultHeaders;
    config.data = data.payload;
    console.log('config', config);

    return RestClient.post(config)
        .then(json => json);
}
