import React, { Fragment } from 'react';
import Background from '../../../../assets/Images/home.png';
import ForgotPopUp from '../../Model/SuccessPopup';
import ResetNewPassword from './ResetNewPassword';
import SignIn from '../../SignIn/SignIn';

const bgStyle = {
    width: '100%',
    float: 'left',
};

class ForgotPasswordPopUp extends React.Component {
    constructor() {
        super();
        this.state = ({ isModalAppear: true });
    }

    render() {
        const { isModalAppear } = this.state;
        const { pathname } = location;

        return (
            <Fragment>
                <img src={Background} alt="home background" style={bgStyle} id="bgImg"/>
                <div>
                    {isModalAppear && (
                        <ForgotPopUp
                            show={isModalAppear}
                            resetpassword={1}
                            bodycontent={pathname && pathname === '/signin-two-way-auth' ? <SignIn /> : <ResetNewPassword/>} />
                    )}
                </div>
            </Fragment>
        );
    }
}

export default ForgotPasswordPopUp;
