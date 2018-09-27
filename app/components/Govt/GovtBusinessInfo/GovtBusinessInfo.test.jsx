import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GovtBusinessPage, {
    govtBusinessInfo,
    validate, renderField,
} from './GovtBusinessInfo';
import { required } from '../../../common/Utils';

// const customerDetails = {
//     name: 'test user',
//     categorys: 'test categorys',
//     agency: 'test agency ',
//     title: 'test title',
//     Email: 'title@email.com',
//     comPhoneText1: '-1',
//     comPhoneText2: '-1',
//     comPhoneText3: '-1',
//     Address: 'Los Angeles',
//     city: 'Los Angeles',
//     state: 'CA',
//     zip: '90111',
// };

// const addCallerContact = sinon.spy;

describe('Test suits for <govtBusinessInfo />', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
        context: { deviceType: { isDesktop: false } },
        login: { userValues: { email: 'Overstock@gmail.com', password: 'Overstock18' } }
    });
    let wrapper;
    let component;
    const handleSubmit = sinon.spy();

    beforeEach(() => {
        component = shallow(<govtBusinessInfo
            handleSubmit={handleSubmit}
        />);
        wrapper = mount(
            <Provider store={store}>
                <GovtBusinessPage
                    submitCase={handleSubmit} />
            </Provider>,
        );
    });
    afterEach(() => {
        wrapper.unmount();
    });

    it('should load the govtBusinessInfo component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('Passing valid emailId', () => {
        const aptError = validate({ Email: 'Overstock@gmail.com' });
        expect(aptError.Email).to.equal(undefined);
    });

    it('renders an error message for the input', () => {
        const input = { name: 'email' };
        const label = 'Email*';
        const meta = { touched: true, error: 'Required' };
        const type = 'email';
        const placeholder = 'Email';
        const element = renderField({
            placeholder, label, type, input, meta,
        });
        shallow(element);
    });

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

    it('should render the component items properly', () => {
        const Govtwrapper = shallow(<govtBusinessInfo />);
        expect(Govtwrapper.find('.formOutterWrap')).to.exist;
    });

    it('Should be called required with value', () => {
        const aptError = required('name');
        expect(aptError).to.equal(undefined);
    });
});
