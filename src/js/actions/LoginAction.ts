import { CurrentUser } from '../service/CurrentUser';
import { Identity } from '../security/Identity';
import IdentityService from '../service/IdentityService';
import { ActionType } from './ActionType';
import handleErr from '../validation/submit/SubmitValidationHandlerZ';

class LoginAction {
    public submit(dispatch, values): Promise<any> {
        const { host, port, username, password } = values;

        //normalize host
        let normalized = host.replace(/\/$/, "");
        const pattern = /^((http|https|ftp):\/\/)/
        if(!pattern.test(normalized))
            normalized = `https://${normalized}`;

        CurrentUser.Session.setSocket({ host: normalized, port });

        return this.login(dispatch, username, password);
    }

    private login(dispatch, username: string, password: string): Promise<any> {
        return new IdentityService()
        .login({ username, password })
        .then(authz => {
            Identity.login(authz.token)

            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: authz
            });

            dispatch({
                type: ActionType.MENU_TOGGLE_AUTH
            })
        })
        .catch(err => {
            Identity.reset();
            return handleErr(err, <any>{
                toForm(dto) {
                    return {
                        username: dto.username,
                        password: dto.password
                    }
                }
            });
        });
    }

    public logout(dispatch): void {
        dispatch({
            type: ActionType.LOGOUT
        })
    }
}

export default new LoginAction();