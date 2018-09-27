import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Row, Col, Grid } from 'react-bootstrap';
import './Professional.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ProfessionalInfo from './ProfessionalInfo/ProfessionalInfo';
import QuickVerify from './Quickverify/Quickverify';
import ShoppingPreference from '../ShoppingPreference/ShoppingPreference';
import history from '../../history';
import ProfessionalAction from '../../actions/ProfessionalAction';

const steps = [{ title: 'Business Information', id: 0 }, { title: 'Quick Verify', id: 1 }, { title: 'Shopping Options', id: 2 }];
class Professional extends React.Component {
    constructor() {
        super();
        this.state = { currentStep: steps[0], businessType: 'Corporation' };
    }

    componentWillMount() {
     const { actions } = this.props;
     actions.getBusinessCategorys();
    }

    nextPage = () => {
        const { currentStep } = this.state;
        this.setState({ currentStep: steps[currentStep.id + 1] });
    }

    previousPage = () => {
        const { currentStep } = this.state;
        this.setState({ currentStep: steps[currentStep.id - 1] });
    }

      onSubmit = () => {
          history.push('./home');
      }

      closeModel = () => {
          history.push('./home');
      }

      businessTypeChange = type => {
          this.setState({ businessType: type });
      }

      render() {
          const { currentStep, businessType } = this.state;
          const { businessCategorys } = this.props;

return (
    <Grid fluid >
        <Row className="insideHeaderWrap" >
            <Col lg={3} md={4} sm={4} />
            <Col lg={6} md={8} sm={8} className="stepProgressWrap" >
                <Stepper
                    className="step-progress"
                    steps={steps}
                    activeStep={currentStep.id}
                    activeColor="#000"
                    completeColor="#000"
                    defaultTitleColor="#000"
                    completeTitleOpacity="1"
                    circleFontColor="transparent" />
            </Col>
        </Row>
        <div>
            {currentStep.id === 0
            && (
                <ProfessionalInfo
                    businessCategorys={businessCategorys}
                    onSubmit={this.nextPage}
                    onBusinessTypeChange={this.businessTypeChange}
                    businessType={businessType}/>
            )}
            {currentStep.id === 1
                         && (
                             <QuickVerify
                                 previousPage={this.previousPage}
                                 onSubmit={this.nextPage}/>
                         )}
            {currentStep.id === 2
                         && (
                             <ShoppingPreference
                                 previousPage={this.previousPage}
                                 onSubmit={this.onSubmit} />
                         )}
        </div>
    </Grid>
          );
      }
}

Professional.propTypes = {
    actions: PropTypes.objectOf(PropTypes.object),
    businessCategorys: PropTypes.array,
};

const mapStateToProps = state => ({
    businessCategorys: state.professional.businessCategorys ? state.professional.businessCategorys : []
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(
        ProfessionalAction,
    ), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Professional);
