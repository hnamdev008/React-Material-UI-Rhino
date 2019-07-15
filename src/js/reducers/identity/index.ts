import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import LoginState from '../../model/state/login/LoginState';
import { Identity } from '../../security/Identity';


const reducer: Reducer<LoginState> = (state: LoginState = { 
    isOpen: false }, action: Action): LoginState => {
        if(action.type === ActionType.LOGOUT)
            return {
                isOpen: true
            }
        else if(action.type === ActionType.LOGIN_SUCCESS) {
            Identity.login(action.payload.token);
            return {
                isOpen: false
            }
        }

        return state;
}

export default reducer;