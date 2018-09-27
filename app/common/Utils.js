import _forEach from 'lodash/forEach';
import _isNull from 'lodash/isNull';

export const validateEmail = values => {
    let error = '';

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    const validEmail = emailPattern.test(values.emailId);
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);
    if (!values.emailId) {
        error = 'Required';
    } else if (!validEmail) {
        error = 'Please Enter a Valid Email';
    }

return error;
};

export const validatePassword = (values, length, capital, special) => {
    let error = '';

    const upperCaseLetters = /[A-Z]/g;
    const SpecialSmallLetters = /[!@#$%^&*)(+=._-]/g;
    const errorConst = [length, capital, special];

    if (!values.password) {
        error = 'Required';
        _forEach(errorConst, value => {
            if (value && value.classList.length) {
                value.classList.remove('errorClass');
                value.classList.remove('valid');
            }
        });
    } else {
        if (values.password.length < 8) {
            _forEach(errorConst, value => {
                if (!_isNull(value)) {
                    value.classList.add('errorClass');
                }
            });
        } else if (!_isNull(length)) {
            length.classList.remove('errorClass');
            length.classList.add('valid');
        }

        if (!_isNull(capital)) {
            if (!values.password.match(upperCaseLetters)) {
                capital.classList.add('errorClass');
            } else {
                capital.classList.add('valid');
                capital.classList.remove('errorClass');
            }
        }

        if (!_isNull(special)) {
            if (!values.password.match(SpecialSmallLetters)) {
                special.classList.add('errorClass');
            } else {
                special.classList.add('valid');
                special.classList.remove('errorClass');
            }
        }
    }

return { error, length, capital, special };
};

export const normalizeZip = value => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

return onlyNums;
};

export const required = value => (value ? undefined : 'Required');

export const positiveValue = value => (
    value && value <= 0 ? 'Must be positive values' : undefined);

export const normalizeCard = (value, previousValue) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    if (!previousValue || value.length > previousValue.length) {
    // typing forward
        if (onlyNums.length === 4) {
            return `${onlyNums}-`;
        }
        if (onlyNums.length === 8) {
            return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}-`;
        }
        if (onlyNums.length === 12) {
            return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}-`;
        }
    }
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`;
    }
    if (onlyNums.length <= 12) {
        return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}`;
    }

return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 16)}`;
};

export const validateYear = values => {
    let error = '';
    if (Number(values.year) < 2019) {
        error = 'Year should be at least 2019';
    } else if (Number(values.year) > 2030) {
        error = 'Year should be below 2030';
    }

    return error;
};

export const validateMonth = values => {
    let error = '';
    if (Number(values.month) < 0) {
        error = 'Month should be between 1 to 12';
    } else if (Number(values.month) > 12) {
        error = 'Month should be between 1 to 12';
    }

    return error;
};


// export const validatePhoneNumber = values => {
//     const errors = '';

//     if (!values.phone) {
//         errors.phone = 'Required';
//     } else if (values.phone.length < 12) {
//         errors.phone = 'Minimum 10 digits mobile number';
//     } else if (values.phone.length > 14) {
//         errors.phone = 'Maximum 12 digits mobile number';
//     }

//     return errors;
// };

export const getEmailDomain = value => {
    let getDomain = null;
    if (value) {
        getDomain = value.substring(value.lastIndexOf('.'));

        return getDomain.toLowerCase();
    }

    return getDomain;
};
