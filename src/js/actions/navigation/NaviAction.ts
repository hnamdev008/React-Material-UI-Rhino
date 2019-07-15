import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { Identity } from '../../security/Identity';
import { CurrentUser } from '../../service/CurrentUser';

class ActionCreator {
    public clickIdentity(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_ID
        });
    } 

    public unclickIdentity(dispatch) {
        dispatch({
            type: ActionType.MENU_UNCLICK_ID
        });
    }

    public clickProjects(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_PROJECTS
        });
    }

    public clickEngagements(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_ENGAGEMENTS
        });
    }

    public clickLogs(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_LOGS
        });
    }

    public clickAssets(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_ASSETS
        });
    }

    public clickTools(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_TOOLS
        });
    }

    public clickConfig(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_CONFIG
        });
    }

    public unclickConfig(dispatch) {
        dispatch({
            type: ActionType.MENU_UNCLICK_CONFIG
        });
    }

    public logout(dispatch) {
        Identity.logout();

        dispatch({
            type: ActionType.LOGOUT
        });

        dispatch({
            type: ActionType.MENU_TOGGLE_AUTH
        })
    }

    public clickMail(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_MAIL
        });
    }   
}

export const NaviAction: ActionCreator = new ActionCreator();