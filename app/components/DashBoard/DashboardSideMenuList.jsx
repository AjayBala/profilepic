import React from 'react';
import './DashboardSideMenu.scss';
import { Icon } from 'react-icons-kit';
import { tag } from 'react-icons-kit/feather/tag';
import { user } from 'react-icons-kit/feather/user';
import { clock } from 'react-icons-kit/feather/clock';
import { percent } from 'react-icons-kit/feather/percent';
import { creditCard } from 'react-icons-kit/feather/creditCard';
import { users } from 'react-icons-kit/feather/users';
import { star } from 'react-icons-kit/feather/star';
import { settings } from 'react-icons-kit/feather/settings';
import history from '../../history';


// const Styles = {
//     headerStyle: {
//         backgroundColor: '#AFB3BA',
//         display: 'flex',
//         flexDirection: 'row',
//         paddingTop: 25,
//         paddingBottom: 25
//     },
//     menuStyles: {
//         backgroundColor: '#000',
//     },
//     menuContentColor: {
//         backgroundColor: '#1C1C1C'
//     }
// };

const DashboardSideMenuList = () => ({
    render() {
        return (

            <ul className="DashboardSideMenuListWrap">
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={tag} />
                        Shopping
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('./accountabs')}>
                        <Icon size={20} icon={user} />
                        Account
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={clock} />
                        Order History
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={percent} />
                        Exclusive Offers
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={settings} />
                        Business Tools
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={creditCard} />
                        Payment Management
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('./user-management')}>
                        <Icon size={20} icon={users} />
                        User Management
                    </a>
                </li>
                <li>
                    <a onClick={() => history.push('')}>
                        <Icon size={20} icon={star} />
                        My Reviews
                    </a>
                </li>
            </ul>
        );
    }
});

export default DashboardSideMenuList;
