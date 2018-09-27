import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Background from '../../../assets/Images/home.png';
import ModalPopup from '../Model/SuccessPopup';

const bgStyle = {
    width: '100%',
    float: 'left',
};

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = ({ isModalAppear: true });
    }

    closeModel = () => {
        this.setState({ isModalAppear: false });
    }

    render() {
        const { isModalAppear } = this.state;
        const { bodycontent } = this.props;

return (
    <Fragment>
        <img src={Background} alt="home background" style={bgStyle} onClick={this.closeModel} id="bgImg"/>
        <div>
            {isModalAppear
            && (
            <ModalPopup
                show={isModalAppear}
                successignup={1}
                bodycontent={bodycontent}
                onHide={this.closeModel} />
)}
        </div>
    </Fragment>
        );
    }
}

HomePage.propTypes = {
    bodycontent: PropTypes.string,
};

export default HomePage;
