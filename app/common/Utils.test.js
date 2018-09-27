import { expect } from 'chai';
import { positiveValue } from './Utils';

describe('Utils', () => {
it('Should be called positiveValue with value', () => {
    const aptError = positiveValue(123);
    expect(aptError).to.equal(undefined);
});

it('Should be called positiveValue with value', () => {
    const aptError = positiveValue(-1);
    expect(aptError).to.equal('Must be positive values');
});

// it('On Custom phoneChange with out values', () => {
//     let event = { target: { name: 'comPhoneText1', value: '' } };
//     let aptError = phoneChange(3, event);
//     event = { target: { name: 'comPhoneText2', value: '' } };
//     aptError = phoneChange(3, event);
//     event = { target: { name: 'comPhoneText3', value: '' } };
//     aptError = phoneChange(4, event);
//     expect(aptError).to.equal(undefined);
// });

// it('On Custom phoneChange with out values', () => {
//     const event = { target: { name: 'comPhoneText3', value: '' } };
//     const aptError = phoneChange(4, event);
//     expect(aptError).to.equal(undefined);
// });

// it('On Custom phoneChange with values', () => {
//     let event = { target: { name: 'comPhoneText1', value: '123' } };
//     let aptError = phoneChange(3, event);
//     event = { target: { name: 'comPhoneText2', value: '123' } };
//     aptError = phoneChange(3, event);
//     event = { target: { name: 'comPhoneText3', value: '1234' } };
//     aptError = phoneChange(4, event);
//     expect(aptError).to.equal(undefined);
// });
});
