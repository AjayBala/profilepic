import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import ProfessionalInfoForm, {
    validate, ProfessionalInfo,
} from './ProfessionalInfo';
import { required } from '../../../common/Utils';


describe('Test suits for <ProfessionalInfo />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({
            context: { deviceType: { isDesktop: false } },
            login: { userValues: { email: 'Overstock@gmail.com', password: 'Overstock18' } }
        });
        const handleSubmit = sinon.spy();
        wrapperRedComp = shallow(<ProfessionalInfo
            handleSubmit={handleSubmit}
            submitCase={submitCase} />);
        component = mount(
            <Provider store={store}>
                <ProfessionalInfoForm submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('Should be called required with value', () => {
        const aptError = required('name');
        expect(aptError).to.equal(undefined);
    });

    // it('renders an error message for the input', () => {
    //     const input = { name: 'email' };
    //     const label = 'Email*';
    //     const meta = { touched: true, error: 'Required' };
    //     const type = 'email';
    //     const placeholder = 'Email';
    //     const element = FieldFileInput({
    //         placeholder, label, type, input, meta,
    //     });
    //     shallow(element);
    // });

    // it('renders an error message for the input', () => {
    //     const input = { name: 'categorys' };
    //     const label = 'Organization Category*';
    //     const meta = { touched: true, error: 'Required' };
    //     const type = 'text';
    //     const placeholder = 'categorys';
    //     const element = renderDropDown({
    //         placeholder, label, type, input, meta,
    //     });
    //     shallow(element);
    // });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock.com' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('Passing valid emailId', () => {
        const aptError = validate({ email: 'Overstock@gmail.com' });
        expect(aptError.email).to.equal(undefined);
    });

    it('should be fileupload function', () => {
        expect(wrapperRedComp.find('#fileupload').length).to.equal(1);
    });

    it('should be fileupload has display none', () => {
        expect(wrapperRedComp.find('#fileupload').props().style.display).to.equal('none');
    });

    it('Clicking on handleOnChange', () => {
        // wrapperRedComp.handleOnChange({ event: { target: { value: 'Real Estate' } } });
    });
});
