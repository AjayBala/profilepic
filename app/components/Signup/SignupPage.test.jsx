import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import SignUpPage from './SignUpPage';


describe('<SignUpPage/>', () => {
    const location = { pathname: '/signup' };
    const component = shallow(<SignUpPage location={location}/>);
    it('should render the component items properly', () => {
        expect(component.contains(' Discover the one-stop shop that works for you. ')).to.exist;
    });
    it('should render the component items properly', () => {
        expect(component.find('.bgStyle')).to.have.lengthOf(1);
    });
    it('should render the component items properly , to check bnrFormOutWrap has been used twice', () => {
        const wrapper = shallow(<SignUpPage location={location}/>);
        expect(wrapper.find('.bnrFormOutWrap')).to.have.lengthOf(1);
    });
    it('Should render the user-migration-confirmation component', () => {
        component.setProps({
            location: { pathname: '/user-migration-confirmation' },
        });
    });
});
