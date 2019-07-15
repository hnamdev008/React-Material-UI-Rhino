import store from '../reducers/store';
import LoginAction from '../actions/LoginAction';
import { Identity } from './Identity';
import { Dir } from '../common/Constants'; 
import { Role } from './Role';

export const permit = (role: Role): void => {
    switch(role) {
        case Role.AUTHENTICATED:
            Identity.isLoggedInAsync()
            .then(loggedIn => {
                if(!loggedIn)
                    LoginAction.logout(store.dispatch);
            })
            break;        
    }
}