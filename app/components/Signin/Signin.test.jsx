import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SignIn from './SignIn';

describe('Test suits for <SignIn />', () => {
    const shallowWrapper = shallow(<SignIn />);

    it('Check if the wrapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('Signin page API called and UI should render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.previousPage();
        });

    it('Signin page after render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.nextPage();
        shallowWrapper.setState({ currentStep: 2 });
    });

    // it('To invoke AuthenticationRequired', () => {
    //     const instance = shallowWrapper.instance();
    //     const { isAuthenticationRequired } = 'true';
    //     instance.AuthenticationRequired({
    //         isAuthenticationRequired,
    //         if () {
    //             return this.nextPage();
    //         }
    //     });
    //     shallowWrapper.setState({ currentStep: 1 });
    //     expect(instance.state.currentStep).to.be.equal(1);
    //     // console.log();
    // });

    // it('To invoke Login', () => {
    //     console.log(routingTo);
    //     // expect(shallowWrapper.props().location).to.be.equal(undefined);
    // });
});
