import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ProfessionalForm from './Professional';

describe('Test suits for <ComForm />', () => {
    const shallowWrapper = shallow(<ProfessionalForm />);

    it('Check if the werapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('Professional page API called and UI should render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.previousPage();
        instance.onSubmit();
        instance.closeModel();
        instance.businessTypeChange();
    });

    it('Professional page after render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.nextPage();
        shallowWrapper.setState({ currentStep: 2 });
    });
});
