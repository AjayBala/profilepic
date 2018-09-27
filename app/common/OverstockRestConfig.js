export class OverstockRestConfig {
    static ApiConfig = () => 'http://192.168.4.92:8082/b2b/';
}

export default OverstockRestConfig;

export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
};
