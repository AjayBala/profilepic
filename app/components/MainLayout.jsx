import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';

const MainLayout = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
