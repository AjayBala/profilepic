import React from 'react';
import {
     ControlLabel
} from 'react-bootstrap';
import './FloatingLabel.scss';

const passFieldClick = () => {
    console.log('dsfsdf');
};

const floatingLabelField = ({
    input, label, className, type, disabled, showEyeIcon, meta: { touched, error },
}) => (
    <div className={input.value === '' ? `form-group ${className}` : `form-group labelActive ${className}`}>
        <div className={touched
            && error ? 'floatLabelWrap errorBorder' : 'floatLabelWrap'}>
            <input
                {...input}
                autoComplete="off"
                type={type}
                disabled={disabled}
                className="inputTxtStyle" />
            {showEyeIcon}
            <ControlLabel className="labelTxt">{label}</ControlLabel>
            {touched && ((
                error && (<span className="error_text">{error}</span>)
                ))}
        </div>
    </div>
);

export default floatingLabelField;
