import React from 'react';
import {
   Nav, NavItem
} from 'react-bootstrap';
import './HeaderComponent.scss';
import { Icon } from 'react-icons-kit';
import { userO } from 'react-icons-kit/fa/userO';
import { heartO } from 'react-icons-kit/fa/heartO';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { list } from 'react-icons-kit/fa/list';
import mainLogo from './ostk_profe_logo.png';
import history from '../../history';


/* eslint-disable react/prop-types */
    const HeaderComponent = ({ location }) => {
        // const { pathname } = location;

return (
    <header id="HeaderWrap">
        <div className="mainLogoWrap">
            <a onClick={() => history.push('/')}>
                <img src={mainLogo} className="mainLogo" alt="HearderLogo"/>
            </a>

        </div>
        {/* { pathname && pathname === '/signup' && 'success'} */}
        <div className="HeaderTopMenu">
            <Nav className="HeaderIconWrap">
                <NavItem href="/dashboard/accountabs">
                    <Icon size={35} icon={userO} />

                </NavItem>
                <NavItem href="#">
                    <Icon size={35} icon={list} />


                </NavItem>
                <NavItem href="#">
                    <Icon size={35} icon={heartO} />

                </NavItem>
                <NavItem href="#">
                    <Icon size={35} icon={shoppingCart} />

                </NavItem>
            </Nav>
        </div>
    </header>
    );
};

export default HeaderComponent;
