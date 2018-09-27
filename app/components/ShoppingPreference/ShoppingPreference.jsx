import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './ShoppingPreference.scss';
import { ShoppingCategoriesList } from '../../common/Constants';
import history from '../../history';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';

class ShoppingPreference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BusinessCategoryHasValue: false,
        };
        this.searchValue;
    }


    BusinessCategoryOnChange = (e, { value }) => {
        e.persist();
        if (value === undefined || value.length === 0) {
            this.setState({
                BusinessCategoryHasValue: false,
            });
        } else {
            this.setState({
                BusinessCategoryHasValue: true,
            });
        }
    }

    redirectToHomePage = () => {
        history.push('./home');
    }

    render() {
        const { previousPage } = this.props;
        const { BusinessCategoryHasValue } = this.state;

return (
    <div className="shopping-preference">
        <p className="formTextTitle">What type of products do you shop for? (Optional) </p>
        <form className="form-style">
            <div>
                <Field
                    name="categorys"
                    className="categorys"
                    component={MultiSelectDropdown}
                    optionList={ShoppingCategoriesList}
                    onChangeMethod={this.BusinessCategoryOnChange}
                    emptyOrNot={BusinessCategoryHasValue}
                    label={BusinessCategoryHasValue ? 'Selected Items' : 'Suggested Products'}/>

                <div className="terms">
                            By clicking finish you agree to user
                    <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS">Terms & Conditions </a>
                </div>
                <div className="formBtnWrap">
                    <button className="formBtn" type="submit" onClick={previousPage}>Back</button>
                    <button
                        className="formBtn buttonOverrides"
                        type="submit"
                        onClick={this.redirectToHomePage}>
                        {BusinessCategoryHasValue ? 'Finish' : 'Skip for Now & Finish'}
                    </button>
                </div>
            </div>
        </form>
    </div>
        );
    }
}

ShoppingPreference.propTypes = {
    previousPage: PropTypes.func,
};

const ShoppingPreferenceForm = reduxForm({
    form: 'ShoppingPreference', // a unique identifier for this form
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ShoppingPreference);

// export default ShoppingPreference;

export default ShoppingPreferenceForm;
