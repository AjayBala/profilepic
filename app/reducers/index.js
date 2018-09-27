import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import GroupManagementReducer from './GroupManagementReducer';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import GovtReducer from './GovtReducer';
import ProfessionalReducer from './ProfessionalReducer';
import UserManagementReducer from './UserManagementReducer';
import AccountReducer from './AccountReducer';

const allReducers = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer,
    govt: GovtReducer,
    groupManagement: GroupManagementReducer,
    professional: ProfessionalReducer,
    userManagement: UserManagementReducer,
    form: forms,
    account: AccountReducer
});
export default allReducers;
