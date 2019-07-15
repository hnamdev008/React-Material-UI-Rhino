import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { MenuState } from '../../model/state/menu/MenuState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { Identity } from '../../security/Identity';

const defaultState: MenuState = {
    handle: Identity.getHandle(),
    identity: { selected: false },
    projects: { selected: false },
    engagements: { selected: false },
    logs: { selected: false },
    assets: { selected: false },
    tools: { selected: false }, 
    config: { selected: false },
    mail: { selected: false }
}

const unselectAll = (state: MenuState) => {
    for(const menu in state) {
        if(state[menu] && state[menu].selected)
            state[menu].selected = false;
    }
}

export const reducer: Reducer<MenuState> = (state = defaultState, action: Action): MenuState => {
    const newState = copy<MenuState>(state);

    switch(action.type) {
        case(ActionType.MENU_CLICK_ID):
            newState.config.selected = false;
            newState.mail.selected = false;
            newState.identity.selected = true;
            return newState;

        case(ActionType.MENU_UNCLICK_ID):
            newState.config.selected = false;
            newState.mail.selected = false;
            newState.identity.selected = false;
            return newState;

        case(ActionType.MENU_CLICK_PROJECTS):
            unselectAll(newState);
            newState.projects.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_ENGAGEMENTS):
            unselectAll(newState);
            newState.engagements.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_LOGS):
            unselectAll(newState);
            newState.logs.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_ASSETS):
            unselectAll(newState);
            newState.assets.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_TOOLS):
            unselectAll(newState);
            newState.tools.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_CONFIG):
            newState.config.selected = true;
            newState.mail.selected = false;
            newState.identity.selected = false;
            newState.config.selected = true;
            return newState;

        case(ActionType.MENU_UNCLICK_CONFIG):
            newState.config.selected = false;
            newState.mail.selected = false;
            newState.identity.selected = false;
            return newState;

        case(ActionType.MENU_CLICK_MAIL):
            newState.config.selected = false;
            newState.mail.selected = true;
            newState.identity.selected = false;
            newState.mail.selected = true;
            return newState;

        case(ActionType.MENU_TOGGLE_AUTH):
            unselectAll(newState);
            return newState;

        default: return state;
    }
};