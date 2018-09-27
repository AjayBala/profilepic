import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BenefitCompareTable from './BenefitCompareTable';

describe('<FooterDetail/>', () => {
    it('should render the component items properly', () => {
        const component = shallow(<BenefitCompareTable />);
        expect(component.contains('Overstock')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<BenefitCompareTable />);
        expect(wrapper.find('.tablewrap')).to.have.lengthOf(1);
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<BenefitCompareTable />);
        expect(wrapper.find('.tick')).to.have.lengthOf(6);
    });
});
